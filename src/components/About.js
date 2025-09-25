import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const [imageRef, imageVisible] = useScrollAnimation(0.2);
    const [textRef, textVisible] = useScrollAnimation(0.2);

    const handleHireMeClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleDownloadCV = () => {
        // Create a link to download the resume
        const link = document.createElement('a');
        link.href = '/Manashvi Resume.pdf'; // Path to resume in public folder
        link.download = 'Manashvi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div ref={imageRef} className={`about-image slide-in-left ${imageVisible ? 'animate' : ''}`}>
                        <img
                            src={`${process.env.PUBLIC_URL}/manashvi-hero.jpeg`}
                            alt="Manashvi Tripathi"
                            className="about-img"
                        />
                        <div className="experience-badge scale-in">
                            <span>5+</span>
                            <p>Years Experience</p>
                        </div>
                    </div>

                    <div ref={textRef} className={`about-text slide-in-right ${textVisible ? 'animate' : ''}`}>
                        <h2>I am Professional Business Development Manager</h2>
                        <p>
                            A strategic user of AI tools like ChatGPT and Sales
                            Navigator to accelerate lead generation, personalize outreach, and streamline sales
                            workflows. Proven expertise in B2B sales and client relationship management, with a knack
                            for simplifying complex technical concepts and delivering compelling product demos. Known
                            for driving business growth through innovation, data-driven strategy, and clear
                            communication.                        </p>
                        <p>
                            With 15+ years of experience in B2B sales, strategic partnerships, and digital transformation, I've helped organizations drive growth through innovation, data-driven strategy, and clear communication.
                        </p>

                        <div className="about-buttons">
                            <button className="hire-me-btn" onClick={handleHireMeClick}>Hire Me</button>
                            <button className="download-cv" onClick={handleDownloadCV}>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;