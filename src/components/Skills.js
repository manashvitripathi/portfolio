import React from 'react';
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
    FaDatabase
} from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const [titleRef, titleVisible] = useScrollAnimation(0.05);
    const [skillsGridRef, skillsGridVisible] = useScrollAnimation(0.05);

    const skillsData = [
        {
            id: 1,
            name: "Strategic Sales & Marketing",
            icon: <FaChartLine />,
            category: "Sales & Marketing",
            level: 95
        },
        {
            id: 2,
            name: "Blogging",
            icon: <FaBlog />,
            category: "Content Creation",
            level: 85
        },
        {
            id: 3,
            name: "Professional Communication Skills",
            icon: <FaComments />,
            category: "Communication",
            level: 98
        },
        {
            id: 4,
            name: "Client Focus",
            icon: <FaBullseye />,
            category: "Customer Relations",
            level: 96
        },
        {
            id: 5,
            name: "Prospecting & Lead Generation",
            icon: <FaSearch />,
            category: "Sales & Marketing",
            level: 94
        },
        {
            id: 6,
            name: "Product Expertise",
            icon: <FaCog />,
            category: "Technical",
            level: 90
        },
        {
            id: 7,
            name: "Digital Marketing",
            icon: <FaDigitalTachograph />,
            category: "Marketing",
            level: 88
        },
        {
            id: 8,
            name: "Active Listener",
            icon: <FaHeadphones />,
            category: "Communication",
            level: 97
        },
        {
            id: 9,
            name: "Team Player",
            icon: <FaUsers />,
            category: "Leadership",
            level: 93
        },
        {
            id: 10,
            name: "Strong Business Relationships Builder",
            icon: <FaHandshake />,
            category: "Customer Relations",
            level: 96
        },
        {
            id: 11,
            name: "Sales Navigator",
            icon: <FaLinkedin />,
            category: "AI Tools",
            level: 92
        },
        {
            id: 12,
            name: "ChatGPT",
            icon: <FaRobot />,
            category: "AI Tools",
            level: 89
        },
        {
            id: 13,
            name: "Data Analytics Platform",
            icon: <FaDatabase />,
            category: "Technical",
            level: 87
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div ref={titleRef} className={`skills-header fade-in ${titleVisible ? 'animate' : ''}`}>
                    <h2>Professional Skills</h2>
                    <p>Expertise developed through years of experience in business development, strategic partnerships, and digital transformation</p>
                </div>

                <div ref={skillsGridRef} className={`skills-grid ${skillsGridVisible ? 'grid-visible' : ''}`}>
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`skill-card ${skillsGridVisible ? 'card-visible' : ''}`}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <div className="skill-content">
                                <h3>{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: skillsGridVisible ? `${skill.level}%` : '0%'
                                            }}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-summary">
                    <div className="summary-stats">
                        <div className="stat-item">
                            <h4>13+</h4>
                            <p>Core Skills</p>
                        </div>
                        <div className="stat-item">
                            <h4>6</h4>
                            <p>Skill Categories</p>
                        </div>
                        <div className="stat-item">
                            <h4>5+</h4>
                            <p>Organizational Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;