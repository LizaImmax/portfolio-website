# 🎨 Customization Guide

This guide will help you customize the portfolio website to make it your own.

## 📝 Update Personal Information

### 1. Edit `lib/data.ts`

This file contains all your personal data. Update the following sections:

#### Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  bio: "Your professional bio...",
  tagline: "Your tagline",
};
```

#### Skills
Add or remove skills in each category:
```typescript
export const skills = {
  "Backend Development": ["Skill1", "Skill2", ...],
  // ... add your skills
};
```

#### Experience
Add your work experience:
```typescript
export const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Month Year - Present",
    description: "Brief description",
    highlights: ["Achievement 1", "Achievement 2"],
  },
];
```

#### Projects
Showcase your projects:
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    period: "Month Year",
    github: "https://github.com/...",
    demo: "https://...", // Optional
    highlights: ["Feature 1", "Feature 2"],
  },
];
```

#### Certifications
Add your certifications:
```typescript
export const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    category: "Cloud" | "Security" | "AI/ML" | "Development",
  },
];
```

## 🎨 Customize Colors

### Using Tailwind Classes

The site uses a purple-pink-blue gradient theme. To change colors:

#### Main Gradient
Find and replace in all components:
- `from-purple-600 to-pink-600` → Your gradient colors
- `from-purple-500 to-pink-500` → Adjust brightness

#### Individual Colors
Common color classes used:
- `text-purple-600` - Main accent text
- `bg-purple-600` - Backgrounds
- `hover:text-purple-400` - Hover states

### Add New Color Scheme

Edit `tailwind.config.ts` to add custom colors:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
};
```

## 📸 Add Images

### Profile Picture
Replace the logo circle in `components/Hero.tsx`:
```tsx
// Replace this
<div className="w-full h-full rounded-full bg-white ...">
  EM
</div>

// With this
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  fill
  className="rounded-full object-cover"
/>
```

### Project Images
Add images to your projects in `components/Projects.tsx`:
```tsx
<div className="relative h-48 mb-4">
  <Image
    src="/project-screenshot.jpg"
    alt={project.title}
    fill
    className="object-cover"
  />
</div>
```

## 🎯 Add New Sections

### Create a Blog Section

1. **Create Blog Component**
```bash
components/Blog.tsx
```

2. **Add Blog Data**
```typescript
// In lib/data.ts
export const blogPosts = [
  {
    title: "Post Title",
    excerpt: "Brief description",
    date: "2025-01-01",
    slug: "post-slug",
  },
];
```

3. **Import in Main Page**
```typescript
// In app/page.tsx
import Blog from "@/components/Blog";

// Add to main
<Blog />
```

### Create a Testimonials Section

Follow the same pattern as above to create new sections.

## 🔧 Modify Animations

Animations are powered by Framer Motion. Customize in each component:

```typescript
// Change animation duration
transition={{ duration: 0.5 }}

// Change animation type
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Add spring animation
transition={{ type: "spring", stiffness: 100 }}
```

## 📱 Add Social Links

Edit `components/Hero.tsx` and `components/Footer.tsx`:

```tsx
// Add Twitter/X
import { FaTwitter } from "react-icons/fa";

<a href="https://twitter.com/yourhandle">
  <FaTwitter size={24} />
</a>
```

## 🌐 Internationalization (i18n)

To add multiple languages:

1. Install next-intl:
```bash
npm install next-intl
```

2. Follow [Next-intl documentation](https://next-intl-docs.vercel.app/)

## 🎨 Change Fonts

Currently using Inter. To change:

1. **Edit `app/layout.tsx`**
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
```

2. **Apply to body**
```tsx
<body className={yourFont.className}>
```

## 📧 Email Service Integration

See detailed instructions in `DEPLOYMENT.md` for:
- Resend
- SendGrid
- Nodemailer

## 🔍 SEO Optimization

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your custom description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

## 🎭 Custom Sections Order

Rearrange sections in `app/page.tsx`:

```tsx
<main>
  <Hero />
  <Projects />  {/* Move up */}
  <Skills />
  <Experience />
  {/* ... */}
</main>
```

## 💡 Tips

1. **Test Responsively**: Use browser dev tools to test different screen sizes
2. **Keep it Updated**: Regularly update your projects and experience
3. **Performance**: Optimize images before adding them
4. **Accessibility**: Maintain good contrast ratios and alt texts

## 🆘 Need Help?

- Check component files for examples
- Refer to [Tailwind CSS docs](https://tailwindcss.com/docs)
- Refer to [Framer Motion docs](https://www.framer.com/motion/)
- Create an issue on GitHub

Happy customizing! 🚀
