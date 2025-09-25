import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
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
                            <span className="name">Manashvi Tripathi</span>
                        </h1>
                        <p>
                            I am a Business Development Manager with a strong background in government sales, strategic partnerships, and digital transformation. I leverage AI tools to accelerate lead generation and deliver compelling product demos.
                        </p>

                        <div ref={statsRef} className={`stats slide-in-left ${statsVisible ? 'animate' : ''}`}>
                            <div className="stat stagger-1">
                                <h3>9 Y+</h3>
                                <p>Experience</p>
                            </div>
                            <div className="stat stagger-2">
                                <h3>5 Cr+</h3>
                                <p>Revenue Generated</p>
                            </div>
                            <div className="stat stagger-3">
                                <h3>18+</h3>
                                <p>Happy Client</p>
                            </div>
                        </div>

                    </div>

                    <div ref={imageRef} className={`hero-image slide-in-right ${imageVisible ? 'animate' : ''}`}>
                        <div className="image-container">
                            <div className="profile-bg"></div>
                            <img
                                src={`${process.env.PUBLIC_URL}/manashvi-hero.jpeg`}
                                alt="Manashvi Tripathi"
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