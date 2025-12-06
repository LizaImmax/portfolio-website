# Elizabeth Muthoni - Portfolio Website

A modern, bold, and colorful portfolio website showcasing my work as a Fullstack Engineer, AWS Solutions Architect, and Cloud Security Specialist.

🌐 **Live Site**: [Coming Soon - Deploying to Vercel]

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14+, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Contact Form**: Functional contact form with Resend email integration
- **SEO Optimized**: Meta tags and OpenGraph support
- **Fast Performance**: Optimized for speed and Core Web Vitals
- **Scroll to Top**: Smooth scrolling button for easy navigation
- **Statistics Counter**: Animated numbers showcasing impact
- **Services Section**: Detailed offerings including technical writing
- **Now Page**: Current projects in the Upepo ecosystem

## 📑 Sections

1. **Hero/About** - Professional introduction with GitHub profile picture
2. **Statistics** - Animated impact metrics
3. **Skills** - Categorized tech stack including AI/ML
4. **Projects** - Featured work including Upepo ecosystem
5. **Experience** - Interactive timeline
6. **Certifications** - AWS, Azure, and more
7. **Services** - Backend, Cloud, Security, DevSecOps, Technical Writing
8. **Now** - Current projects: Upepo Cloud, Voices, Soul, Book Club
9. **Contact** - Working form with email delivery

## 🛠️ Technologies Used

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **Forms**: React Hook Form
- **Email**: Resend
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/LizaImmax/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local and add:
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit - Portfolio website"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `RESEND_API_KEY`
   - Click Deploy

### Manual Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📧 Email Setup

The contact form uses Resend. To enable:

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Get your API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`
4. For Vercel: Add in project settings → Environment Variables

See `EMAIL_SETUP.md` for detailed instructions.

## 📝 Customization

All content is in `lib/data.ts`. Update:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Certifications

See `CUSTOMIZATION.md` for detailed guide.

## 📄 Adding Your Resume

Place your CV in `public/Elizabeth_Muthoni_Resume.pdf` or update the link in `components/Hero.tsx`.

## 🎯 Project Structure

```
portfolio-website/
├── app/              # Next.js app router
├── components/       # React components
├── lib/             # Data and utilities
├── public/          # Static assets
└── ...config files
```

See `PROJECT_STRUCTURE.md` for detailed information.

## ✅ Features Checklist

- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Animated statistics
- ✅ Contact form with email
- ✅ Download CV button
- ✅ GitHub profile picture
- ✅ Scroll to top button
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Accessible

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Mobile-first design

## 🤝 Connect

- **LinkedIn**: [Elizabeth Muthoni](https://www.linkedin.com/in/elizabeth-muthoni-44a378129/)
- **GitHub**: [@LizaImmax](https://github.com/LizaImmax)
- **Email**: immaxliza@gmail.com

---

Made with ❤️ by Elizabeth Muthoni | Powered by Next.js & Vercel


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
