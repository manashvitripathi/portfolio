import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import './Skills.css';

const Skills = () => {
    const [titleRef, titleVisible] = useScrollAnimation(0.05);
    const [skillsGridRef, skillsGridVisible] = useScrollAnimation(0.05);

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div ref={titleRef} className={`skills-header fade-in ${titleVisible ? 'animate' : ''}`}>
                    <h2>Professional Skills</h2>
                    <p>Expertise developed through years of experience in business development, strategic partnerships, and digital transformation</p>
                </div>

                <div ref={skillsGridRef} className={`skills-grid ${skillsGridVisible ? 'grid-visible' : ''}`}>
                    {portfolioConfig.skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`skill-card ${skillsGridVisible ? 'card-visible' : ''}`}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="skill-icon">
                                <skill.icon />
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
                            <h4>{portfolioConfig.skills.length}+</h4>
                            <p>Core Skills</p>
                        </div>
                        <div className="stat-item">
                            <h4>{[...new Set(portfolioConfig.skills.map(skill => skill.category))].length}</h4>
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