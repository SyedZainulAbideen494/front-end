import { Fragment, useEffect } from "react";
import Header from "../dummyfiles/dummheader";
import React, { useState } from "react";
import { Router, Link, useNavigate } from "react-router-dom";
import Homedisplay from "../display on home screen/displayonhome";
import Cartprovider from "./cart/cartprovider";
import Mobleheader from "./header/header";
import Mycart from "./cart/mycart";
import Order from "../order/order";
import Shopsright from "../shopsowner/shopsright";
import Addshopform1 from "../addnewshop/addshopform1";
import Tempsabout from "../tempsabout/tempsabout";
import Contact from "../dropmentcontacts/contackts";
import './home.css'
import Displayshoponhome from "../display on home screen/displayshop";
import logo from './images/drop2_logo.png'
import nocode from './images/Dropment (7).png'
import step from './images/Step 1.png'
import Users from "../user/userapp";

const Home = () => {
  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);

    const nav = useNavigate();
  const [order, setorder] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);
  if (auth === true) {
    nav("/home");
  }

  const [showcart, setshowcart] = useState(false);
  const showcarthandler = () => {
    setshowcart(true);
  };

  const hidecarthandler = () => {
    setshowcart(false);
  };

  return (
    <Fragment>
      <div className="main-div-dropment">
        <div className="header-dropment-main-page">
          <header>
            <div className="nav-bar-dropment-main-page">
              <div className="dropment-branding-main-page">
                <img src={logo} alt="Dropment logo"/>
              </div>
              <div className="dropment-button-nav-main-page-dropment">
              <button className="aboutus-btn-main-page-dropment">About us</button>
                <button className="pricing-btn-main-page-dropment">Pricing</button>
                <button className="login-btn-dropment-main-page">Login</button>
                <button className="signinbtn-dropment-main-page">Sign up</button>
                <button className="strtffreebtn">Start for free</button>
              </div>
            </div>
            <div className="herosection-text-dropment-main">
                <div className="hero-section-text-dropment-main-1">
                  <h1>Build, Sell,<br/> Succeed!<br/> The Easy Way</h1>
                </div>
                <div className="hero-section-get-started-button-main-page-dropment">
                  <button>Start For Free</button>
                </div>
              </div>
          </header>
        </div>
        <div className="dropment-main-blog-page-section1">
        <h1>All-in-one Platform<br/>To Sell Online</h1>
        </div>
        <div className="dropment-main-blog-page-section2">
          <section className="dropment-main-blog-page-section2-section1">
            <h3>Store Analytics</h3>
            <p>We provide you full report on how your online store is doing</p>
          </section>
          <section className="dropment-main-blog-page-section2-section2">
            <h3>Customer Data</h3>
            <p>We grant you full access to your customer data so you can improve your marketing efforts.</p>
          </section>
          <section className="dropment-main-blog-page-section2-section3">
            <h3>Social Features</h3>
            <p>You can collaborate with others and embark
               on a new business venture together using 
               our social features such as Blinkfeed and 
               linking with friends.</p>
          </section>
          <section className="dropment-main-blog-page-section2-section4">
            <h3>User-Friendly</h3>
            <p>Thanks to Dropment's user-friendly interface, setting up your online store takes just minutes.</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
