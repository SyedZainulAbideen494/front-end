import React, { useState, useCallback, useEffect } from 'react';
import './nav-bars.css';
import logo from '../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';

function NavBar4Preview() {

  return (
   <header className="header-header4">
      <div className="logo-header4">
        <h1>Shop Name</h1>
      </div>
      <nav className="nav-header4">
        <ul className="nav-list-header4">
          <li className="nav-item-header4">Products</li>
          <li className="nav-item-header4">Login</li>
          <li className="nav-item-header4">home</li>
          <li className="nav-item-header4">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar4Preview;