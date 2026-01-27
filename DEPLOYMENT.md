# Deployment Guide - Secure Authentication Setup

## Security Features Implemented

✅ **Server-side authentication** - Credentials never exposed to client  
✅ **Signed tokens** - HMAC-SHA256 signed session tokens  
✅ **Token expiration** - 30-minute session timeout  
✅ **Rate limiting** - 5 failed attempts before lockout  
✅ **Account lockout** - 5-minute lockout after failed attempts  
✅ **Timing attack prevention** - Constant-time comparison & random delays  
✅ **Secure token storage** - sessionStorage (cleared on browser close)  

---

## Deployment Steps (Netlify)

### 1. Install Netlify CLI (for local testing)
```bash
npm install -g netlify-cli
```

### 2. Test Locally with Functions
```bash
# Create a .env file with your credentials
echo "AUTH_USERNAME=elite" > .env
echo "AUTH_PASSWORD=Pass@1122@@pass" >> .env
echo "JWT_SECRET=$(openssl rand -hex 32)" >> .env

# Run with Netlify Dev
npm run dev:netlify
```

### 3. Deploy to Netlify

#### Option A: Via Netlify Dashboard
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings will be auto-detected from `netlify.toml`
5. Click "Deploy site"

#### Option B: Via CLI
```bash
netlify login
netlify init
netlify deploy --prod
```

### 4. Configure Environment Variables (CRITICAL!)

After deploying, you **MUST** set the environment variables in Netlify:

1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:

| Variable | Value |
|----------|-------|
| `AUTH_USERNAME` | `elite` |
| `AUTH_PASSWORD` | `Pass@1122@@pass` |
| `JWT_SECRET` | (Generate a random 64-character hex string) |

To generate a secure JWT_SECRET:
```bash
openssl rand -hex 32
```
Or use: https://generate-secret.vercel.app/64

### 5. Redeploy After Setting Variables
After adding environment variables, trigger a redeploy:
- Go to **Deploys** tab → **Trigger deploy** → **Deploy site**

---

## Security Notes

⚠️ **Important Security Considerations:**

1. **Change the default credentials** before going to production
2. **Never commit `.env` files** to version control
3. **Use HTTPS only** (Netlify provides this automatically)
4. **Rotate JWT_SECRET** periodically
5. **Monitor failed login attempts** in Netlify Functions logs

---

## Testing the Deployment

1. Visit your deployed site URL
2. Try logging in with incorrect credentials - verify lockout works
3. Login with correct credentials
4. Verify logout works
5. Close browser and reopen - should require re-login (sessionStorage)

---

## Troubleshooting

**Login fails with "Server configuration error":**
- Environment variables not set. Check Netlify dashboard.

**Login fails but credentials are correct:**
- Redeploy after setting environment variables.

**Functions not working:**
- Check Netlify Functions logs in dashboard.
- Verify `netlify.toml` is in project root.
