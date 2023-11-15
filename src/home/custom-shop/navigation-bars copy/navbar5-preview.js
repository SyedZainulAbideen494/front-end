import React, { useState, useCallback, useEffect } from 'react';
import './nav-bars.css';
import logo from '../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';

function NavBar5Preview() {

  return (
    <div className="headernavbar1-preview">
    <div className='nav-bar5-header'>
    <header className='nav-bar5'>
        <div className='name-shop-nav-bars5' >
            <h2>Shop name</h2>
        </div>
        <div className='nav-bar5-btns'>
            <button >button1</button>
            <button>About us</button>
            <button>Contact us</button>
        </div>
    </header>
    </div>
    </div>
  );
}

export default NavBar5Preview;