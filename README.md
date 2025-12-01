
# Portfolio Website Design

This is a code bundle for Portfolio Website Design. The original project is available at https://www.figma.com/design/FlRMkChYrzWMiP0r59C2M3/Portfolio-Website-Design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The workflow will automatically build and deploy your site when you push to `main`

### Manual Deployment

You can also trigger a manual deployment by:
1. Going to the **Actions** tab in your repository
2. Selecting the "Deploy to GitHub Pages" workflow
3. Clicking **Run workflow**

### Build Locally

To build the project locally:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Site URL

Once deployed, your site will be available at:
- `https://[your-username].github.io/[repository-name]/`

Note: Replace `[your-username]` and `[repository-name]` with your actual GitHub username and repository name.
  