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
import logo from './images/Dropment (2).png'
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
        <div className="maindivfordropment">
          <div className="headerfordropment1">
            <header>
              <div className="dropmentnavbar">
                <Mobleheader/>
              </div>
            </header>
          </div>
          <div className="header2dropment">
            <header>
              <section>
              <div className="header2textdropment">
                <h1>Build Your Perfect Online Store!</h1>
                <div className="h1dropemnthead2h12">
                <h1>Your Dream Store Awaits: Just a Few Clicks Away!</h1>
                </div>
                <div className="header2dropbtn">
                <Link to='/Addshoppage1'>
                <button><h2>Get started</h2></button>
                </Link>
              </div>
                </div>
              </section>  
              <div className="header2dropimg">
                <section></section>
              </div>  
            </header>
          </div>
          <div className="ourservicesdropment">
            <span>
            <div className="service1dropemnt">
              <div className="servcie1img">
              <section></section>
              </div>
              <div className="service1text">
                <section>
                  <h2>No code</h2>
                  <h4>No coding skill required, you can choose from a wide range of template to make your online store.</h4>
                </section>
              </div>
          </div>
          </span>
          <span>
          <div className="service2dropemnt">
              <div className="servcie2img">
              <section></section>
              </div>
              <div className="service2text">
                <section>
                  <h2>No Web hosting or domain required</h2>
                  <h4>No web hosting or domain required so you can start for free.</h4>
                </section>
              </div>
          </div>
          </span>
          <span>
          <div className="service3dropemnt">
              <div className="servcie3img">
              <section></section>
              </div>
              <div className="service3text">
                <section>
                  <h2>Easy to use</h2>
                  <h4>With our user friendly interface your can create your store with ease in a few clicks.</h4>
                </section>
              </div>
          </div>
          </span>
        </div>
        <div className="howitworks">
          <div className="stepbystepguideimg">
            <img src={step}/>
          </div>
        </div>
        <div className="aboutdropmentaboutus">
          <div className="aboutus1dropment">
            <div className="abt1dropmenttext">
              <h1>Our Mission</h1>
              <p><h3>At Dropment, we are driven by a singular mission: to empower individuals and businesses of all sizes to effortlessly establish a compelling online presence and thrive in the digital marketplace. Our commitment to this mission is reflected in every aspect of our platform, which enables you to create and manage your online store without the need for domain registration, web hosting, or coding expertise.</h3></p>
            </div>
            <div className="abt1dropmentimg">
              <section></section>
            </div>
          </div>
          <div className="ourvalue">
          <div className="valuemaintexthead">
                <h1>Our Value</h1>
              </div>
            <div className="value1">  
              <div className="value1img">
                <section></section>
              </div>
              <div className="value1txt">
                <h1>Simplicity</h1>
                <p>We believe that technology should be accessible to all. Our platform is designed with simplicity in mind, allowing you to focus on what matters most your products and customers while we handle the technical intricacies.</p>
              </div>
            </div>
            <div className="value2">              
              <div className="value2txt">
                <h1>Empowerment</h1>
                <p>We empower you to take control of your online store, offering intuitive tools and features that put you in the driver's seat. No more reliance on third parties or expensive developers.</p>
              </div>
              <div className="value2img">
                <section></section>
              </div>
            </div>
            <div className="value3">
            <div className="value3img">
                <section></section>
              </div>              
              <div className="value3txt">
                <h1>Innovation</h1>
                <p>We empower you to take control of your online store, offering intuitive tools and features that put you in the driver's seat. No more reliance on third parties or expensive developers.</p>
              </div>         
            </div>
          </div>
          <div className="ourbackgrounddropment">
            <div className="ourbackgorundtext">
              <h1>Our Background</h1>
              <p>Founded in 2022, Dropment emerged from a vision to democratize e-commerce and make it accessible to everyone. With a team of passionate experts in technology, design, and business, we set out to revolutionize the way online stores are built and managed.</p>
            </div>          
          </div>
          <div className="ourapp">
            <div className="ourapptext">
              <h1>About Dropment</h1>
              <p>Dropment is your gateway to a world of endless e-commerce possibilities. From setting up your store to making sales online, we make your experience seamless and hassle-free. With Dropment, now set up an aesthetically pleasing online store without any technical complexities and investment. 
</p>
            </div>
            <div className="ourappblock1">
              <div className="imgblock1ourapp">
                <section></section>
              </div>
              <div className="textourappblock1">
                <h2>User-Friendly Interface</h2>
                <p>Our intuitive app interface guides you through the process, making it easy to set up your store, add products, and customize every detail.</p>
              </div>
            </div>
            <div className="ourappblock2">          
              <div className="textourappblock2">
                <h2>Stunning Templates</h2>
                <p>Choose from a collection of professionally designed templates that align with your brand's aesthetic. Customize them to create a store that truly reflects your unique identity.</p>
              </div>
              <div className="imgblock2ourapp">
                <section></section>
              </div>
            </div>
            <div className="ourappblock3">  
            <div className="imgblock3ourapp">
                <section></section>
            </div>        
              <div className="textourappblock3">
                <h2>Mobile Optimization</h2>
                <p>Your online store will look and perform flawlessly on any device, ensuring a seamless shopping experience for your customers, whether they're browsing on a computer or a smartphone.</p>
              </div>        
            </div>
          </div>
        </div>
        <div className="displayallshopsanditems">
          <div className="itemsfromusers">
            <div className="textforitemsfromusers">
              <h1>Items from our users</h1>
            </div>
            <div className="itemsdropment">
              <Homedisplay/>
              <Users/>
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            <div className="conatctsdropment">
              <h2>Contact us</h2>
              <ul>
                <li>dropment.saz@gmail.com</li>
                <li>@saz_494</li>
              </ul>
            </div>
          </footer>
        </div>
        </div>
    </Fragment>
  );
};

export default Home;
