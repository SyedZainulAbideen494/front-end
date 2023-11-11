import React, { useState, useCallback, useEffect } from 'react';
import './nav-bars.css';
import logo from '../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';
import insta from '../../header/images/insta.png';
import phonelogo from '../../header/images/phone.jpg';

function NavBar7Preview() {

  const whatsappNumber = 7760372901; // Removed extra single quote

  const message = ''; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className='nav-bar7-header'>
      <header className='nav-bar-7'>
        <section className='section1-nav-bar7'>
            <h2>Shop name</h2>
        </section>
        <section className='section2-nav-bar-7'>
            <button >Button 1</button>
            <button>About us</button>
        </section>
        <section className='section3-nav-bar-7'>
            <button onClick={handleWhatsAppClick} >Contact us</button>
        </section>
      </header>
    </div>
  );
}

export default NavBar7Preview;