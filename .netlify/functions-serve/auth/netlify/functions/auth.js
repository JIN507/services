// netlify/functions/auth.js
var crypto = require("crypto");
var VALID_USER = process.env.AUTH_USERNAME;
var VALID_PASSWORD = process.env.AUTH_PASSWORD;
var JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex");
function generateToken(username) {
  const payload = {
    user: username,
    exp: Date.now() + 30 * 60 * 1e3,
    // 30 minutes
    iat: Date.now()
  };
  const data = JSON.stringify(payload);
  const signature = crypto.createHmac("sha256", JWT_SECRET).update(data).digest("hex");
  return Buffer.from(JSON.stringify({ data, signature })).toString("base64");
}
function verifyToken(token) {
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    const expectedSignature = crypto.createHmac("sha256", JWT_SECRET).update(decoded.data).digest("hex");
    if (expectedSignature !== decoded.signature) {
      return { valid: false, error: "Invalid signature" };
    }
    const payload = JSON.parse(decoded.data);
    if (Date.now() > payload.exp) {
      return { valid: false, error: "Token expired" };
    }
    return { valid: true, user: payload.user };
  } catch {
    return { valid: false, error: "Invalid token" };
  }
}
function secureCompare(a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}
exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }
  try {
    const body = JSON.parse(event.body || "{}");
    const { action, username, password, token } = body;
    if (action === "login") {
      if (!VALID_USER || !VALID_PASSWORD) {
        console.error("AUTH_USERNAME or AUTH_PASSWORD not configured");
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: "Server configuration error" })
        };
      }
      await new Promise((r) => setTimeout(r, 100 + Math.random() * 200));
      const userMatch = secureCompare(username, VALID_USER);
      const passMatch = secureCompare(password, VALID_PASSWORD);
      if (userMatch && passMatch) {
        const token2 = generateToken(username);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, token: token2 })
        };
      }
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ success: false, error: "Invalid credentials" })
      };
    }
    if (action === "verify") {
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
      body: JSON.stringify({ error: "Invalid action" })
    };
  } catch (error) {
    console.error("Auth error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
//# sourceMappingURL=auth.js.map
