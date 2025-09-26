# EmailJS Setup Guide

This contact form uses EmailJS to send emails directly from the frontend. The configuration supports environment variables for secure credential management.

## Quick Setup for Local Development

1. **Copy Environment Template**
   ```bash
   cp .env.example .env
   ```

2. **Get EmailJS Credentials** (see detailed steps below)

3. **Update .env file** with your actual credentials

4. **Start Development Server**
   ```bash
   npm start
   ```

## Detailed Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Set up Email Service
1. Go to the "Email Services" section
2. Add your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions for your provider
4. Note the **Service ID**

### 3. Create Email Template
1. Go to the "Email Templates" section
2. Create a new template with these template variables:
   - `{{name}}` - sender's name
   - `{{email}}` - sender's email
   - `{{message}}` - message content

Example template:
```

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Note the **Template ID**

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)

### 5. Configure Environment Variables

#### For Local Development:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file and replace the placeholder values:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id  
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

#### For GitHub Pages Deployment:
1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret** and add these three secrets:
   - Name: `REACT_APP_EMAILJS_SERVICE_ID`, Value: your service ID
   - Name: `REACT_APP_EMAILJS_TEMPLATE_ID`, Value: your template ID
   - Name: `REACT_APP_EMAILJS_PUBLIC_KEY`, Value: your public key

The GitHub Actions workflow will automatically use these secrets during deployment.

## Configuration Details

The application reads EmailJS configuration from environment variables:
- `REACT_APP_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `REACT_APP_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `REACT_APP_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

If environment variables are not set, it falls back to placeholder values (which won't work for sending emails).

## Security Notes

- **Never commit `.env` to version control** - it's already in `.gitignore`
- **Use GitHub Secrets for deployment** - configured in `.github/workflows/deploy.yml`
- **The public key is safe to expose** in client-side code (it's designed for frontend use)
- **Service and template IDs are not sensitive** but storing them in env vars keeps config flexible

## 6. Test the Contact Form
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the test message

## Template Variables
The form automatically passes these variables to your EmailJS template:
- `name` - from the "Your Name" field
- `email` - from the "Your Email" field  
- `message` - from the "Your Message" field

## Features Included
- Form validation (required fields, email format)
- Loading state during submission
- Success/error messages
- Form reset after successful submission
- Responsive design
- Accessibility support

## Troubleshooting
- Make sure all three IDs are correctly configured
- Check browser console for error messages
- Verify your EmailJS service is active
- Test your template in the EmailJS dashboard first
- Check your email spam folder