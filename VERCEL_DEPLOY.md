# 🚀 Deploy to Vercel - Quick Guide

Your portfolio is ready to deploy! Follow these simple steps:

## Method 1: Vercel Dashboard (Recommended - Easiest!)

### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account

### Step 2: Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. Find **"portfolio-website"** in your repositories
3. Click **"Import"**

### Step 3: Configure Project
1. **Framework Preset**: Next.js (auto-detected ✅)
2. **Root Directory**: Leave as is
3. **Build Command**: `npm run build` (auto-filled ✅)
4. **Output Directory**: `.next` (auto-filled ✅)

### Step 4: Add Environment Variable
Click **"Environment Variables"** and add:
- **Name**: `RESEND_API_KEY`
- **Value**: Your Resend API key (from resend.com)
- Click **"Add"**

### Step 5: Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. Your site is LIVE! 🎉

You'll get a URL like: `https://portfolio-website-xxxxx.vercel.app`

---

## Method 2: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## After Deployment

### ✅ Important Next Steps:

1. **Add Resend API Key** (if not done in Step 4)
   - Go to your project settings
   - Environment Variables
   - Add `RESEND_API_KEY`
   - Redeploy

2. **Test Contact Form**
   - Visit your live site
   - Scroll to contact section
   - Send a test message
   - Check your email!

3. **Add Custom Domain** (Optional)
   - In Vercel: Settings → Domains
   - Add your domain
   - Update DNS records

4. **Update README**
   - Add your live URL to README.md
   - Push to GitHub

### 🎯 Your Live URLs:
- **Vercel URL**: Will be shown after deployment
- **Custom Domain**: Add later in settings

---

## Troubleshooting

**Build Failed?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally: `npm run build`

**Contact Form Not Working?**
- Check if RESEND_API_KEY is added
- Verify the key is correct
- Check function logs in Vercel

**Need Help?**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Deployment docs: [vercel.com/docs](https://vercel.com/docs)

---

## What Happens on Deployment

✅ Vercel will:
1. Pull your code from GitHub
2. Install dependencies
3. Run build process
4. Deploy to CDN
5. Provide a live URL
6. Enable automatic deployments on future commits

Every time you push to `main`, Vercel automatically redeploys! 🚀

---

**Ready to deploy? Go to [vercel.com](https://vercel.com) now!** 🎉
