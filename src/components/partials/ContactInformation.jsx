import React from 'react';
import '../../styles/contactInformation.css';
import { user } from "../../data/user";

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's Get in Touch: Ways to Connect with Me</h2>
      <p className="contact-paragraph">
        Thank you for your interest in reaching out to me. I am always eager to connect with fellow professionals, enthusiasts, and collaborators. If you have any questions, feedback, or just want to say hello, feel free to email me at{' '}
        <a href={"mailto:" + user.mail} className="contact-email">mulajaandre@gmail.com</a>. I strive to respond within 24 hours, though it might take a bit longer during busy periods. Additionally, you can use the contact form on my website for a more detailed inquiry.
        For regular updates and professional engagement, connect with me on <a href="[linkedin link]" className="contact-link">LinkedIn</a>. I share insights on industry trends, my projects, and more. If you're interested in my coding projects, follow me on GitHub to see what I’m working on.
        Your support and engagement are greatly appreciated, and I look forward to potential collaborations and meaningful exchanges. Thank you once again for your interest. Let's connect and explore new opportunities together!
      </p>
      <div className="social-links">
        <a href={user.media.github} target="_blank" className="social-link">Follow on GitHub</a>
        <a href={user.media.linkedin} target="_blank" className="social-link">Follow on LinkedIn</a>
      </div>

    </div>
  );
};

export default ContactInformation;
