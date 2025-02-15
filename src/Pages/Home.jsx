import React, { useState } from 'react';
import './Home.css';
import heroImage from '../images/hero2.png';
import About from './About';
import Popup from './Popup';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="main-home">
        <div className="home">
          <div className="home-left-content">
            <span>Welcome to Hospital Management</span>
            <h2>
              We take care of our
              <br />
              Patients' Health
            </h2>
            <p className="lorem">
              At our hospital, we are dedicated to providing the highest quality healthcare services. Our team of experienced professionals is committed to ensuring the well-being of our patients through state-of-the-art medical technology and compassionate care. Your health and comfort are our top priorities.
            </p>

            <div className="home-btn">
              <a href="#read-more" onClick={togglePopup}>Read More</a>
              <a className="homebtnsec" href="#appointment">Appointment</a>
            </div>
          </div>

          <div className="home-right-content">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>

        <div className="technology">
          <div className="main-technology">
            <div className="inner-technology">
              <span></span>
              <i className="fi fi-tr-hands-heart"></i>
              <h2>Quality & Safety</h2>
              <p>Our hospital utilizes state-of-the-art technology and employs a team of true experts to ensure the highest standards of quality and safety in patient care.</p>
            </div>

            <div className="inner-technology">
              <span></span>
              <i className="fi fi-rr-doctor"></i>
              <h2>Expert Doctors</h2>
              <p>Our team of doctors includes leading specialists in various fields, all dedicated to providing personalized and comprehensive care to our patients.</p>
            </div>

            <div className="inner-technology">
              <span></span>
              <i className="fi fi-tr-user-md"></i>
              <h2>Advanced Treatments</h2>
              <p>We offer a wide range of advanced treatments and procedures, ensuring that our patients have access to the latest medical innovations.</p>
            </div>
          </div>
        </div>     
        <About />
      </div>

      {isOpen && <Popup
        content={
          <>
            <h2>About Our Hospital</h2>
            <p>At our hospital, we are dedicated to providing the highest quality healthcare services. Our team of experienced professionals is committed to ensuring the well-being of our patients through state-of-the-art medical technology and compassionate care. Your health and comfort are our top priorities.</p>
            <p>Our Clinic has grown to provide a world-class facility for the treatment of tooth loss, dental cosmetics, and more advanced restorative dentistry. We are among the most qualified implant providers in Australia with over 30 years of quality training and experience.</p>
          </>
        }
        handleClose={togglePopup}
      />}

     
    </div>
  );
}

export default Home;
