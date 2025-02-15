// Popup.js
import React from 'react';
import './Popup.css';

function Popup({ content, handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <div className="popup-content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Popup;
