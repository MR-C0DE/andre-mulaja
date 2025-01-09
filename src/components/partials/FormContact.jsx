import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import '../../styles/formContact.css';

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        suject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email.trim()) tempErrors.email = "Email is required.";
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
        if (!formData.name.trim()) tempErrors.suject = "Suject is required.";
        if (!formData.message.trim()) tempErrors.message = "Message is required.";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempErrors = validate();
        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // Envoyer les données avec EmailJS
            emailjs.send("service_t8vzjid", "template_1u25kjr", {
                from_name: formData.name,
                from_email: formData.email,
                from_suject: formData.suject,
                message: formData.message,
            },
                "G79q8dTc54AVqw0i9"

            )
                .then(() => {
                    setSuccessMessage('Thank you! Your message has been sent.');
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                    setErrorMessage('');
                })
                .catch(() => {
                    setErrorMessage('An error occurred. Please try again later.');
                });
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Contact Me</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="suject">Suject</label>
                    <input
                        type="text"
                        id="suject"
                        name="suject"
                        value={formData.suject}
                        onChange={handleChange}
                        className={errors.suject ? 'input-error' : ''}
                    />
                    {errors.suject && <span className="error-message">{errors.suject}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default FormContact;
