# GitHub Pages Deployment Setup

## Automated Deployment

This project is configured with GitHub Actions for automatic deployment to GitHub Pages whenever changes are merged to the `main` branch.

### How it Works

1. **Trigger**: The workflow runs when code is pushed to the `main` branch
2. **Build**: Installs dependencies and builds the React app
3. **Deploy**: Automatically deploys the built files to GitHub Pages
4. **Live**: Your site is live at `https://manashvitripathi.github.io/portfolio`

### Setup Instructions

1. **Repository Settings**:
   - Go to your GitHub repository
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push Changes**:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically trigger
   - Check the "Actions" tab in your repository to monitor progress
   - Your site will be updated within 2-5 minutes

### Workflow Configuration

The deployment workflow is defined in `.github/workflows/deploy.yml` and includes:

- **Node.js Setup**: Uses Node.js 18 for building
- **Dependency Installation**: Runs `npm ci` for reliable installs
- **Build Process**: Executes `npm run build`
- **GitHub Pages Deployment**: Uses the official GitHub Pages action

### Manual Deployment (Fallback)

If you need to deploy manually, you can still use:
```bash
npm run deploy
```

### Monitoring Deployments

- Visit the "Actions" tab in your GitHub repository
- Each push to `main` will show as a workflow run
- Green checkmarks indicate successful deployments
- Click on any workflow run to see detailed logs

### Troubleshooting

- **Build Failures**: Check the Actions logs for specific error messages
- **Permission Issues**: Ensure the repository has Pages and Actions enabled
- **Branch Protection**: Make sure the `main` branch allows pushes or use pull requests

For detailed setup instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).