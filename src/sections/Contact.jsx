import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to Formspree
    fetch('https://formspree.io/f/meozeopb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Oops! There was a problem submitting your form. Please try again later.'
      });
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through the form or via the contact details below.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">charisching100@gmail.com</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+1 (650) 390-3742</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Campbell, California</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/cching3" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/charisching" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/meozeopb" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;