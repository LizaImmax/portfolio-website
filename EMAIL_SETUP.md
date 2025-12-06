# Setting Up Email for Contact Form

Your contact form is now configured to send emails using Resend! Here's how to complete the setup:

## Step 1: Get Your Free Resend API Key

1. **Sign up at Resend** (Free tier included!)
   - Go to: https://resend.com
   - Sign up with your email or GitHub

2. **Create an API Key**
   - After signing in, go to "API Keys"
   - Click "Create API Key"
   - Give it a name like "Portfolio Contact Form"
   - Copy the API key (you'll only see it once!)

## Step 2: Add API Key to Your Project

**Option A: Local Development**

1. Open the file: `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_123abc456def789...
   ```
3. Save the file
4. Restart your dev server

**Option B: Vercel Deployment**

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - Name: `RESEND_API_KEY`
   - Value: Your API key from Resend
5. Redeploy your site

## Step 3: Verify Domain (Optional - For Production)

For the free tier, Resend provides a test domain. For production:

1. In Resend dashboard, go to "Domains"
2. Add your custom domain
3. Add the DNS records they provide
4. Update the `from` email in `app/api/contact/route.ts`:
   ```typescript
   from: "Portfolio <contact@yourdomain.com>"
   ```

## How It Works Now

When someone submits the contact form:
1. Form data is validated
2. Sent to `/api/contact` endpoint
3. Resend API sends email to: **immaxliza@gmail.com**
4. You receive a nicely formatted email with:
   - Sender's name
   - Sender's email (as reply-to)
   - Subject
   - Message
   - Timestamp

## Testing

1. Add your API key to `.env.local`
2. Restart your dev server
3. Fill out the contact form on your site
4. Check your email (immaxliza@gmail.com)

## Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms!

## Troubleshooting

**Email not arriving?**
- Check your API key is correct
- Check spam/junk folder
- Verify the key is in `.env.local` (not `.env.example`)
- Make sure you restarted the dev server

**Need help?**
- Resend docs: https://resend.com/docs
- Their support is very responsive!

---

Once you add your API key, emails will work automatically! 📧✨
