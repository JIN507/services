const crypto = require('crypto');

// Credentials from environment variables (set in Netlify dashboard)
const VALID_USER = process.env.AUTH_USERNAME;
const VALID_PASSWORD = process.env.AUTH_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

// Generate a secure token
function generateToken(username) {
    const payload = {
        user: username,
        exp: Date.now() + (30 * 60 * 1000), // 30 minutes
        iat: Date.now()
    };
    const data = JSON.stringify(payload);
    const signature = crypto
        .createHmac('sha256', JWT_SECRET)
        .update(data)
        .digest('hex');
    return Buffer.from(JSON.stringify({ data, signature })).toString('base64');
}

// Verify token
function verifyToken(token) {
    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
        const expectedSignature = crypto
            .createHmac('sha256', JWT_SECRET)
            .update(decoded.data)
            .digest('hex');
        
        if (expectedSignature !== decoded.signature) {
            return { valid: false, error: 'Invalid signature' };
        }
        
        const payload = JSON.parse(decoded.data);
        if (Date.now() > payload.exp) {
            return { valid: false, error: 'Token expired' };
        }
        
        return { valid: true, user: payload.user };
    } catch {
        return { valid: false, error: 'Invalid token' };
    }
}

// Constant-time string comparison to prevent timing attacks
function secureCompare(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { action, username, password, token } = body;

        // Login action
        if (action === 'login') {
            // Validate credentials exist in environment
            if (!VALID_USER || !VALID_PASSWORD) {
                console.error('AUTH_USERNAME or AUTH_PASSWORD not configured');
                return {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ error: 'Server configuration error' })
                };
            }

            // Add delay to prevent brute force (100-300ms random)
            await new Promise(r => setTimeout(r, 100 + Math.random() * 200));

            // Secure comparison
            const userMatch = secureCompare(username, VALID_USER);
            const passMatch = secureCompare(password, VALID_PASSWORD);

            if (userMatch && passMatch) {
                const token = generateToken(username);
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({ success: true, token })
                };
            }

            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ success: false, error: 'Invalid credentials' })
            };
        }

        // Verify token action
        if (action === 'verify') {
            const result = verifyToken(token);
            return {
                statusCode: result.valid ? 200 : 401,
                headers,
                body: JSON.stringify(result)
            };
        }

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid action' })
        };

    } catch (error) {
        console.error('Auth error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
