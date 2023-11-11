import React,{useCallback, useEffect, useState} from 'react';
import './nav-bars.css';
import { useParams } from 'react-router-dom';
import logo from '../../header/images/drop2_logo.png';
import { Colors } from 'chart.js';

function NavBar3Preview() {

  return (
    <header className="navbar3" >
      <div className="navbar3-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar3-content">
        <h1 className="navbar3-shopname">Shop name</h1>
        <nav className="navbar3-buttons">
          <button className="navbar3-button">Button 1</button>
          <button className="navbar3-button">About us</button>
          <button className="navbar3-button">Contact us</button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar3Preview;