import React, { useState } from 'react';
import portfolioConfig from '../config/portfolioConfig';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <div className="logo-icon">{portfolioConfig.personal.name.charAt(0)}</div>
                    <span>{portfolioConfig.personal.name.split(' ')[0]}</span>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    {portfolioConfig.navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleSmoothScroll(e, item.href.slice(1))}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="contact-btn" onClick={(e) => handleSmoothScroll(e, 'contact')}>Get in Touch</button>
                </nav>
                <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;