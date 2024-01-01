import React,{useCallback, useEffect, useState, Fragment} from 'react';
import './nav-bars.css';
import { useParams } from 'react-router-dom';
import logo from '../../header/images/drop2_logo.png'

const NavBar2Preview = () => {


    return<Fragment>
   <header className="header-header2">
      <div className="logo-header2">
        <h1>Shop Name</h1>
      </div>
      <nav className="nav-header2">
        <ul className="nav-list-header2">
          <li className="nav-item-header2">Products</li>
          <li className="nav-item-header2">Login</li>
          <li className="nav-item-header2">Shop</li>
        </ul>
      </nav>
    </header>
    </Fragment>
}

export default NavBar2Preview