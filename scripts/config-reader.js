/**
 * Configuration Reader for Dynamic SEO Generation
 * This script reads the portfolioConfig.js and extracts SEO data
 */

const fs = require('fs');
const path = require('path');

/**
 * Extract portfolio configuration data from the JS file
 * This approach reads the file as text and extracts the needed values
 */
const readPortfolioConfig = () => {
    try {
        const configPath = path.join(__dirname, '../src/config/portfolioConfig.js');
        const configContent = fs.readFileSync(configPath, 'utf8');

        // Extract personal info
        const personalMatch = configContent.match(/personal:\s*{([^}]+?)}/s);
        const nameMatch = configContent.match(/name:\s*["']([^"']+)["']/);
        const titleMatch = configContent.match(/title:\s*["']([^"']+)["']/);
        const heroDescriptionMatch = configContent.match(/heroDescription:\s*["']([^"']+)["']/);

        // Extract contact info
        const phoneMatch = configContent.match(/details:\s*["'](\d+)["']/);
        const emailMatch = configContent.match(/details:\s*["']([^@"']+@[^"']+)["']/);
        const locationMatch = configContent.match(/details:\s*["']([^"',]+,\s*[^"']+)["']/);

        // Extract SEO info
        const seoTitleMatch = configContent.match(/title:\s*["']([^"']+Business[^"']+)["']/);
        const seoDescriptionMatch = configContent.match(/description:\s*["']([^"']+experience[^"']+)["']/);
        const seoKeywordsMatch = configContent.match(/keywords:\s*["']([^"']+ChatGPT)["']/);
        const seoAuthorMatch = configContent.match(/author:\s*["']([^"']+)["']/);
        const seoUrlMatch = configContent.match(/url:\s*["']([^"']+portfolio)["']/);
        const linkedinMatch = configContent.match(/linkedin:\s*["']([^"']+linkedin[^"']+)["']/);

        return {
            personal: {
                name: nameMatch ? nameMatch[1] : "Manashvi Tripathi",
                title: titleMatch ? titleMatch[1] : "Business Development Manager",
                heroDescription: heroDescriptionMatch ? heroDescriptionMatch[1] : "Professional Business Development Manager"
            },
            contact: {
                info: [
                    { title: "Phone", details: phoneMatch ? phoneMatch[1] : "08800896164" },
                    { title: "Email", details: emailMatch ? emailMatch[1] : "tripthmannu8@gmail.com" },
                    { title: "Location", details: locationMatch ? locationMatch[1] : "Gurugram, India" }
                ]
            },
            seo: {
                title: seoTitleMatch ? seoTitleMatch[1] : "Manashvi Tripathi - Business Development Manager",
                description: seoDescriptionMatch ? seoDescriptionMatch[1] : "Professional Business Development Manager with expertise in government sales.",
                keywords: seoKeywordsMatch ? seoKeywordsMatch[1] : "Business Development, Sales, Government",
                author: seoAuthorMatch ? seoAuthorMatch[1] : "Manashvi Tripathi",
                url: seoUrlMatch ? seoUrlMatch[1] : "https://manashvitripathi.github.io/portfolio",
                image: "Sitelogo.jpeg",
                linkedin: linkedinMatch ? linkedinMatch[1] : "https://www.linkedin.com/in/manashvitripathi",
                type: "website",
                locale: "en_US"
            }
        };
    } catch (error) {
        console.error('Error reading portfolio config:', error);
        // Return fallback config
        return getFallbackConfig();
    }
};

const getFallbackConfig = () => ({
    personal: {
        name: "Manashvi Tripathi",
        title: "Business Development Manager",
        heroDescription: "Professional Business Development Manager with expertise in government sales and digital transformation."
    },
    contact: {
        info: [
            { title: "Phone", details: "08800896164" },
            { title: "Email", details: "tripthmannu8@gmail.com" },
            { title: "Location", details: "Gurugram, India" }
        ]
    },
    seo: {
        title: "Manashvi Tripathi - Business Development Manager | Government Sales Expert",
        description: "Professional Business Development Manager with 8+ years of experience in government sales, strategic partnerships, and digital transformation. Expert in AI tools, lead generation, and client relationship management.",
        keywords: "Manashvi Tripathi, Business Development Manager, Government Sales, Strategic Partnerships, Digital Transformation, AI Tools, Lead Generation, B2B Sales, LinkedIn Sales Navigator, ChatGPT",
        author: "Manashvi Tripathi",
        url: "https://manashvitripathi.github.io/portfolio",
        image: "Sitelogo.jpeg",
        linkedin: "https://www.linkedin.com/in/manashvitripathi",
        type: "website",
        locale: "en_US"
    }
});

module.exports = { readPortfolioConfig };