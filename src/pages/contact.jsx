import React, { useEffect } from 'react';
import Contact from '../sections/Contact.jsx';
import '../styles/Contact.css';

function ContactPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Contact | Charis Ching';
  }, []);

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Have a question or want to work together? Reach out to me!</p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;