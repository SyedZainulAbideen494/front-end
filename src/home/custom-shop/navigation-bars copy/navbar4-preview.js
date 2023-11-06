import React, { useState, useCallback, useEffect } from 'react';
import './nav-bars.css';
import logo from '../../header/images/Dropment (2).png';
import { useParams } from 'react-router-dom';

function NavBar4Preview() {

  return (
    <header className="header-navbar4" >
      <nav>
        <ul className="nav-list-navbar4">
          <button className="nav-button-navbar4" >button 1</button>
          <button className="nav-button-navbar4">About us</button>
          <button className="nav-button-navbar4">contact us</button>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar4Preview;