import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo3 from '../../images/logo3.png';

function Footer({ isMenuActive }) {
  return (
    <div className="main-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <h2></h2>
          <div className="link">
            <a href=""></a>
            <a href="">
              <div className="logo">
                <img src={logo3} alt="Logo" />
              </div>
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footerNav">
            <nav className={`footernav ${isMenuActive ? 'active' : ''}`}>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/Service"> Service</NavLink>
              <NavLink to="/Doctor"> Doctor</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>

        <div className="footer-content">
          <h2>Contact Us</h2>
          <div className="link">
            <a href="">Name: Hospital Management</a>
            <a href="">Email: management@gmail.com</a>
            <a href="">Phone: +123 456 7890</a>
          </div>
        </div>

        <div className="footer-content">
          <h2></h2>
          <div className="link">
            <a href=""></a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
            <a href=""></a>
          </div>
        </div>
      </div>
      <p className="footer-rights">All rights reserved by Kumar Piyush</p>
    </div>
  );
}

export default Footer;
