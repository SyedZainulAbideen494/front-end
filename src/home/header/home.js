import { Fragment, useEffect } from "react";
import Header from "../dummyfiles/dummheader";
import React, { useState } from "react";
import { Router, Link, useNavigate } from "react-router-dom";
import './home.css'
import logo from './images/drop2_logo.png'
import nocode from './images/Dropment (7).png'
import step from './images/Step 1.png'
import stats from './images/Untitled design (18) (1).png'
import sales from './images/Untitled design (23) (1).png'
import orders from './images/Untitled design (20) (1).png'


const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage % 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
}
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
        <div className="dropment-main-blog-page-section3">
          <section className="dropment-main-blog-page-section3-txt">
          <h2>Discover Comprehensive Store Insights</h2>
<h4>Elevate your business with our in-depth shop analytics</h4>
          </section>
          <section className="dropment-main-blog-page-section3-img"></section>
        </div>
        <div className="dropment-main-blog-page-section4">
        <section className="dropment-main-blog-page-section4-txt">
            <h2>Manage Inventory</h2>
            <p>Our app simplifies inventory management
               for your online store. Easily organize 
               and track your products with intuitive
                tools designed to streamline your operations.</p>
                <button>Get Started For Free</button>
          </section>
          <section className="dropment-main-blog-page-section4-img">
            <img src={sales}/>
          </section>
        </div>
        <div className="dropment-main-blog-page-section5">
          <h1>What is Dropment?</h1>
          <p className="dropment-main-blog-page-section5-p">Dropment is your gateway to a 
            world of endless e-commerce 
            possibilities. From setting up
            your store to making sales online,
            we make your experience seamless
            and hassle-free. With Dropment, 
            now set up an aesthetically pleasing
            online store without any technical
            complexities and investment.</p>
            <button class="get-started-button">Get started For Free</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
