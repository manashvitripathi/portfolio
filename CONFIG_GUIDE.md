# Portfolio Configuration Guide

## Overview
This portfolio uses a centralized configuration system that allows you to easily manage all content, personal information, and data from a single file. All components now import content from `src/config/portfolioConfig.js`.

## Configuration File Location
```
src/config/portfolioConfig.js
```

## How to Update Content

### 1. Personal Information
Update your basic details:
```javascript
personal: {
    name: "Your Name Here",
    title: "Your Professional Title",
    tagline: "Your Professional Tagline",
    heroDescription: "Your hero section description...",
    aboutDescription: "Your about section description...",
    profileImage: "your-profile-image.jpg", // In public folder
    aboutImage: "your-about-image.jpg",     // In public folder
    resumeFile: "Your_Resume.pdf"           // In public folder
}
```

### 2. Hero Statistics
Modify the statistics shown in the hero section:
```javascript
heroStats: [
    {
        id: 1,
        value: "X Y+",
        label: "Your Label",
        delay: "stagger-1"
    }
    // Add more stats as needed
]
```

### 3. Skills
Add, remove, or modify your skills:
```javascript
skills: [
    {
        id: 1,
        name: "Skill Name",
        icon: FaIconName, // Import the icon at the top
        category: "Skill Category",
        level: 95 // Percentage (0-100)
    }
    // Add more skills as needed
]
```

### 4. Experience
Update your work experience:
```javascript
experience: [
    {
        id: 1,
        company: "Company Name",
        position: "Your Position",
        location: "City, Country",
        duration: "Start Date - End Date",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
            // Add more responsibilities
        ]
    }
    // Add more experiences
]
```

### 5. Contact Information
Update your contact details:
```javascript
contact: {
    header: {
        title: "Contact Section Title",
        subtitle: "Contact section subtitle"
    },
    info: [
        {
            id: 1,
            icon: FaPhone,
            title: "Contact Method",
            details: "Contact Details",
            link: "tel:phone-number" // Optional link
        }
        // Add more contact methods
    ]
}
```

### 6. Navigation Menu
Modify the navigation menu:
```javascript
navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" }
    // Add more navigation items
]
```

### 7. Social Links
Update your social media links:
```javascript
socialLinks: [
    {
        name: "Platform Name",
        url: "https://platform-url.com",
        icon: FaPlatformIcon
    }
    // Add more social links
]
```

## Adding New Icons
1. Import the icon from `react-icons/fa` at the top of the config file
2. Use the icon component in your data structures

Example:
```javascript
// At the top of the file
import { FaNewIcon } from 'react-icons/fa';

// In your data
{
    icon: FaNewIcon,
    // other properties...
}
```

## Benefits of This System

1. **Centralized Content Management**: All text and data in one place
2. **Easy Updates**: Change content without touching component files
3. **Consistency**: Ensures consistent data structure across components
4. **Maintainability**: Easier to maintain and update portfolio content
5. **Scalability**: Easy to add new sections or modify existing ones

## File Structure
```
src/
├── config/
│   └── portfolioConfig.js     # Main configuration file
├── components/
│   ├── Hero.js               # Uses portfolioConfig.personal & heroStats
│   ├── About.js              # Uses portfolioConfig.personal & about
│   ├── Skills.js             # Uses portfolioConfig.skills
│   ├── Experience.js         # Uses portfolioConfig.experience
│   ├── Contact.js            # Uses portfolioConfig.contact
│   └── Header.js             # Uses portfolioConfig.navigation
└── ...
```

## Best Practices

1. **Keep images in the public folder** and reference them by filename only
2. **Use descriptive names** for all data entries
3. **Keep skill levels realistic** (0-100 percentage)
4. **Maintain consistent date formats** in experience section
5. **Test changes** by running `npm start` after modifications

## Troubleshooting

- **Images not loading**: Ensure image files are in the `public` folder
- **Icons not showing**: Make sure the icon is imported at the top of the config file
- **Build errors**: Check for typos in the configuration file
- **Content not updating**: Clear browser cache and restart the development server

## Future Enhancements
This configuration system can be extended to include:
- Theme settings
- Animation configurations
- SEO metadata (already included)
- Multi-language support
- Portfolio projects/work samples