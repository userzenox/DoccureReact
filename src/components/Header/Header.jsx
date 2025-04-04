import React, { useState } from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file for styling
import logo3 from '../../images/logo3.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleSubMenuClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent element
    setIsMenuActive(false); // Close the menu only when a submenu item is clicked
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo3} alt="" />
        </div>

        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
          <NavLink exact to="/" onClick={handleSubMenuClick}>Home</NavLink>
          <NavLink to="/Service" onClick={handleSubMenuClick}>Service</NavLink>
          <NavLink to="/contact" onClick={handleSubMenuClick}>Contact</NavLink>
        </nav>

        <div className="right-icons">
          {isMenuActive ? (
            <FontAwesomeIcon icon={faTimes} onClick={handleMenuClick} />
          ) : (
            <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
          )}
          <div className="btn"> 
            <NavLink to="/appointment" onClick={handleSubMenuClick}>Appointment</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
