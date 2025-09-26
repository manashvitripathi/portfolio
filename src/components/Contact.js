import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useScrollAnimation from '../hooks/useScrollAnimation';
import portfolioConfig from '../config/portfolioConfig';
import './Contact.css';

const Contact = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.1);
    const [infoRef, infoVisible] = useScrollAnimation(0.1);
    const [formRef, formVisible] = useScrollAnimation(0.1);

    // Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [submitMessage, setSubmitMessage] = useState('');

    const formRefForEmailJS = useRef();

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus('error');
            setSubmitMessage('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('error');
            setSubmitMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                portfolioConfig.contact.emailjs.serviceId,
                portfolioConfig.contact.emailjs.templateId,
                formRefForEmailJS.current,
                portfolioConfig.contact.emailjs.publicKey
            );

            console.log('Email sent successfully:', result.text);

            // Success feedback
            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

                        {/* Status Message */}
                        {submitStatus && (
                            <div className={`form-message ${submitStatus}`}>
                                {submitMessage}
                            </div>
                        )}

                        <form ref={formRefForEmailJS} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={portfolioConfig.contact.form.placeholders.name}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={portfolioConfig.contact.form.placeholders.email}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder={portfolioConfig.contact.form.placeholders.message}
                                    rows="6"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`send-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : portfolioConfig.contact.form.submitText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;