const fs = require('fs');
const path = require('path');
const { readPortfolioConfig } = require('./config-reader');

const generateSEOHTML = () => {
    const portfolioConfig = readPortfolioConfig();
    const { seo, personal, contact } = portfolioConfig;

    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/Sitelogo.jpeg" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="${seo.description}" />
  <meta name="keywords" content="${seo.keywords}" />
  <meta name="author" content="${seo.author}" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph Meta Tags for Social Media -->
  <meta property="og:title" content="${seo.title}" />
  <meta property="og:description" content="${seo.description}" />
  <meta property="og:image" content="%PUBLIC_URL%/${seo.image}" />
  <meta property="og:url" content="${seo.url}" />
  <meta property="og:type" content="${seo.type}" />
  <meta property="og:site_name" content="${personal.name} Portfolio" />
  <meta property="og:locale" content="${seo.locale}" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${seo.title}" />
  <meta name="twitter:description" content="${seo.description}" />
  <meta name="twitter:image" content="%PUBLIC_URL%/${seo.image}" />
  ${seo.twitterHandle ? `<meta name="twitter:site" content="${seo.twitterHandle}" />` : ''}

  <!-- Additional SEO Meta Tags -->
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />

  <!-- Canonical URL -->
  <link rel="canonical" href="${seo.url}" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/${seo.image}" />
  
  <!-- Manifest -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
  <title>${seo.title}</title>

  <!-- Structured Data (JSON-LD) for Better SEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "${personal.name}",
    "jobTitle": "${personal.title}",
    "description": "${personal.heroDescription}",
    "url": "${seo.url}",
    "image": "%PUBLIC_URL%/${seo.image}",
    "sameAs": [
      "${seo.linkedin}",
      "mailto:${contact.info.find(item => item.title === 'Email').details}"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Business Development Professional"
    },
    "knowsAbout": [
      "Business Development",
      "Government Sales",
      "Strategic Partnerships",
      "Digital Transformation",
      "AI Tools",
      "Lead Generation",
      "LinkedIn Sales Navigator",
      "Customer Relationship Management",
      "B2B Sales"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "${contact.info.find(item => item.title === 'Phone').details}",
      "contactType": "customer service",
      "email": "${contact.info.find(item => item.title === 'Email').details}"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${contact.info.find(item => item.title === 'Location').details}"
    }
  }
  </script>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

</html>`;

    return htmlTemplate;
};

// Generate and write the HTML file
const generateIndexHTML = () => {
    try {
        const htmlContent = generateSEOHTML();
        const outputPath = path.join(__dirname, '../public/index.html');

        fs.writeFileSync(outputPath, htmlContent, 'utf8');
        console.log('✅ Dynamic SEO HTML generated successfully!');
        console.log(`📁 File written to: ${outputPath}`);
    } catch (error) {
        console.error('❌ Error generating SEO HTML:', error);
        process.exit(1);
    }
};

// Run the script
if (require.main === module) {
    generateIndexHTML();
}

module.exports = { generateIndexHTML, generateSEOHTML };