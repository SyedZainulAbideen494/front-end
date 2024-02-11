import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dropment from '../header/images/drop2_logo.png'
import './mainpage.css'
import Axios from "axios";
import AllTemplate1app from "./template1/template1app";
import NotificationComponent from "../notifications/notifications";
import notification from '../header/images/icons8-notifications-78.png'
import order from '../header/images/icons8-logistics-32.png'
import profile from '../header/images/icons8-male-user-24.png'
import search from '../header/images/icons8-search-50.png'
import ChatMessageapp from "../chat/chat";
import Storiesapp from "../stories/storiesdisplay";
import Users from "../user/userapp";
import { PieController } from "chart.js";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      Axios.post('https://apifordropment.online/login/user/check', { token })
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          setMessage(error.response.data.message);
        });
    }
  }, [token]);

  const handleLogin = () => {
    // Logic to handle login
  };

  return (
    <div>
      <h1>HEllo</h1>
      {message && <p style={{color: 'white'}}>{message}</p>}
      {token ? null : <button onClick={handleLogin}>Login</button>}
    </div>
  );
};



const Mainpage = () => {
  const [auth, setAuth] = useState(false);
  const nav = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const toggleNotification = () => {
    setShowNotification(prevState => !prevState);
  };

  
const Shops = () => <AllTemplate1app/>;
const Messages = () => <ChatMessageapp/>;
const Blinkfeeds = () => <Storiesapp/>;
const User = () => <Users/>;
const [activeComponent, setActiveComponent] = useState(<Shops />);

const handleButtonClick = (component) => {
  setActiveComponent(component);
};
  return (
    <Fragment>
      <App/>
      <nav className="navbar-dropment-main-page">
        <img src={dropment} alt="Dropment" className="logo-dropment-main-page"/> 
        <nav className="big-screen-nav-bar-dropment-main-page">
          <Link to='/profile' style={{textDecoration: 'none'}}>
            <button>My Profile <img src={profile}/></button>
          </Link>
          <Link to='/orders' style={{textDecoration: 'none'}}>
            <button>My Orders <img src={order}/></button>
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
            <button>Search <img src={search}/></button>
          </Link>
          <button onClick={toggleNotification}>Notification <img src={notification}/></button>
          {auth ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" style={{textDecoration: 'none'}}>
              <button>Login</button>
            </Link>
          )}
        </nav>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to='/profile' style={{textDecoration: 'none'}}>
            <button>My Profile <img src={profile}/></button>
          </Link>
          <Link to='/orders' style={{textDecoration: 'none'}}>
            <button>My Orders <img src={order}/></button>
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
            <button>Search <img src={search}/></button>
          </Link>
          <button onClick={toggleNotification}>Notification <img src={notification}/></button>
          {auth ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" style={{textDecoration: 'none'}}>
              <button>Login</button>
            </Link>
          )}
        </div>
        <div className="hamburger-dropment-main-page" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <div className={`notification ${showNotification ? 'show' : 'hide'}`}>
        <NotificationComponent/>
      </div>
      <div className="App-main-page-dropment-home">
      <div className="buttons-container-main-page-dropment-home">
        <button onClick={() => handleButtonClick(<Shops />)} className={activeComponent.type === Shops ? 'active' : ''}>Shops</button>
        <button onClick={() => handleButtonClick(<Messages />)} className={activeComponent.type === Messages ? 'active' : ''}>Messages</button>
        <button onClick={() => handleButtonClick(<Blinkfeeds />)} className={activeComponent.type === Blinkfeeds ? 'active' : ''}>Blinkfeeds</button>
        <button onClick={() => handleButtonClick(<User />)} className={activeComponent.type === User ? 'active' : ''}>Users</button>
      </div>

      <div className="component-container-page-dropment-home">
        {activeComponent}
      </div>
      </div>
    </Fragment>
  );
};

export default Mainpage;