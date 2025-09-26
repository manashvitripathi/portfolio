import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import './Experience.css';

const Experience = () => {
    const [titleRef, titleVisible] = useScrollAnimation(0.1);
    const [timelineRef, timelineVisible] = useScrollAnimation(0.1);

    // Render the experience section
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 ref={titleRef} className={`experience-title fade-in ${titleVisible ? 'animate' : ''}`}>
                    Professional Experience
                </h2>

                <div ref={timelineRef} className={`experience-timeline ${timelineVisible ? 'timeline-visible' : ''}`}>
                    {portfolioConfig.experience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`experience-item ${timelineVisible ? 'item-visible' : ''}`}
                            style={{
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="company-info">
                                        <h3>{exp.company}</h3>
                                        <h4>{exp.position}</h4>
                                    </div>
                                    <div className="experience-meta">
                                        <div className="duration">
                                            <FaCalendarAlt />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="location">
                                            <FaMapMarkerAlt />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="responsibilities">
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="timeline-dot">
                                <FaBuilding />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;