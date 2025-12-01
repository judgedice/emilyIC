# Deployment Guide

This guide covers deploying the Emily DiCesaro Portfolio to various platforms.

## GitHub Pages Deployment

This project is configured to work with GitHub Pages using HashRouter.

### Automatic Deployment with GitHub Actions

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Create a GitHub Actions workflow file `.github/workflows/deploy.yml`:

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

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. In your GitHub repository:
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

4. Push the workflow file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

The site will automatically deploy on every push to the main branch.

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` folder

3. Deploy the `dist` folder to GitHub Pages using:
```bash
npm install -g gh-pages
gh-pages -d dist
```

## Other Deployment Options

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Import your GitHub repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy!

### Custom Server

1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the index.html for all routes

## Environment Variables

This project doesn't require environment variables for basic deployment.

## Post-Deployment Checklist

- [ ] Verify all routes work correctly
- [ ] Test navigation and smooth scrolling
- [ ] Check that all images load properly
- [ ] Verify responsive design on mobile devices
- [ ] Test project detail pages
- [ ] Ensure contact links work correctly
- [ ] Check that testimonials appear correctly in sidebar

## Troubleshooting

### Images not loading
- Ensure all Figma assets are properly exported
- Check that image import paths are correct

### Routing issues
- The project uses HashRouter which should work on all platforms
- If using BrowserRouter instead, ensure server is configured for SPA routing

### Build failures
- Check that all dependencies are installed
- Verify Node.js version compatibility (v18+ recommended)
- Clear cache and node_modules, then reinstall: `rm -rf node_modules package-lock.json && npm install`

## Support

For deployment issues, please check the GitHub repository issues or contact the developer.
