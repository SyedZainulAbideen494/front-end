import React, { useState, useCallback, useEffect } from 'react';
import './nav-bars.css';
import logo from '../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';
import insta from '../../header/images/icons8-instagram-50.png';
import phonelogo from '../../header/images/icons8-phone-50.png';

function NavBar6Preview() {


  const whatsappNumber = 7760372901; // Removed extra single quote

  const message = ''; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header className="header-header-6" style={{borderRadius: '15px'}}>
      <nav className="nav-header-6">
        <ul className="nav-list-header-6">
          <li className="nav-item-header-6">Home</li>
          <li className="nav-item-header-6">Products</li>
          <li className="nav-item-header-6">Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar6Preview;