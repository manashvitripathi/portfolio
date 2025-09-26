import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import './Contact.css';

const Contact = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.1);
    const [infoRef, infoVisible] = useScrollAnimation(0.1);
    const [formRef, formVisible] = useScrollAnimation(0.1);

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div ref={headerRef} className={`contact-header fade-in ${headerVisible ? 'animate' : ''}`}>
                    <h2>{portfolioConfig.contact.header.title}</h2>
                    <p>{portfolioConfig.contact.header.subtitle}</p>
                </div>

                <div className="contact-content">
                    <div ref={infoRef} className={`contact-info slide-in-left ${infoVisible ? 'animate' : ''}`}>
                        {portfolioConfig.contact.info.map((item, index) => (
                            <div key={item.id} className={`contact-item stagger-${index + 1}`}>
                                <div className="contact-icon">
                                    <item.icon />
                                </div>
                                <div className="contact-details">
                                    <h3>{item.title}</h3>
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.details}
                                        </a>
                                    ) : (
                                        <p>{item.details}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div ref={formRef} className={`contact-form slide-in-right ${formVisible ? 'animate' : ''}`}>
                        <h3>Send Message</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder={portfolioConfig.contact.form.placeholders.name} required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder={portfolioConfig.contact.form.placeholders.email} required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder={portfolioConfig.contact.form.placeholders.subject} required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder={portfolioConfig.contact.form.placeholders.message} rows="6" required></textarea>
                            </div>
                            <button type="submit" className="send-btn">{portfolioConfig.contact.form.submitText}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;