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
    <div className='nav-bar6-header'>
      <header className='nav-bar6'>
        <section className='section1-nav-bar-6'>
          <a href={'https://www.instagram.com/saz_494/'}>
            <img src={insta} alt="Instagram" />
          </a>
          <img src={phonelogo} onClick={handleWhatsAppClick} alt="Phone" />
        </section>
        <section className='section2-nav-bar-6'>
            <button >button1</button>
            <img src={logo}/>
            <button>About us</button>
        </section>
      </header>
    </div>
  );
}

export default NavBar6Preview;