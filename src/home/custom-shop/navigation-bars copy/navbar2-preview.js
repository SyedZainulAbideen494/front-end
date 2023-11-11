import React,{useCallback, useEffect, useState, Fragment} from 'react';
import './nav-bars.css';
import { useParams } from 'react-router-dom';
import logo from '../../header/images/drop2_logo.png'

const NavBar2Preview = () => {


    return<Fragment>
        <div className="nav-bar-2-in-build">
        <header className="header-navbar2">
      <div className="logo-navbar2">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="shop-name-navbar2">Shop name</div>
      <nav className="nav-navbar2">
        <button className="nav-button-navbar2">Button 1</button>
        <button className="nav-button-navbar2">About us</button>
        <button className="nav-button-navbar2">Contact us</button>
      </nav>
    </header>
        </div>
    </Fragment>
}

export default NavBar2Preview