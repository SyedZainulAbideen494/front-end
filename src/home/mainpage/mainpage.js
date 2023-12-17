import React,{Fragment, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import dropment from '../header/images/drop2_logo.png'
import './mainpage.css'
import AllTemplate1app from "./template1/template1app";
import Users from "../user/userapp";
import ChatMessageapp from "../chat/chat";
import Stories from "../stories/stories";
import Storiesapp from "../stories/storiesdisplay";
import NotificationComponent from "../notifications/notifications";
import userPic from '../header/images/icons8-male-user-30 (1).png'
import notification from '../header/images/icons8-notifications-78.png'
import message from '../header/images/icons8-messages-48.png'
import search from '../header/images/icons8-search-50.png'
import order from '../header/images/icons8-logistics-32.png'
import profile from '../header/images/icons8-male-user-24.png'
import addshop from '../header/images/icons8-add-24.png'
import { useMediaQuery } from 'react-responsive';
const Mainpage = () => {
  const [auth, setAuth] = useState(false);
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false); // Update auth state after logout
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
const MobileView = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your mobile breakpoint

  const [showUsers, setShowUsers] = useState(true);

  const handleUsersClick = () => {
    setShowUsers(true);
  };

  const handleShopsClick = () => {
    setShowUsers(false);
  };

  if (!isMobile) {
    return null; // Don't render anything if it's not a mobile device
  }

  return (
    <div className="middle-content">
      <div className="button-container">
        <button className={showUsers ? 'active' : ''} onClick={handleUsersClick}>
          Users
        </button>
        <button className={!showUsers ? 'active' : ''} onClick={handleShopsClick}>
          Shops
        </button>
      </div>

      {showUsers ? <Users /> : <AllTemplate1app />}
    </div>
  );
};
  const Pcview = () => {
    const isMobile = useMediaQuery({ minWidth: 768 }); // Define your mobile breakpoint
  
    const [showUsers, setShowUsers] = useState(true);
  
    const handleUsersClick = () => {
      setShowUsers(true);
    };
  
    const handleShopsClick = () => {
      setShowUsers(false);
    };
  
    if (!isMobile) {
      return null; // Don't render anything if it's not a mobile device
    }
  
    return (
      <div className="middle-content">
        <AllTemplate1app />
      </div>
    );
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    return<Fragment>
    
     <div className="maindivefordropmentmainpage">
     <div className="dropmentmainheader">
      <header>
        <div className="mobile-menu-icon">
          <div className="line" onClick={toggleMenu}></div>
          <div className="line" onClick={toggleMenu}></div>
          <div className="line" onClick={toggleMenu}></div>
          <div className="mobile-btns-home-dropment">
            <button onClick={toggleNotifications} className="mobile-btns-home-dropment-notri">Notifications</button>
            <Link to='/Addshoppage1'>
            <button className="add-shop-btn-mobile-btn-home-page-dropment">Add Shop +</button>
            </Link>
          </div>
        </div>
        <div className="all-screen-header-menu">
          <Link to='/profile' style={{textDecoration: 'none'}}>
          <button>My Profile <img src={profile}/></button>
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
          <button>Search <img src={search}/></button>
          </Link>
          <button onClick={toggleNotifications}>Notification <img src={notification}/></button>
          <Link to='/Addshoppage1' style={{textDecoration: 'none'}}>
          <button>Add Shop +</button>
          </Link>
        </div>
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button onClick={toggleMenu}>close</button>
          <Link to="/profile" style={{textDecoration: 'none'}}>
            <button>My profile<img src={profile} alt="Profile" /></button>
          </Link>
          <Link to="/orders" style={{textDecoration: 'none'}}>
            <button>Orders</button>
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
            <button>Search <img src={search}/></button>
          </Link>
          {auth ? (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-btn-profilesec">Login</button>
        </Link>
      )}
        </div>
      </header>
    </div>
      {showNotifications && (
        <NotificationComponent closeNotifications={toggleNotifications} />
      )}
      <Link to="/add/BlinkFeed">
        <span className="blinkfeed-btn-main-pg">
            <button>Add BlinkFeed</button>
            </span>
            </Link>
      <Storiesapp/>
      <div className="section1inmainpage">
        <div className="content-container">
          <div className="left-content">
          <p className="recomprofilemainpagetxtp">Conversations</p>
            <ChatMessageapp />
          </div>
          <div className="middle-content">
            <AllTemplate1app/>
          </div>
          <div className="right-content">
            <p className="recomprofilemainpagetxtp">Featured profiles</p>
            <Users />
          </div>
        </div>
      </div>
    </div>

  </Fragment>
}

export default Mainpage