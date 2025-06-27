import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccessPopup(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0.2s';
          entry.target.style.animationFillMode = 'both';
        }
      });
    }, observerOptions);

    // Observe contact items for staggered animation
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-wrapper">
      {/* Main Contact Section */}
      <section className="main-contact" id="contact">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h1>Get In Touch</h1>
            <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location</h3>
                  <p>Link Road, Cuttack, Odisha 753012, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 671 234 5678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Address</h3>
                  <p>info@healthcare.co.in</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" " 
                  required 
                />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" " 
                  required 
                />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder=" " 
                  required 
                />
                <label htmlFor="subject">Subject</label>
              </div>
              
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder=" " 
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h3>Find Us Here</h3>
          <div className="map-frame">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59666.64815497993!2d85.8313652!3d20.4625075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sCuttack%2C%20Odisha!5e0!3m2!1sen!2sin!4v1640777777777!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Healthcare Location - Cuttack, Odisha"
            />
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <>
          <div className="overlay show" onClick={closePopup}></div>
          <div className="success-popup show">
            <i className="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;