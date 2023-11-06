import React,{Fragment, useState, useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import './nav-bars.css'
import logo from '../../header/images/Dropment (2).png'

const NavBar1Preview = () => {


    return<Fragment>
<div class="headernavbar1">
  <header class="navbar1header">
    <div class="logo-container">
      <img src={logo} alt="Logo" class="imglogonavbar1" />
      <h2>Shop name</h2>
    </div>
    <nav class="button-container">
      <button>Button 1</button>
      <button>About us</button>
      <button>Contact us</button>
    </nav>
  </header>
</div>
    </Fragment>
}

export default NavBar1Preview