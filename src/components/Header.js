import React, { useState } from 'react';
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
                    <div className="logo-icon">M</div>
                    <span>Manashvi</span>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
                    <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
                    <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')}>Experience</a>
                    <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
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