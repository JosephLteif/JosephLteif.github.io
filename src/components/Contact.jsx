import React from 'react';
import './Contact.css'; // Will create this file next

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Let's Connect!</h2>
        <p className="contact-intro">
          I'm always open to new opportunities, exciting collaborations, or just a friendly chat about tech! Whether you have a project idea, a question, or simply want to say hi, feel free to reach out. I'd love to hear from you!
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:josephlteif@outlook.com">josephlteif@outlook.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/joseph-lteif/" target="_blank" rel="noopener noreferrer">Joseph Lteif</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/JosephLteif" target="_blank" rel="noopener noreferrer">JosephLteif</a></p>
        </div>
        {/*
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="button primary">Send Message</button>
        </form>
        */}
      </div>
    </section>
  );
}

export default Contact;