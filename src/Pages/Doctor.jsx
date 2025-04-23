import React from 'react';
// import './App.css';  // Assuming your styles are in App.css or a similar file

const App = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="images/logo3.png" alt="Logo" />
        </div>

        <nav className="navbar">
          <a href="./index.html">Home</a>
          <a href="./service.html">Service</a>
          <a href="./Patient.html">Patient</a>
          <a href="./Doctors.html">Doctors</a>
          <a href="./Contacts">Contact</a>
        </nav>

        <div className="right-icons">
          <div id="menu-bars" className="fas fa-bars"></div>
          <div className="btn">Make Appointment</div>
        </div>
      </header>

      {/* Header section ended */}

      {/* Our Doctors */}
      <div className="main-doctors">
        <div className="doctors-heading">
          <h2>Our Doctors</h2>
        </div>

        <div className="main-inner-doctor">
          {['team1', 'team2', 'team3', 'team4', 'team5', 'team6'].map((team, index) => (
            <div className="doc-poster" key={index}>
              <div className="doc-icons">
                <i className="fa-solid fa-share"></i>
                <i className="fa-solid fa-eye"></i>
                <i className="fa-solid fa-heart"></i>
              </div>
              <img src={`images/${team}.jpg`} alt={`Doctor ${index + 1}`} />
              <div className="doc-details">
                <h2>Mr Joe</h2>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Our Doctors Ended */}

      {/* Footer section */}
      <div className="main-footer">
        <div className="footer-inner">
          <div className="footer-content">
            <div className="link">
              <a href=""></a>
              <a href="">
                <div className="logo">
                  <img src="images/logo3.png" alt="Logo" />
                </div>
              </a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>

          <div className="footer-content">
            <div className="link">
              <nav className="navbar">
                {/* <a href="./index.html">Home</a> */}
                <a href="./Doctors.html">Doctors</a>
                <a href="./service.html">Service</a>
                <a href="./Patient.html">Patient</a>
                <a href="#Home">Contact</a>
              </nav>
            </div>
          </div>

          <div className="footer-content">
            <h1>Contact US</h1>
            <div className="link">
              <a href="">Name: Hospital Management</a>
              <a href="">Email: management@gmail.com</a>
              <a href="">Phone: +123 456 7890</a>
            </div>
          </div>

          <div className="footer-content">
            <h1></h1>
            <div className="link">
              <a href=""></a>
              <a href="">Privacy Policy</a>
              <a href="">Terms and Conditions</a>
              <a href=""></a>
            </div>
          </div>
        </div>
        <p>All rights are reserved by Kumar Piyush</p>
      </div>
      {/* Footer section ends */}
    </div>
  );
};

export default App;
