import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
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
        link.href = `/${portfolioConfig.personal.resumeFile}`; // Path to resume in public folder
        link.download = portfolioConfig.personal.resumeFile;
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
                            src={`${process.env.PUBLIC_URL}/${portfolioConfig.personal.aboutImage}`}
                            alt={portfolioConfig.personal.name}
                            className="about-img"
                        />
                        <div className="experience-badge scale-in">
                            <span>{portfolioConfig.about.yearsExperience}</span>
                            <p>{portfolioConfig.about.experienceLabel}</p>
                        </div>
                    </div>

                    <div ref={textRef} className={`about-text slide-in-right ${textVisible ? 'animate' : ''}`}>
                        <h2>{portfolioConfig.personal.tagline}</h2>
                        <p>
                            {portfolioConfig.personal.aboutDescription}
                        </p>
                        <div className="about-buttons">
                            <button className="hire-me-btn" onClick={handleHireMeClick}>{portfolioConfig.about.callToAction.hireMeText}</button>
                            <button className="download-cv" onClick={handleDownloadCV}>{portfolioConfig.about.callToAction.downloadCVText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;