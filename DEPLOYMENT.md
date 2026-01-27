# Deployment Guide - Secure Authentication Setup

## Security Features Implemented

✅ **Environment-based credentials** - Set via hosting dashboard (not in code)  
✅ **Signed tokens** - HMAC-SHA256 signed session tokens  
✅ **Token expiration** - 30-minute session timeout  
✅ **Rate limiting** - 5 failed attempts before lockout  
✅ **Account lockout** - 5-minute lockout after failed attempts  
✅ **Timing attack prevention** - Random delays on login  
✅ **Secure token storage** - sessionStorage (cleared on browser close)  

---

## Deployment Steps (Render - RECOMMENDED)

### 1. Create Static Site on Render

1. Go to [render.com](https://render.com) and sign in
2. Click **New** → **Static Site**
3. Connect your GitHub repository
4. Configure build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

### 2. Set Environment Variables (CRITICAL!)

**Before deploying**, add these environment variables in Render:

1. Go to your site → **Environment**
2. Add the following variables:

| Variable | Value |
|----------|-------|
| `VITE_AUTH_USER` | `elite` |
| `VITE_AUTH_PASS` | `Pass@1122@@pass` |

⚠️ **Important:** Variables must start with `VITE_` to be available at build time!

### 3. Deploy

Click **Manual Deploy** → **Deploy latest commit**

### 4. Reset Lockout (If Locked Out)

If you got locked out, open browser DevTools (F12) → Console → run:
```javascript
sessionStorage.removeItem('auth_lockout');
location.reload();
```

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
