// Portfolio Content Configuration
// This file contains all the text content, data, and configuration for the portfolio components

import {
    FaChartLine,
    FaBlog,
    FaComments,
    FaBullseye,
    FaSearch,
    FaCog,
    FaDigitalTachograph,
    FaHeadphones,
    FaUsers,
    FaHandshake,
    FaLinkedin,
    FaRobot,
    FaDatabase,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Manashvi Tripathi",
        title: "Business Development Manager",
        tagline: "Professional Business Development Manager",
        heroDescription: "I am a Business Development Manager with a strong background in government sales, strategic partnerships, and digital transformation. I leverage AI tools to accelerate lead generation and deliver compelling product demos.",
        aboutDescription: "A strategic user of AI tools like ChatGPT and Sales Navigator to accelerate lead generation, personalize outreach, and streamline sales workflows. Proven expertise in B2B sales and client relationship management, with a knack for converting prospects into loyal customers. With 15+ years of experience in B2B sales, strategic partnerships, and digital transformation, I've helped organizations drive growth through innovation, data-driven strategy, and clear communication.",
        profileImage: "manashvi-hero.jpeg",
        aboutImage: "manashvi-hero.jpeg",
        resumeFile: "Manashvi Resume.pdf"
    },

    // Hero Section Statistics
    heroStats: [
        {
            id: 1,
            value: "9 Y+",
            label: "Experience",
            delay: "stagger-1"
        },
        {
            id: 2,
            value: "3 Cr+",
            label: "Revenue Generated",
            delay: "stagger-2"
        },
        {
            id: 3,
            value: "18+",
            label: "Happy Client",
            delay: "stagger-3"
        }
    ],

    // About Section
    about: {
        yearsExperience: "5+",
        experienceLabel: "Years Experience",
        callToAction: {
            hireMeText: "Hire Me",
            downloadCVText: "Download CV"
        }
    },

    // Skills Data
    skills: [
        {
            id: 1,
            name: "Strategic Sales & Marketing",
            icon: FaChartLine,
            category: "Sales & Marketing",
            level: 95
        },
        {
            id: 2,
            name: "Blogging",
            icon: FaBlog,
            category: "Content Creation",
            level: 85
        },
        {
            id: 3,
            name: "Professional Communication Skills",
            icon: FaComments,
            category: "Communication",
            level: 98
        },
        {
            id: 4,
            name: "Client Focus",
            icon: FaBullseye,
            category: "Customer Relations",
            level: 92
        },
        {
            id: 5,
            name: "SEO & Online Marketing",
            icon: FaSearch,
            category: "Digital Marketing",
            level: 80
        },
        {
            id: 6,
            name: "CRM & Sales Tools",
            icon: FaCog,
            category: "Technology",
            level: 88
        },
        {
            id: 7,
            name: "Digital Transformation",
            icon: FaDigitalTachograph,
            category: "Technology",
            level: 85
        },
        {
            id: 8,
            name: "Customer Support",
            icon: FaHeadphones,
            category: "Customer Relations",
            level: 90
        },
        {
            id: 9,
            name: "Team Leadership",
            icon: FaUsers,
            category: "Management",
            level: 87
        },
        {
            id: 10,
            name: "Partnership Development",
            icon: FaHandshake,
            category: "Business Development",
            level: 93
        },
        {
            id: 11,
            name: "LinkedIn Sales Navigator",
            icon: FaLinkedin,
            category: "Sales Tools",
            level: 90
        },
        {
            id: 12,
            name: "AI Tools & ChatGPT",
            icon: FaRobot,
            category: "Technology",
            level: 85
        },
        {
            id: 13,
            name: "Data Analysis",
            icon: FaDatabase,
            category: "Analytics",
            level: 75
        }
    ],

    // Experience Data
    experience: [
        {
            id: 1,
            company: "SNUG Technologies Pvt Ltd.",
            position: "Government Alliance Manager",
            location: "Gurgaon",
            duration: "May 2025 - July 2025",
            responsibilities: [
                "Drive government sales by engaging ministries, PSUs, and CXOs for digital transformation.",
                "Managing strategic partnerships and events with AVAYA, including Bharat PSU Manthan and international expos."
            ]
        },
        {
            id: 2,
            company: "NewFangled Vision Pvt Limited",
            position: "Sr. Business Development & Growth Manager",
            location: "Delhi",
            duration: "Jul 2023 - Apr 2025",
            responsibilities: [
                "Responsible for generating leads through phone calls, social media and emails.",
                "Ability to translate technical information for a non-technical audience like CEOs, CFOs, MDs and Decision Makers.",
                "Provide expert support for product demos and presentations, focusing on the technical aspects of tools such as Lusha and Sales Navigator."
            ]
        },
        {
            id: 3,
            company: "Edelweiss Broking Limited",
            position: "Sr. Wealth Manager",
            location: "Delhi",
            duration: "Aug 2021 - Oct 2022",
            responsibilities: [
                "Taking care of B2B sales functions, Franchise and wealth management and implementing Customer Acquisition Strategy.",
                "Maintaining client relationships and generating AUM Advising clients on their investments and managing their portfolio."
            ]
        },
        {
            id: 4,
            company: "SUD LIFE INSURANCE COMPANY",
            position: "Assistant Manager",
            location: "Delhi",
            duration: "Jul 2020 - Aug 2021",
            responsibilities: [
                "Responsible for Business Development and generating quality leads for the organization.",
                "Managing client relationships and providing excellent customer service.",
                "Coordinating with different departments to ensure smooth operations."
            ]
        }
    ],

    // Contact Information
    contact: {
        header: {
            title: "Get In Touch",
            subtitle: "Ready to discuss your next project or explore opportunities?"
        },
        info: [
            {
                id: 1,
                icon: FaPhone,
                title: "Phone",
                details: "08800896164",
                link: "tel:08800896164"
            },
            {
                id: 2,
                icon: FaEnvelope,
                title: "Email",
                details: "tripthmannu8@gmail.com",
                link: "mailto:tripthmannu8@gmail.com"
            },
            {
                id: 3,
                icon: FaMapMarkerAlt,
                title: "Location",
                details: "Gurugram, India",
                link: null
            },
            {
                id: 4,
                icon: FaLinkedin,
                title: "LinkedIn",
                details: "Connect with me",
                link: "https://www.linkedin.com/in/manashvitripathi"
            }
        ],
        form: {
            placeholders: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message"
            },
            submitText: "Send Message"
        }
    },

    // Work Process (if you want to add this section)
    workProcess: [
        {
            id: 1,
            step: "01",
            title: "Discovery",
            description: "Understanding your business needs and requirements through detailed consultation."
        },
        {
            id: 2,
            step: "02",
            title: "Strategy",
            description: "Developing a comprehensive strategy tailored to your specific goals and market."
        },
        {
            id: 3,
            step: "03",
            title: "Implementation",
            description: "Executing the strategy with precision and monitoring progress at every step."
        },
        {
            id: 4,
            step: "04",
            title: "Growth",
            description: "Continuous optimization and scaling to achieve sustainable business growth."
        }
    ],

    // Navigation Menu
    navigation: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ],

    // Social Links
    socialLinks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/manashvitripathi",
            icon: FaLinkedin
        },
        {
            name: "Email",
            url: "mailto:tripthmannu8@gmail.com",
            icon: FaEnvelope
        },
        {
            name: "Phone",
            url: "tel:08800896164",
            icon: FaPhone
        }
    ],

    // SEO and Meta Information
    seo: {
        title: "Manashvi Tripathi - Business Development Manager",
        description: "Professional Business Development Manager with 5+ years of experience in government sales, strategic partnerships, and digital transformation.",
        keywords: "Business Development, Sales Manager, Government Sales, Digital Transformation, AI Tools, Lead Generation",
        author: "Manashvi Tripathi"
    }
};

export default portfolioConfig;