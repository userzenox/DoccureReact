import React from 'react';
import './Doctor.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team5.jpg';
import team6 from '../images/team6.jpg';


const doctors = [
  { name: "Dr. Joe", image: team1, linkedin: "#", instagram: "#" },
  { name: "Dr. Lucifer", image: team2, linkedin: "#", instagram: "#" },
  { name: "Dr. Smith", image: team3, linkedin: "#", instagram: "#" },
  { name: "Dr. Emily", image: team4, linkedin: "#", instagram: "#" },
  { name: "Dr. Brok", image: team5, linkedin: "#", instagram: "#" },
  { name: "Dr. Allen", image: team6, linkedin: "#", instagram: "#" },
  
  
];


const Doctor = () => {
  return (
    <section className="main-doctors">
      <div className="doctors-heading">
        <h2>Our Doctors</h2>
      </div>

      <div className="main-inner-doctor">
        {doctors.map((doc, index) => (
          <div className="doc-poster" key={index}>
            <div className="doc-icons">
              <i className="fa-solid fa-share"></i>
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-heart"></i>
            </div>
          <img src={doc.image} alt={doc.name} />

            <div className="doc-details">
              <h2>{doc.name}</h2>
              <a href={doc.linkedin}><i className="fa-brands fa-linkedin"></i></a>
              <a href={doc.instagram}><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctor;
