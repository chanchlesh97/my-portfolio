# Quick Start: Customize Your Portfolio in 5 Minutes

## Step 1: Update Your Personal Information

Open `lib/portfolio-config.ts` and update the `personal` object:

```typescript
personal: {
    name: 'John Doe',                    // Your name
    title: 'Full Stack Developer',       // Your job title
    subtitle: 'Building amazing apps',   // Tagline
    bio: 'I love coding...',            // Short bio
    email: 'john@example.com',          // Your email
    phone: '+1 (555) 123-4567',         // Your phone
    location: 'New York, NY',           // Your location
},
```

## Step 2: Customize the Hero Section

Update `hero` object to change the main landing section:

```typescript
hero: {
    badge: 'Welcome to my portfolio',
    headline: 'Your catchy headline here',
    description: 'Your value proposition...',
    stats: [
        { number: '100+', label: 'Projects' },
        // Add your stats
    ]
},
```

## Step 3: Add Your Skills

Update the `skills` object:

```typescript
skills: {
    title: 'Skills & Expertise',
    categories: [
        {
            name: 'Frontend',
            skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
        },
        {
            name: 'Backend',
            skills: ['Node.js', 'Express', 'Python', 'PostgreSQL']
        },
        // Add more categories
    ]
},
```

## Step 4: Add Your Projects

Update the `projects.items` array:

```typescript
{
    id: 1,
    title: 'Your Project Name',
    description: 'What does this project do?',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    emoji: '🚀',  // Use any emoji!
    links: [
        { text: 'Live', href: 'https://yoursite.com' },
        { text: 'GitHub', href: 'https://github.com/yourrepo' }
    ]
}
```

## Step 5: Update Your Work Experience

Update the `experience.items` array:

```typescript
{
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Jan 2023 - Present',
    description: 'What did you accomplish here?'
}
```

## Bonus: Change Colors

Open `app/globals.css` and find the `:root` section:

```css
:root {
  --accent-primary: #6366f1;      /* Main color */
  --accent-secondary: #8b5cf6;    /* Secondary */
  --accent-pink: #ec4899;         /* Tertiary */
}
```

Change these hex codes to your brand colors!

## Social Links

Update the `social` array to add your links:

```typescript
social: [
    { name: 'GitHub', url: 'https://github.com/yourprofile', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourprofile', icon: '🐦' },
]
```

## Contact Information

Update the `contact` object:

```typescript
contact: {
    title: 'Let\'s Work Together',
    description: 'I\'m open to new opportunities...',
    methods: [
        { type: 'Email', value: 'your@email.com', icon: '📧' },
        { type: 'Phone', value: '+1 (555) 000-0000', icon: '📱' },
        { type: 'Location', value: 'City, State', icon: '📍' }
    ]
}
```

## Deploy Your Portfolio

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

### Option 2: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Netlify will build and deploy automatically

### Option 3: Custom Domain
1. Build: `npm run build`
2. Deploy the `.next` folder to your server
3. Point your domain to the server

## Tips & Tricks

### Pro Tip 1: Project Emojis
Use any emoji for projects! Popular choices:
- 💻 Desktop App
- 📱 Mobile App
- 🛍️ E-commerce
- 📊 Dashboard
- 🎮 Game
- 🤖 AI/ML
- 🔐 Security
- 📡 Networking

### Pro Tip 2: Making the Contact Form Work
The contact form is currently a demo. To make it work:

1. Using EmailJS:
   - Sign up at [emailjs.com](https://emailjs.com)
   - Get your service/template IDs
   - Add their SDK and wire it up

2. Using Formspree:
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update the form submission

### Pro Tip 3: Adding Photos
1. Save your photo as `profile.jpg` in `public/`
2. Import in your component
3. Add `<Image src="/profile.jpg" alt="Your Name" />`

### Pro Tip 4: Custom Favicon
1. Replace `public/favicon.ico` with your own
2. The browser will automatically use it

## Troubleshooting

**Q: My changes aren't showing?**
A: Stop the dev server (Ctrl+C) and run `npm run dev` again

**Q: Colors look weird?**
A: Make sure you're using valid hex colors (#RRGGBB)

**Q: Links aren't working?**
A: Check that URLs start with https://

**Q: Mobile looks bad?**
A: The site is mobile-responsive by default. Clear browser cache!

## Next Steps

1. ✅ Customize your information
2. ✅ Add your projects
3. ✅ Deploy your portfolio
4. ✅ Share it everywhere!
5. 📈 Monitor analytics
6. 📝 Keep it updated with new projects

## Need Help?

1. Check `PORTFOLIO_GUIDE.md` for detailed info
2. Review the configuration file structure
3. Look at the animation components in `components/Animations.tsx`
4. Check browser console for errors (F12)

---

**That's it! Your portfolio is ready to wow people. Good luck! 🎉**
