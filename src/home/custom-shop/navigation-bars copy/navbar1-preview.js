import React,{Fragment, useState, useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import './nav-bars.css'
import logo from '../../header/images/drop2_logo.png'

const NavBar1Preview = () => {


    return<Fragment>
      <header className="header-header1">
      <div className="logo-header1">
        {/* Replace 'Logo' with your logo image or component */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="buttons-header1">
        <button className="button-header1">Home</button>
        <button className="button-header1">Products</button>
        <button className="button-header1">Login</button>
      </div>
      <div className="shopName-header1">
        <h1>Shop Name</h1>
      </div>
    </header>
    </Fragment>
}

export default NavBar1Preview