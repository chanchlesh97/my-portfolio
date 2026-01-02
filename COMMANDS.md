# 🔧 Commands Reference

Quick reference for all commands you'll need.

## 🚀 Development

```bash
# Start development server
npm run dev

# Server runs at http://localhost:3000
# Auto-reloads on file changes
# Open browser developer tools: F12
```

## 🏗️ Building

```bash
# Build for production
npm run build

# Check build for errors
npm run build

# Run production server
npm start
```

## 🧹 Cleanup

```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules
rm -rf node_modules

# Reinstall everything
npm install
```

## 📦 Project Setup (First Time)

```bash
# Navigate to project
cd /Users/chanchlesh/Work/my-portfolio

# Install dependencies
npm install

# Start development
npm run dev

# Open browser to http://localhost:3000
```

## 🔍 Debugging

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint

# View Next.js build analysis
npm run build -- --analyze
```

## 🌐 Deployment (Vercel)

```bash
# Make sure everything is committed to Git
git add .
git commit -m "Portfolio ready for deployment"
git push origin main

# Then go to vercel.com and import your repository
# Vercel will auto-deploy!
```

## 📝 Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo all changes since last commit
git reset --hard HEAD
```

## 📦 Package Management

```bash
# Install a new package
npm install package-name

# Install as dev dependency
npm install --save-dev package-name

# Remove a package
npm uninstall package-name

# Update all packages
npm update

# List installed packages
npm list
```

## 🔌 Port Management

```bash
# Check what's using port 3000
lsof -i :3000

# Kill process on port 3000
kill -9 <PID>

# Use different port
npm run dev -- -p 3001
```

## 📂 File Operations

```bash
# List files
ls -la

# Create directory
mkdir folder-name

# Create file
touch filename.txt

# Move/rename file
mv old-name.txt new-name.txt

# Delete file
rm filename.txt

# Delete directory
rm -rf folder-name

# View file contents
cat filename.txt

# Edit file
code filename.txt
```

## 🔍 Search

```bash
# Search for text in files
grep -r "search-term" .

# Find all files with extension
find . -name "*.tsx"

# Find files with pattern
find . -name "*portfolio*"
```

## 🖥️ Environment

```bash
# Check Node version
node -v

# Check npm version
npm -v

# Check git version
git -v

# View environment variables
env

# Set temporary environment variable
export VARIABLE_NAME=value
```

## 🧪 Testing

```bash
# These commands might be useful later if you add tests
npm test
npm test -- --watch
npm test -- --coverage
```

## 🎯 Common Workflows

### Starting Work

```bash
cd /Users/chanchlesh/Work/my-portfolio
npm run dev
# Visit http://localhost:3000
```

### Making Changes

```bash
# Edit files in your editor
# Changes auto-reload in browser

# When done for the day
git add .
git commit -m "Update portfolio content"
git push origin main
```

### Deploying to Vercel

```bash
# Make sure everything is committed
git add .
git commit -m "Ready to deploy"
git push origin main

# Then:
# 1. Go to vercel.com
# 2. Import repository
# 3. Click Deploy
# Done!
```

### Troubleshooting

```bash
# Dev server not starting?
rm -rf .next
npm install
npm run dev

# Build failing?
npm install
rm -rf .next
npm run build

# Port already in use?
lsof -i :3000
kill -9 <PID>
npm run dev
```

## 📊 File Editing

### Edit Configuration
```bash
# Edit your content
code lib/portfolio-config.ts

# Edit styles
code app/globals.css

# Edit homepage
code app/page.tsx
```

### Edit Navigation
```bash
# Edit navbar
code components/Navbar.tsx
```

## 🚀 Quick Deploy Checklist

```bash
# 1. Make final edits
code lib/portfolio-config.ts

# 2. Test locally
npm run build
npm start
# Visit http://localhost:3000 and check everything

# 3. Commit changes
git add .
git commit -m "Final portfolio update"
git push origin main

# 4. Go to Vercel and deploy!
```

## 💾 Backup Your Work

```bash
# Create a backup branch
git branch backup-$(date +%Y-%m-%d)

# Create a backup zip (optional)
zip -r portfolio-backup.zip . -x "node_modules/*" ".next/*"

# Store in safe location
mv portfolio-backup.zip ~/Backups/
```

## 🔄 Update Dependencies

```bash
# Check outdated packages
npm outdated

# Update all packages (careful!)
npm update

# Update to latest version
npm install package-name@latest
```

## 📈 Performance

```bash
# Build and analyze size
npm run build

# Check what's large
ls -lh .next/static/

# Check page speed
# Visit https://pagespeed.web.dev
# Enter your deployed URL
```

## 🐛 Error Diagnosis

```bash
# Clear everything and start fresh
rm -rf .next node_modules package-lock.json
npm install
npm run dev

# Check for errors
npm run build 2>&1 | head -50

# View logs
npm run dev 2>&1 | tee logs.txt
```

## 🌍 Network

```bash
# Check if server is running
curl http://localhost:3000

# Get response code
curl -I http://localhost:3000

# Full response
curl -v http://localhost:3000
```

## 📝 Useful VSCode Commands

```bash
# Open VSCode in current directory
code .

# Open specific file
code lib/portfolio-config.ts

# Open command palette
Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)

# Quick file search
Cmd+P (Mac) or Ctrl+P (Windows/Linux)

# Find and replace
Cmd+H (Mac) or Ctrl+H (Windows/Linux)

# Terminal
Ctrl+` (opens terminal)
```

## 🎯 Most Important Commands (Bookmark These!)

```bash
# Daily development
npm run dev

# When done for the day
git add . && git commit -m "message" && git push

# Deploying
npm run build && git push

# When something breaks
rm -rf .next && npm install && npm run dev
```

---

## Pro Tips

1. **Alias for faster commands:**
   ```bash
   alias dev='npm run dev'
   alias build='npm run build'
   alias start='npm start'
   ```

2. **Use Ctrl+C to stop dev server**

3. **Use Cmd+K to clear terminal** (Mac)

4. **Git before major changes:**
   ```bash
   git branch backup-before-changes
   ```

5. **Test production build locally:**
   ```bash
   npm run build
   npm start
   ```

---

## 📚 Where to Find Help

```bash
# Check Next.js docs
# https://nextjs.org/docs

# Check npm package docs
npm info package-name

# Check git documentation
git help command

# Search for errors online
# Copy error message into Google
```

---

**Bookmark this page for quick reference!**
