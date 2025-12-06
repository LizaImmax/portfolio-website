# Deployment Guide - Portfolio Website

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Portfolio website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📧 Configure Email Service (Optional)

### Option 1: Using Resend

1. **Sign up at [resend.com](https://resend.com)**

2. **Install Resend**
   ```bash
   npm install resend
   ```

3. **Add Environment Variable**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add: `RESEND_API_KEY` with your API key

4. **Update Contact API**
   - Edit `app/api/contact/route.ts`
   - Uncomment the Resend integration code

### Option 2: Using SendGrid

1. **Sign up at [sendgrid.com](https://sendgrid.com)**

2. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Add Environment Variable**
   - Add: `SENDGRID_API_KEY`

4. **Update the API route with SendGrid code**

## 🎨 Customization Before Deploy

### Update Personal Data
Edit `lib/data.ts`:
- ✅ Personal information
- ✅ Skills
- ✅ Projects
- ✅ Experience
- ✅ Certifications

### Update Meta Tags
Edit `app/layout.tsx`:
- Update title and description
- Add your social media links for OpenGraph

### Add Your Own Images (Optional)
- Replace the default avatar/logo in Hero component
- Add project screenshots

## ✅ Pre-Deployment Checklist

- [ ] All personal data updated in `lib/data.ts`
- [ ] Contact email verified
- [ ] Links tested (GitHub, LinkedIn)
- [ ] Responsive design tested on different devices
- [ ] Dark/Light mode working
- [ ] Build successful (`npm run build`)
- [ ] Environment variables set (if using email service)
- [ ] Custom domain configured (optional)

## 🔄 Continuous Deployment

Once deployed to Vercel:
- Every push to `main` branch auto-deploys to production
- Pull requests create preview deployments
- Monitor deployments in Vercel Dashboard

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Email Not Sending
- Check environment variables in Vercel
- Verify API key is correct
- Check API route logs in Vercel

### Deployment Issues
- Check Vercel deployment logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

## 📊 Post-Deployment

1. **Test all features**:
   - Navigation
   - Contact form
   - Theme toggle
   - All links
   - Responsive design

2. **Add to your profiles**:
   - Update LinkedIn with portfolio link
   - Add to GitHub profile README
   - Share on social media

3. **Monitor performance**:
   - Use Vercel Analytics
   - Check Google PageSpeed Insights
   - Monitor Core Web Vitals

## 🎉 You're Live!

Your portfolio is now live and ready to showcase your work to the world!

Need help? Create an issue on GitHub or contact me at immaxliza@gmail.com
