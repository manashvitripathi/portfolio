# GitHub Secrets Setup Guide

This guide explains how to configure GitHub Secrets for automatic deployment with EmailJS credentials.

## Why Use GitHub Secrets?

GitHub Secrets allow you to store sensitive information securely for use in GitHub Actions workflows. This ensures your EmailJS credentials are not exposed in your code while still being available during the build process.

## Setting Up GitHub Secrets

### 1. Navigate to Repository Settings
1. Go to your GitHub repository
2. Click on the **Settings** tab (make sure you're in the repository settings, not your profile settings)

### 2. Access Secrets Configuration
1. In the left sidebar, click on **Secrets and variables**
2. Click on **Actions**

### 3. Add Repository Secrets
Click **New repository secret** for each of the following:

#### Secret 1: EmailJS Service ID
- **Name:** `REACT_APP_EMAILJS_SERVICE_ID`
- **Secret:** Your actual EmailJS service ID (e.g., `service_abc123`)

#### Secret 2: EmailJS Template ID  
- **Name:** `REACT_APP_EMAILJS_TEMPLATE_ID`
- **Secret:** Your actual EmailJS template ID (e.g., `template_xyz789`)

#### Secret 3: EmailJS Public Key
- **Name:** `REACT_APP_EMAILJS_PUBLIC_KEY`
- **Secret:** Your actual EmailJS public key (e.g., `user_def456`)

### 4. Verify Secrets
After adding all three secrets, you should see them listed in the "Repository secrets" section. The secret values will be hidden (showing only "Updated X time ago").

## How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Builds your project** using the secrets as environment variables
2. **Injects the credentials** into the build process
3. **Deploys to GitHub Pages** with the EmailJS configuration

The relevant workflow section:
```yaml
- name: Build project
  run: npm run build
  env:
    REACT_APP_EMAILJS_SERVICE_ID: ${{ secrets.REACT_APP_EMAILJS_SERVICE_ID }}
    REACT_APP_EMAILJS_TEMPLATE_ID: ${{ secrets.REACT_APP_EMAILJS_TEMPLATE_ID }}
    REACT_APP_EMAILJS_PUBLIC_KEY: ${{ secrets.REACT_APP_EMAILJS_PUBLIC_KEY }}
```

## Testing the Setup

1. **Push changes** to the `main` branch
2. **Check Actions tab** in your repository to see the deployment workflow
3. **Visit your deployed site** and test the contact form
4. **Monitor workflow logs** for any errors

## Troubleshooting

### Common Issues:

**Contact form not sending emails after deployment:**
- Verify all three secrets are correctly set in GitHub
- Check the secret names match exactly (case-sensitive)
- Ensure your EmailJS service and template are active

**Build fails with environment variable errors:**
- Check GitHub Actions logs for specific error messages
- Verify secret names in workflow file match the ones you created
- Make sure secrets have valid EmailJS credentials

**Local development works but deployment doesn't:**
- Compare your local `.env` values with GitHub Secrets
- Test your EmailJS credentials in the EmailJS dashboard
- Check if your EmailJS service has any domain restrictions

### Getting Help:
1. Check the **Actions** tab for detailed error logs
2. Test your EmailJS configuration directly on the EmailJS website
3. Verify your secrets are properly configured in repository settings

## Security Benefits

✅ **Credentials are encrypted** and only accessible during workflow execution  
✅ **No sensitive data in your codebase** - safe to share publicly  
✅ **Automatic credential injection** during build process  
✅ **Easy credential rotation** - update secrets without changing code  
✅ **Environment-specific configuration** - different credentials for different environments