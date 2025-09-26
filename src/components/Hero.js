import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import './Hero.css';

const Hero = () => {
    const [textRef, textVisible] = useScrollAnimation(0.2);
    const [imageRef, imageVisible] = useScrollAnimation(0.2);
    const [statsRef, statsVisible] = useScrollAnimation(0.3);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div ref={textRef} className={`hero-text fade-in ${textVisible ? 'animate' : ''}`}>
                        <h1>
                            Hello, I'm<br />
                            <span className="name">{portfolioConfig.personal.name}</span>
                        </h1>
                        <p>
                            {portfolioConfig.personal.heroDescription}
                        </p>

                        <div ref={statsRef} className={`stats slide-in-left ${statsVisible ? 'animate' : ''}`}>
                            {portfolioConfig.heroStats.map((stat) => (
                                <div key={stat.id} className={`stat ${stat.delay}`}>
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div ref={imageRef} className={`hero-image slide-in-right ${imageVisible ? 'animate' : ''}`}>
                        <div className="image-container">
                            <div className="profile-bg"></div>
                            <img
                                src={`${process.env.PUBLIC_URL}/${portfolioConfig.personal.profileImage}`}
                                alt={portfolioConfig.personal.name}
                                className="profile-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;