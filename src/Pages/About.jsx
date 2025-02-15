import React, { useState } from 'react';
import './About.css';
import AboutImage from '../images/about1.png';
import Popup from './Popup'; // Import the Popup component

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="main-about">
        <div className="about-heading">About Us</div>

        <div className="inner-main-about">
          <div className="about-inner-content-left">
            <img src={AboutImage} alt="doctors" />
          </div>

          <div className="about-inner-content">
            <div className="about-right-content">
              <h2>We're setting Standards in Research <br /> what's more, Clinical Care.</h2>
              <p>We provide the most comprehensive medical services, so every person has the opportunity to receive quality medical care.</p>
              <p className="aboutsec-content">
                Our Clinic has grown to provide a world-class facility for the treatment of tooth loss, dental cosmetics, and more advanced restorative dentistry. We are among the most qualified implant providers in Australia with over 30 years of quality training and experience.
              </p>
              <button className="aboutbtn" onClick={togglePopup}>Read More</button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Popup
        content={
          <>
            <h2>About Our Hospital</h2>
            <p>Our hospital is dedicated to providing the highest quality healthcare services with a team of experienced professionals committed to patient well-being through state-of-the-art medical technology and compassionate care.</p>
            
            <h3>Our Services</h3>
            <ul>
              <li><b>General Medicine:</b> Comprehensive care for various medical conditions.</li>
              <li><b>Specialized Treatments:</b> Expert care in fields like cardiology and neurology.</li>
              <li><b>Emergency Services:</b> 24/7 emergency care.</li>
            </ul>

            <h3>Contact Us</h3>
            <p>If you have any questions, please don't hesitate to contact us for more information.</p>
          </>
        }
        handleClose={togglePopup}
      />}
    </div>
  );
}

export default About;
