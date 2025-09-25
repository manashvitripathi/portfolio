import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.1);
    const [infoRef, infoVisible] = useScrollAnimation(0.1);
    const [formRef, formVisible] = useScrollAnimation(0.1);

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div ref={headerRef} className={`contact-header fade-in ${headerVisible ? 'animate' : ''}`}>
                    <h2>Get In Touch</h2>
                    <p>Ready to discuss your next project or explore opportunities?</p>
                </div>

                <div className="contact-content">
                    <div ref={infoRef} className={`contact-info slide-in-left ${infoVisible ? 'animate' : ''}`}>
                        <div className="contact-item stagger-1">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <p>08800896164</p>
                            </div>
                        </div>

                        <div className="contact-item stagger-2">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>tripthmannu8@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item stagger-3">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Gurugram, India</p>
                            </div>
                        </div>

                        <div className="contact-item stagger-4">
                            <div className="contact-icon">
                                <FaLinkedin />
                            </div>
                            <div className="contact-details">
                                <h3>LinkedIn</h3>
                                <a href="https://linkedin.com/in/manashvitripathi/" target="_blank" rel="noopener noreferrer">
                                    Manashvi Tripathi
                                </a>
                            </div>
                        </div>
                    </div>

                    <div ref={formRef} className={`contact-form slide-in-right ${formVisible ? 'animate' : ''}`}>
                        <h3>Send Message</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="6" required></textarea>
                            </div>
                            <button type="submit" className="send-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;