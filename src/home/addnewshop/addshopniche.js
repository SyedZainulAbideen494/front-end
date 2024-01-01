import React, { Fragment, useState } from "react";
import "./addshop.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FaLock } from 'react-icons/fa';


const Addshopniche = () => {

  const addCustomShopHandler = () => {
    const token = localStorage.getItem('token');
    Axios.post(
      "https://apifordropment.online/add/custom/shop",
      null,  // Request body should be null or an empty object if there's no data to send
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => {
      window.location.href = `/profile`;
    })
    .catch((error) => {
      // Handle errors here
    });
  };
  return (
 <div className="container-shop-builder">
     <div className="header-shop-builder">
  <div className="headerButtons-shop-builder" style={{textAlign: 'center'}}>
    <Link to="/profile" style={{ textDecoration: 'none' }}>
      <button className="navButton-shop-builder">Profile</button>
    </Link>
    <Link to="/home" style={{ textDecoration: 'none' }}>
      <button className="navButton-shop-builder">Home</button>
    </Link>
    <Link to="/overview" style={{ textDecoration: 'none' }}>
      <button className="navButton-shop-builder">Overview</button>
    </Link>
  </div>
</div>

      <div className="content-shop-builder">
        <div className="quote-shop-builder">
          <p className="quoteText-shop-builder">Start your journey to success!</p>
        </div>
        
        <div className="templates-shop-builder">
          <div className="templat-shop-buildere">
            <Link to="/custom/shop/build/page1" style={{ textDecoration: 'none' }}>
              <button className="setupButton-shop-builder">Setup Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addshopniche;