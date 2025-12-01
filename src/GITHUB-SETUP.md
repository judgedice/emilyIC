# GitHub Repository Setup Guide

Quick guide to get this portfolio on GitHub and deployed.

## Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd your-project-folder

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Emily DiCesaro Portfolio v1.0"
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon in top right
3. Select "New repository"
4. Fill in details:
   - **Repository name**: `emily-dicesaro-portfolio` (or your choice)
   - **Description**: "Professional portfolio website for Emily DiCesaro - UX/AI Design Leader"
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README (you already have one)
5. Click "Create repository"

## Step 3: Connect Local to GitHub

```bash
# Add remote origin (replace with your actual repo URL)
git remote add origin https://github.com/YOUR-USERNAME/emily-dicesaro-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Configure GitHub Pages

### Option A: Automatic Deployment (Recommended)

1. Create `.github/workflows` directory:
```bash
mkdir -p .github/workflows
```

2. Create deployment workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Commit and push the workflow:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Click "Pages" in left sidebar
   - Under "Source", select "GitHub Actions"
   - Click "Save"

### Option B: Manual Deployment

1. Build locally:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install -g gh-pages
```

3. Deploy:
```bash
gh-pages -d dist
```

4. Enable GitHub Pages:
   - Go to Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click "Save"

## Step 5: Configure Repository Settings

1. **General Settings**:
   - Go to Settings > General
   - Add website URL to "Website" field (after deployment)
   - Add topics: `portfolio`, `react`, `typescript`, `tailwindcss`, `ux-design`

2. **About Section**:
   - Click ⚙️ icon next to "About"
   - Add description: "Professional portfolio website for Emily DiCesaro - UX/AI Design Leader"
   - Add website URL (after deployment)
   - Add topics (tags)

3. **Optional - Branch Protection**:
   - Settings > Branches
   - Add rule for `main` branch
   - Require pull request reviews before merging (if collaborating)

## Step 6: Verify Deployment

1. Wait for GitHub Actions to complete (check "Actions" tab)
2. Once complete, your site will be at:
   - `https://YOUR-USERNAME.github.io/REPO-NAME/`
3. Test the live site thoroughly
4. Update repository "About" section with live URL

## Step 7: Share Your Portfolio

Your portfolio will be accessible at:
```
https://YOUR-USERNAME.github.io/emily-dicesaro-portfolio/
```

### Custom Domain (Optional)

To use a custom domain (e.g., `emilydicesaro.com`):

1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. In repository Settings > Pages:
   - Enter custom domain
   - Check "Enforce HTTPS"
3. Add DNS records at your registrar:
   - Type: A, Name: @, Value: `185.199.108.153`
   - Type: A, Name: @, Value: `185.199.109.153`
   - Type: A, Name: @, Value: `185.199.110.153`
   - Type: A, Name: @, Value: `185.199.111.153`
   - Type: CNAME, Name: www, Value: `YOUR-USERNAME.github.io`

## Common Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View commit history
git log --oneline
```

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### 404 on GitHub Pages
- Ensure GitHub Pages is enabled
- Check that Actions workflow completed successfully
- Verify `dist` folder was uploaded in Actions artifacts

### Images Not Loading
- Check that all image imports are correct
- Verify Figma assets are accessible
- Check browser console for errors

### Routes Not Working
- This project uses HashRouter - URLs will have `#` in them
- This is correct for GitHub Pages deployment

## Next Steps

1. Review PRE-DEPLOYMENT-CHECKLIST.md
2. Test your live site thoroughly
3. Share your portfolio URL
4. Update resume/LinkedIn with portfolio link
5. Gather feedback and iterate

## Support

- Check DEPLOYMENT.md for detailed deployment options
- Review CONTRIBUTING.md for development guidelines
- See README.md for project overview

## Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Ready to deploy?** Follow the steps above and your portfolio will be live! 🚀
