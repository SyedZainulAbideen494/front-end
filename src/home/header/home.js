import { Fragment, useEffect, useRef } from "react";
import Header from "../dummyfiles/dummheader";
import React, { useState } from "react";
import { Router, Link, useNavigate } from "react-router-dom";
import './home.css'
import logo from './images/drop2_logo.png'
import nocode from './images/Dropment (7).png'
import step from './images/Step 1.png'
import stats from './images/Untitled design (18) (1).png'
import sales from './images/Untitled design (23) (1).png'
import orders from './images/Untitled design (24) (1).png'
import facebook from './images/icons8-facebook-logo-50 (1).png'
import instagram from './images/icons8-instagram-logo-50.png'
import x from './images/icons8-twitterx-50.png'
import { FaLock } from "react-icons/fa";

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
  const [q1, setq1] = useState(false)
  const [q2, setq2] = useState(false)
  const [q3, setq3] = useState(false)
  const [q4, setq4] = useState(false)
  const [q5, setq5] = useState(false)

  const toggleQ5 = () => {
    setq5(!q5); // Toggles the state of q1
  };

  const toggleQ4 = () => {
    setq4(!q4); // Toggles the state of q1
  };

  const toggleQ1 = () => {
    setq1(!q1); // Toggles the state of q1
  };
  const toggleQ2 = () => {
    setq2(!q2); // Toggles the state of q1
  };
  const toggleQ3 = () => {
    setq3(!q3); // Toggles the state of q1
  };
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
  const itemsRef = useRef(null);
  const aboutusRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToItems = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToaboutus = () => {
    if (aboutusRef.current) {
      aboutusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTocontactus = () => {
    if (contactusRef.current) {
      contactusRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
              <button className="aboutus-btn-main-page-dropment" onClick={scrollToaboutus}>About us</button>
              <Link to="/Plans" style={{color: 'black', textDecoration: 'none'}}>
                <button className="pricing-btn-main-page-dropment" disabled>Pricing<FaLock/></button>
                </Link>
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                <button className="login-btn-dropment-main-page">Login</button>
                </Link>
                <Link to="/signin" style={{color: 'black', textDecoration: 'none'}}>
                <button className="signinbtn-dropment-main-page">Sign up</button>
                </Link>
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                <button className="strtffreebtn">Start for free</button>
                </Link>
              </div>
            </div>
            <div className="herosection-text-dropment-main">
                <div className="hero-section-text-dropment-main-1">
                  <h1>Build, Sell,<br/> Succeed!<br/> The Easy Way</h1>
                </div>
                <div className="hero-section-get-started-button-main-page-dropment">
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                  <button>Start For Free</button>
                  </Link>
                </div>
              </div>
          </header>
        </div>
        <div className="dropment-main-blog-page-section1">
        <h1 style={{color: 'black'}}>All-in-one Platform<br/>To Sell Online</h1>
        </div>
        <div className="dropment-main-blog-page-section2">
          <section className="dropment-main-blog-page-section2-section1">
            <h3 style={{color: 'black'}}>Store Analytics</h3>
            <p>We provide you full report on how your online store is doing</p>
          </section>
          <section className="dropment-main-blog-page-section2-section2">
            <h3 style={{color: 'black'}}>Customer Data</h3>
            <p>We grant you full access to your customer data so you can improve your marketing efforts.</p>
          </section>
          <section className="dropment-main-blog-page-section2-section3">
            <h3 style={{color: 'black'}}>Social Features</h3>
            <p>You can collaborate with others and embark
               on a new business venture together using 
               our social features such as Blinkfeed and 
               linking with friends.</p>
          </section>
          <section className="dropment-main-blog-page-section2-section4">
            <h3 style={{color: 'black'}}>User-Friendly</h3>
            <p>Thanks to Dropment's user-friendly interface, setting up your online store takes just minutes.</p>
          </section>
        </div>
        <div className="dropment-main-blog-page-section5" ref={aboutusRef}>
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
            <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
            <button class="get-started-button">Get started For Free</button>
            </Link>
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
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                <button>Get Started For Free</button>
                </Link>
          </section>
          <section className="dropment-main-blog-page-section4-img">
            <img src={sales}/>
          </section>
        </div>
        <div className="dropment-main-blog-page-section6">
          <section className="dropment-main-blog-page-section6-img">
            <img src={orders}/>
          </section>
          <section className="dropment-main-blog-page-section6-txt">
           <h2>Effortlessly Manage Your Orders</h2>
           <p>Simplify order handling effortlessly using our intuitive tools, 
            ensuring streamlined and efficient management for your convenience</p>
            <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
            <button>Get Started For Free</button>
            </Link>
          </section>
        </div>
        <div className="dropment-main-blog-page-section7">
          <div className="dropment-main-blog-page-section7-heading">
            <h1 style={{color: 'black'}}>We Provide</h1>
          </div>
          <div className="dropment-main-blog-page-section7-dots">
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Simplicity</h2>
              <p>Our platform equips you with the 
                finest tools to efficiently manage
                 and expand your business.</p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Best Pricing</h2>
              <p>We offer the best pricing to help
                 elevate your business to new heights.</p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>User-Friendly Interface</h2>
              <p>We offer the most user-friendly 
                interface for setting up and managing
                 your store.</p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Collaborative Features</h2>
              <p>Collaborate with others and embark on new
                 business ventures together, with our collab feature</p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Customizable Templates</h2>
              <p>You have the option to create a personalized 
                shop or select from our range of templates</p>
            </section>
        
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Engagement Tools</h2>
              <p>
              We offer a variety of engaging
               tools like Blinkfeed, Link, Chat,
                and Follow to help you stay connected
                 with customers and friends.
              </p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Comprehensive Analytics</h2>
              <p>
              Provides in-depth shop data and analytics, 
              empowering users with valuable insights into
               their business performance, sales trends,
                and customer behavior.
              </p>
            </section>
            <section className="dropment-main-blog-page-section7-dot">
              <h2>Performance Optimization</h2>
              <p>
              Helps users improve their product offerings 
              and services based on analytics, aiming for
               continuous improvement and customer satisfaction.
              </p>
            </section>
          </div>
        </div>
        <div className="dropment-main-blog-page-section8" ref={contactusRef}>
          <div className="heading-main-dropment-blog-page-section8">
            <h2 style={{color: 'black'}}>FAQs</h2>
          </div>
          <div className="dropment-main-blog-page-section8-q">
            <h2 style={{color: 'black'}} onClick={toggleQ1}>How Do I Setup My Store?</h2>
            {q1 && <p onClick={toggleQ1}>Seting up your shop on 
              dropment is very simple first 
              you click on the add shop button 
              on the navigation menu then you 
              will be redirected to a page there
               you can build a custom shop or choose
                from our templates.</p>}
          </div>
          <div className="dropment-main-blog-page-section8-q">
            <h2 style={{color: 'black'}} onClick={toggleQ2}>How Do I Add Products?</h2>
            {q2 && <p onClick={toggleQ2}>Adding products is a straightforward process.
               First, navigate to your shop where you'd like to add
                products. Within the admin panel, locate the "Add 
                Products" button. Clicking this will redirect you 
                to a form page where you'll need to input specific
                details. The form requires 5 images, a title, quantity,
                and a link to your chosen payment gateway (as we don't
                offer an integrated payment gateway, you have the
                flexibility to select from various options available 
                for collecting payments from your customers). For a 
               guide on adding a payment gateway, you can watch this <a href="https://youtu.be/vdKINdsmC_Y?si=pKb2u8v8DHOccHx_">video</a>.
                      Additionally, you'll need to set pricing for your product in 
                      different currencies (USD is mandatory; if no pricing is
                       entered in any other currency, USD pricing will be displayed).
                        Finally, click on "Add Product," and voila! Congratulations
                        , your product has been successfully added.</p>}
          </div>
          <div className="dropment-main-blog-page-section8-q">
            <h2 style={{color: 'black'}} onClick={toggleQ3}>Do I Need Coding To Setup My Online Shop?</h2>
            {q3 && <p onClick={toggleQ3}>No, you don't require any coding skills to setup your online shop.</p>}
          </div>
          <div className="dropment-main-blog-page-section8-q">
            <h2 style={{color: 'black'}} onClick={toggleQ4}>Is Dropment free?</h2>
            {q4 && <p onClick={toggleQ4}>Yes, there is a free plan available, but you will be restricted to certain features</p>}
          </div>
          <div className="dropment-main-blog-page-section8-q">
            <h2 style={{color: 'black'}} onClick={toggleQ5}>Is Dropment a website builder?</h2>
            {q5 && <p onClick={toggleQ5}>Dropment isn't just a website builder; it's an
               ecosystem of online shops. Here, people come together 
               to create shops, observe others' activities via profiles,
                collaborate on shop development, and draw inspiration from 
                different shops for their next business ventures. Overall,
                 Droplement serves as an ecosystem for enthusiastic entrepreneurs,
                  fostering collaboration and creativity</p>}
          </div>
        </div>
        <div className="dropment-main-blog-page-section9">
          <h1 style={{color: 'black'}}>Start Your Success Journey Now<br/> With Droment!</h1>
          <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
          <button>Get Started for free</button>
          </Link>
        </div>
        <div className="dropment-main-blog-page-footer">
         <footer>
              <section className="dropment-main-blog-page-footer-links-section">
                <h2 style={{color: 'black'}}>Links</h2>
                <p onClick={scrollToaboutus}>About us</p>
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                <p>Login</p>
                </Link>
                <Link to="/signin" style={{color: 'black', textDecoration: 'none'}}>
                <p>Sign up</p>
                </Link>
                <Link to="/Plans" style={{color: 'black', textDecoration: 'none'}}>
                <p>Pricing</p>
                </Link>
                <Link to="/login" style={{color: 'black', textDecoration: 'none'}}>
                <p>Get started</p>
                </Link>
              </section>
              <section className="dropment-main-blog-page-footer-follow-section">
                <h2 style={{color: 'black'}}>Social media</h2>
                <a href="https://www.instagram.com/dropment.online/">
                <img src={instagram}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100087377832094">
                <img src={facebook}/>
                </a>
                <a href="https://twitter.com/SyedZain_saz">
                <img src={x}/>
                </a>
              </section>
              <section className="dropment-main-blog-page-footer-resources-section">
                <h2 style={{color: 'black'}}>Resources</h2>
                <p onClick={scrollTocontactus}>FAQs</p>
                <Link to='/blog' style={{textDecoration: 'none', color: 'black'}}>
                <p>Blog</p>
                </Link>
              </section>
              <section className="dropment-main-blog-page-footer-contact-section">
                <h2 style={{color: 'black'}}>contact</h2>
                <p>Email: dropment.saz@gmail.com</p>
              </section>
         </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
