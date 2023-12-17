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
    const [auth, setauth] = useState(false);
    const nav = useNavigate();
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
    return<Fragment>
    
     <div className="maindivefordropmentmainpage">
      <div className="dropmentmainheader">
        <header>
          <div className="dropmentmainbtns">
            <Link to="/profile">
              <button><img src={profile}/></button>
            </Link>
            <Link to="/orders">
              <button><img src={order}/></button>
            </Link>
            <Link to="/search">
              <button><img src={search}/></button>
            </Link>
            <button onClick={toggleNotifications}>
  <img src={notification}/>
</button>
<Link to="/Addshoppage1" style={{textDecoration: 'none'}}>
<button><img src={addshop}/></button>
</Link>

          </div>
          <div className="add-shop-btn-main-page-dropment">
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
            <MobileView/>
            <Pcview/>
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