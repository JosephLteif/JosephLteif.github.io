import { Check, Copy, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const email = 'josephlteif@outlook.com';

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="contact section-shell">
      <div className="contact-content">
        <div className="contact-copy">
          <p className="section-kicker">Let’s build something useful</p>
          <h2 className="section-title">Have a problem worth solving?</h2>
          <p className="contact-intro">I’m open to thoughtful opportunities, collaborations, and conversations about products that make a real difference.</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${email}`} className="button primary"><Send size={17} aria-hidden="true" /> Start a conversation</a>
          <button type="button" className="copy-email-button" onClick={copyEmail} aria-describedby="copy-email-status">
            {isCopied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {isCopied ? 'Email copied' : 'Copy email'}
          </button>
          <span id="copy-email-status" className="copy-email-status" aria-live="polite">{isCopied ? email : ''}</span>
        </div>
        <div className="contact-links">
          <a href={`mailto:${email}`}><Mail size={17} aria-hidden="true" /> {email}</a>
          <a href="https://www.linkedin.com/in/joseph-lteif/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</a>
          <a href="https://github.com/JosephLteif" target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>
          <a href="https://www.instagram.com/josephlteif/" target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /> Instagram</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
