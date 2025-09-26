# GitHub Pages Deployment Guide

## Quick Setup Instructions

### Step 1: Create GitHub Repository
1. Go to GitHub and create a new repository named `manashvi-portfolio`
2. Make it public (required for free GitHub Pages)

### Step 2: Upload Your Code
```bash
# Navigate to your project directory
cd "c:\Users\i43591\Downloads\Personal Projects\manashvisite\manashvi-portfolio"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Portfolio website"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/manashvi-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to the `gh-pages` branch
- Your site will be live at: `https://USERNAME.github.io/manashvi-portfolio`

### Step 4: Enable GitHub Pages (if needed)
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Customization Before Deployment

### 1. Update package.json
Make sure the homepage URL matches your GitHub username:
```json
"homepage": "https://YOUR-USERNAME.github.io/manashvi-portfolio"
```

### 2. Replace Placeholder Images
- Update the image URLs in `Hero.js` and `About.js`
- Add your actual profile photos
- You can use services like Unsplash for professional photos

### 3. Update Personal Information
- Edit `Hero.js` for main introduction
- Update `About.js` with your actual skills and experience
- Modify contact information

## Troubleshooting

### Build Errors
If you get build errors:
```bash
npm install
npm run build
```

### Deployment Errors
If deployment fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### Pages Not Loading
- Check if the repository is public
- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for changes to propagate

## Automated Deployment with GitHub Actions

### Automatic Deployment (Recommended)
The repository now includes a GitHub Actions workflow that automatically deploys your site when you merge changes to the main branch.

**How it works:**
1. Make changes to your code
2. Commit and push to main branch (or merge a pull request)
3. GitHub Actions automatically builds and deploys your site
4. Your live site updates within a few minutes!

**Setup Requirements:**
1. Enable GitHub Pages in your repository settings
2. Set Source to "GitHub Actions" (not "Deploy from a branch")
3. The workflow file is already included at `.github/workflows/deploy.yml`

### Manual Deployment (Alternative)
If you prefer manual control over deployments:
```bash
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

### Updating Your Site
With automatic deployment:
```bash
git add .
git commit -m "Update content"
git push origin main
# Site deploys automatically - no need to run npm run deploy!
```

Your live site will update automatically within 2-5 minutes after pushing to main!