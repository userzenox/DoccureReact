import React from 'react';
 // Ensure the corresponding CSS file is included
import heroImage from '../images/hero2.png'; // Update the path as necessary

function Home() {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam veniam porro eius, fugiat vero ut ipsum libero
          </p>

          <div className="home-btn">
            <a href="#read-more">Read More</a>
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
            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>
          </div>

          <div className="inner-technology">
            <span></span>
            <i className="fi fi-rr-doctor"></i>
            <h2>Quality & Safety</h2>
            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>
          </div>

          <div className="inner-technology">
            <span></span>
            <i className="fi fi-tr-user-md"></i>
            <h2>Quality & Safety</h2>
            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
