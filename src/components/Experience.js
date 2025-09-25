import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Experience.css';

const Experience = () => {
    const [titleRef, titleVisible] = useScrollAnimation(0.1);
    const [timelineRef, timelineVisible] = useScrollAnimation(0.1);

    const experiences = [
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
                "Promote high-quality sales, supply, and customer service processes",
                "Identify key personnel in client organisations to cultivate profitable relationships"
            ]
        },
        {
            id: 5,
            company: "IndusInd Bank Limited",
            position: "Client Account Officer",
            location: "Delhi",
            duration: "Oct 2017 - Jun 2020",
            responsibilities: [
                "Identify potential clients through various channels, cold calling, referrals, or assigned leads",
                "Identify opportunities to sell additional IndusInd Bank products and services that align with a client's financial situation"
            ]
        }
    ];

    // Render the experience section
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 ref={titleRef} className={`experience-title fade-in ${titleVisible ? 'animate' : ''}`}>
                    Professional Experience
                </h2>

                <div ref={timelineRef} className={`experience-timeline ${timelineVisible ? 'timeline-visible' : ''}`}>
                    {experiences.map((exp, index) => (
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