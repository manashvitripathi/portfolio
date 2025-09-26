# Dynamic SEO System

This portfolio uses a dynamic SEO system that automatically generates meta tags and structured data from the `portfolioConfig.js` file.

## How It Works

1. **Configuration**: All SEO data is stored in `src/config/portfolioConfig.js` in the `seo` object
2. **Generation**: The `scripts/generate-seo.js` script reads the config and generates `public/index.html`
3. **Automation**: The script runs automatically before `start` and `build` commands

## Files Involved

- `src/config/portfolioConfig.js` - Contains all SEO configuration
- `scripts/generate-seo.js` - Main script to generate HTML with dynamic SEO
- `scripts/config-reader.js` - Helper to read configuration data
- `public/index.html` - Generated HTML file with dynamic meta tags

## SEO Features Included

### Meta Tags
- Title, description, keywords, author
- Open Graph tags for social media sharing
- Twitter Card optimization
- Canonical URL and additional SEO meta tags

### Structured Data (JSON-LD)
- Person schema with professional details
- Contact information
- Skills and expertise
- Social media profiles

### PWA Optimization
- Manifest file integration
- Theme colors and icons
- Mobile-friendly viewport settings

## Usage

### Manual Generation
```bash
npm run generate-seo
```

### Automatic Generation
The SEO HTML is automatically generated when you run:
```bash
npm start    # Generates SEO then starts dev server
npm run build    # Generates SEO then builds for production
```

## Updating SEO Data

To update SEO information, modify the `seo` object in `src/config/portfolioConfig.js`:

```javascript
seo: {
    title: "Your Name - Your Title",
    description: "Your professional description",
    keywords: "Your, Keywords, Here",
    author: "Your Name",
    url: "https://your-website.com",
    image: "your-logo.jpeg",
    linkedin: "https://linkedin.com/in/yourprofile",
    type: "website",
    locale: "en_US"
}
```

The changes will be automatically applied on the next build or start command.

## Benefits

- ✅ **Centralized Configuration**: All SEO data in one place
- ✅ **Automatic Updates**: No need to manually update HTML files
- ✅ **Consistency**: Same data used across all SEO elements
- ✅ **Easy Maintenance**: Update once, applies everywhere
- ✅ **Build Integration**: Works seamlessly with React build process