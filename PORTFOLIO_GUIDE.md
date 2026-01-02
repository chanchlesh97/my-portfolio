# Modern Developer Portfolio 🚀

A beautiful, modern, and fully responsive portfolio website for software developers, built with Next.js, TypeScript, and stunning animations inspired by VextraLabs design patterns.

## ✨ Features

- **Modern UI Design**: Clean, contemporary design with smooth gradient backgrounds and glass morphism effects
- **Advanced Animations**: 
  - Scroll-triggered section animations
  - 3D tilt effects on cards
  - Magnetic button effects
  - Floating gradient blobs
  - Particle effects and sparkles
  - Smooth parallax scrolling
- **Responsive Design**: Fully mobile-responsive with tailored layouts for all screen sizes
- **Dark Theme**: Beautiful dark theme optimized for readability and visual appeal
- **Performance**: Built with Next.js 16 for optimal performance and SEO
- **Easy Customization**: Centralized configuration file for quick personalization
- **Smooth Navigation**: Fixed navbar with section tracking and smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables and animations
- **Components**: React with custom animation components
- **Build**: Turbopack for fast builds

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar component
│   ├── Animations.tsx      # Reusable animation components
│   └── ...
├── lib/
│   └── portfolio-config.ts # Portfolio content configuration
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with CTA buttons and stats
2. **About Section**: Personal introduction and background
3. **Skills Section**: Organized by categories with skill tags
4. **Projects Section**: Showcase of featured work with descriptions and links
5. **Experience Section**: Professional timeline with positions and descriptions
6. **Contact Section**: Multiple ways to get in touch with contact form
7. **Footer**: Quick links and social media connections

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone or navigate to the project:**
```bash
cd /Users/chanchlesh/Work/my-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## ✏️ Customization

### Update Your Information

Edit `lib/portfolio-config.ts` to personalize your portfolio:

```typescript
export const portfolioConfig = {
    personal: {
        name: 'Your Name',
        title: 'Your Title',
        email: 'your.email@example.com',
        // ... more fields
    },
    hero: { /* Hero section content */ },
    about: { /* About section content */ },
    skills: { /* Skills by category */ },
    projects: { /* Your projects */ },
    experience: { /* Work experience */ },
    contact: { /* Contact information */ },
    social: [ /* Social media links */ ]
}
```

### Modify Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --accent-primary: #6366f1;      /* Main accent color */
  --accent-secondary: #8b5cf6;    /* Secondary accent */
  --accent-pink: #ec4899;         /* Tertiary accent */
  /* ... other variables */
}
```

### Customize Animations

Animation components are in `components/Animations.tsx`:
- `AnimatedSection`: Scroll-triggered section animations
- `AnimatedCard`: Individual card reveal effects
- `TiltCard`: 3D tilt on mouse movement
- `MagneticButton`: Button that follows cursor
- `FloatingGradients`: Animated background gradients
- `Sparkles`: Particle sparkle effects

### Style Guide

- **Primary Colors**: Indigo (#6366f1)
- **Secondary Colors**: Purple (#8b5cf6), Pink (#ec4899)
- **Background**: Dark (#0a0a0a)
- **Text**: White (#ffffff) and Gray (#b0b0b0)
- **Cards**: Semi-transparent white with border

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🎯 Key Components

### Navbar Component
Sticky navigation with active section tracking. Edit links in `components/Navbar.tsx`.

### Animation System
- **Intersection Observer**: Triggers animations when elements come into view
- **RequestAnimationFrame**: Smooth 60fps animations
- **CSS Animations**: Keyframe animations for complex effects

### Form Component
Contact form in the contact section. Currently displays in demo mode. Connect it to your backend or email service.

## 💡 Tips for Customization

1. **Add More Projects**: Simply add objects to the `projects.items` array in the config
2. **Change Accent Colors**: Update CSS variables - all colors cascade automatically
3. **Add New Sections**: Create new sections following the `AnimatedSection` pattern
4. **Modify Fonts**: Update font imports in `layout.tsx`
5. **Add Images**: Place images in `public/` and reference them

## 🌐 Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and optimize
4. Deploy with one click

### Other Platforms

Works with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted servers

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- CSS animations use GPU acceleration
- Minimal JavaScript for animations
- SEO optimized with metadata

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear the build cache:
```bash
rm -rf .next
npm run build
```

### Animation Stuttering
- Check for heavy JavaScript operations
- Reduce particle count in animation components
- Enable hardware acceleration in browser

## 📈 Future Enhancements

Potential additions:
- Blog section with MDX support
- Dark/Light mode toggle
- Multi-language support
- Analytics integration
- Contact form backend integration
- Testimonials section
- Case studies

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork and customize this template for your needs!

## 📧 Support

For questions or issues, check the configuration file and the component source code. Most customizations can be done through `portfolio-config.ts`.

---

**Built with ❤️ using Next.js and modern web technologies**

Happy coding! 🎉
