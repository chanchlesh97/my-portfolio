# 🚀 Deployment Guide

Your portfolio is ready to deploy! Here are the easiest ways to get it live.

## 🌐 Option 1: Vercel (Recommended - Easiest)

Vercel is built by the creators of Next.js. It's perfect for this type of project.

### Steps:

1. **Push to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Portfolio project"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Click "Sign up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

3. **Import Your Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure Settings**
   - Framework: Next.js (auto-detected)
   - Project settings are usually fine as-is
   - Click "Deploy"

5. **Done!** 🎉
   - Your site is live at `your-project.vercel.app`
   - Auto-deploys on every push to main

### Add Custom Domain (Vercel)

1. Go to project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait 24-48 hours for DNS propagation

## 🚀 Option 2: Netlify (Also Easy)

### Steps:

1. **Connect to GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up with GitHub"
   - Authorize Netlify

2. **Create New Site**
   - Click "New site from Git"
   - Choose GitHub repository
   - Click "Connect GitHub"

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

4. **Done!** 🎉
   - Your site is live at `your-project.netlify.app`

### Add Custom Domain (Netlify)

1. Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. Verify ownership

## 💼 Option 3: AWS Amplify

### Steps:

1. **Install AWS CLI**
   ```bash
   brew install awscli  # macOS
   aws configure       # Set up credentials
   ```

2. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

3. **Deploy**
   ```bash
   amplify init
   amplify publish
   ```

## 📦 Option 4: Docker + Custom Server

For full control, deploy with Docker.

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Deploy

```bash
# Build image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio
```

Deploy to:
- **Digital Ocean** App Platform
- **Heroku** (Container Registry)
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**

## 🔧 Option 5: Traditional VPS/Shared Hosting

If you have a server (VPS, shared hosting, etc.):

### Setup Node.js

1. **SSH into server**
   ```bash
   ssh user@yourserver.com
   ```

2. **Install Node.js**
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

4. **Install and build**
   ```bash
   npm install
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

### Use PM2 to Keep It Running

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Enable auto-start on reboot
pm2 startup
pm2 save
```

### Setup Nginx Reverse Proxy

Create `/etc/nginx/sites-available/portfolio`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 📊 Option 6: GitHub Pages (Static Site)

⚠️ Note: GitHub Pages needs special configuration for Next.js. For Next.js, use Vercel or Netlify instead.

## ✅ Deployment Checklist

Before deploying:

- [ ] Update `lib/portfolio-config.ts` with your info
- [ ] Change all placeholder links to real URLs
- [ ] Update social media links
- [ ] Test all links work
- [ ] Run `npm run build` locally - no errors?
- [ ] Test production build: `npm run build && npm start`
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Update contact form (if needed)

## 🔒 Security Checklist

- [ ] Remove any sensitive data from config
- [ ] Use environment variables for API keys
- [ ] Enable HTTPS (all platforms support this)
- [ ] Set up security headers
- [ ] Consider adding rate limiting to contact form
- [ ] Regular security updates for dependencies

## 📈 Post-Deployment

### Setup Analytics

Add Google Analytics:

1. Get tracking code from [analytics.google.com](https://analytics.google.com)
2. Add to `app/layout.tsx`:
   ```tsx
   <Script
     strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
   />
   ```

### Add SEO

Update `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional portfolio",
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your professional portfolio",
    url: "https://yoursite.com",
  }
}
```

### Monitor Performance

- Check PageSpeed Insights
- Monitor uptime
- Setup error tracking
- Monitor user analytics

## 🔄 Continuous Deployment

All platforms (Vercel, Netlify, etc.) auto-deploy when you push to main.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Site updates automatically! 🚀
```

## 🆘 Troubleshooting Deployment

### Port 3000 Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Check `.env.local` exists
- Verify variable names match
- Restart dev server
- Check platform's env var settings

### Site Won't Start
```bash
npm install
npm run build
npm start
# Check console for errors
```

## 📞 Support for Each Platform

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **AWS**: [aws.amazon.com/support](https://aws.amazon.com/support)
- **Digital Ocean**: [digitalocean.com/support](https://digitalocean.com/support)

## 💰 Cost Comparison

| Platform | Free Tier | Notes |
|----------|-----------|-------|
| Vercel | Yes | Generous free tier, perfect for projects |
| Netlify | Yes | Great for Next.js |
| GitHub Pages | Yes | Static only, limited |
| AWS | Free tier | Complex pricing, need credit card |
| Heroku | Paid | $5-7/month minimum |
| Digital Ocean | ~$5/mo | Affordable, full control |

## 🎯 Recommendation

**For beginners:** Vercel or Netlify (easiest, free, automatic deployments)

**For control:** Digital Ocean or AWS (more setup, but flexible)

**For learning:** Your own VPS with Node.js (most educational)

---

**Your portfolio is ready to show the world! Choose your deployment method and get it live! 🌍**
