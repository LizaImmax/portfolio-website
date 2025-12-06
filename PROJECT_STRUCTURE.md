# 📁 Project Structure

```
portfolio-website/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page (main entry point)
│
├── components/                   # React Components
│   ├── Certifications.tsx        # Certifications section with categories
│   ├── Contact.tsx               # Contact form with validation
│   ├── Experience.tsx            # Timeline of work experience
│   ├── Footer.tsx                # Footer with links and social media
│   ├── Hero.tsx                  # Hero/About section with intro
│   ├── Navbar.tsx                # Navigation bar with mobile menu
│   ├── Projects.tsx              # Featured projects showcase
│   ├── Skills.tsx                # Skills grouped by category
│   └── ThemeToggle.tsx           # Dark/Light mode toggle button
│
├── lib/                          # Utility functions and data
│   ├── data.ts                   # All portfolio content (EDIT THIS!)
│   └── utils.ts                  # Helper functions (cn utility)
│
├── public/                       # Static assets
│   ├── next.svg
│   └── vercel.svg
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── CUSTOMIZATION.md              # Guide for customizing the site
├── DEPLOYMENT.md                 # Deployment instructions
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS config for Tailwind
├── README.md                     # Project overview
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── vercel.json                   # Vercel deployment config
```

## 📝 Key Files to Edit

### 🎯 Must Edit
- **`lib/data.ts`** - Your personal information, skills, projects, experience
- **`app/layout.tsx`** - SEO metadata, site title, description

### 🎨 Style Customization
- **`app/globals.css`** - Global CSS and custom styles
- **`tailwind.config.ts`** - Tailwind theme customization

### 🔧 Advanced Customization
- **`components/*.tsx`** - Individual section components
- **`app/api/contact/route.ts`** - Contact form backend logic

## 🔄 Component Flow

```
app/page.tsx (Main Page)
    │
    ├── ThemeToggle (Fixed button)
    ├── Navbar (Sticky navigation)
    │
    └── main
        ├── Hero (About section)
        ├── Skills (Tech stack)
        ├── Projects (Portfolio)
        ├── Experience (Timeline)
        ├── Certifications (Badges)
        └── Contact (Form)
    │
    └── Footer (Links & social)
```

## 📦 Dependencies

### Core
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **tailwind-merge** - Merge Tailwind classes
- **clsx** - Conditional classes

### Animation & UI
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Heroicons** - Additional icons

### Forms
- **React Hook Form** - Form validation and handling

## 🎨 Design System

### Colors
- **Primary**: Purple (#9333EA - purple-600)
- **Secondary**: Pink (#DB2777 - pink-600)
- **Accent**: Blue (#2563EB - blue-600)
- **Background**: White / Gray-900 (dark mode)

### Typography
- **Font**: Inter (Google Font)
- **Headings**: 4xl to 7xl, bold, gradient text
- **Body**: lg to base, regular weight

### Spacing
- **Sections**: py-20 (5rem vertical padding)
- **Container**: max-w-7xl (1280px max width)
- **Cards**: p-6 to p-8 (1.5rem to 2rem)

### Animations
- **Initial**: opacity: 0, y: 20
- **Animate**: opacity: 1, y: 0
- **Duration**: 0.3s to 0.5s
- **Easing**: Default ease-out

## 🚀 Scripts

```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint
}
```

## 🌐 Routes

- **`/`** - Home page (all sections)
- **`/api/contact`** - Contact form API (POST)

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔐 Environment Variables

```env
# .env.local (create this file)
RESEND_API_KEY=your_key_here        # Optional: For contact form
SENDGRID_API_KEY=your_key_here      # Alternative email service
```

## 🎯 Component Props

### Common Props Pattern
Most components use:
- **Framer Motion**: initial, animate, transition, viewport
- **Tailwind**: Responsive classes (md:, lg:)
- **Data**: Import from `lib/data.ts`

## 📊 Data Structure

All content comes from `lib/data.ts`:
- `personalInfo` - Name, bio, links
- `skills` - Categorized tech skills
- `experience` - Work history array
- `projects` - Portfolio items array
- `certifications` - Cert list with categories

## 🔍 SEO Features

- Semantic HTML
- Meta tags in layout
- OpenGraph support
- Descriptive alt texts
- Responsive images

## ⚡ Performance

- Static generation where possible
- Image optimization (Next.js Image)
- CSS optimization (Tailwind purging)
- Code splitting (automatic)

## 🎨 Theming

Dark mode implementation:
1. Toggle button sets class on `<html>`
2. Tailwind `dark:` variants apply styles
3. localStorage persists preference

---

Need more details? Check the individual component files!
