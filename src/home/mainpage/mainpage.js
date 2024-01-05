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
import back from '../header/images/icons8-back-24.png'
import addshop from '../header/images/icons8-add-24.png'
import { useMediaQuery } from 'react-responsive';
import Template1inmain from "./template1/template1inprofile";


const Mainpage = () => {
  const [auth, setAuth] = useState(false);
  const nav = useNavigate();
  const [showNotification, setShowNotification] = useState(false); // State for showing/hiding notification


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

  const toggleNotification = () => {
    setShowNotification(!showNotification); // Toggle notification display
  }


    return<Fragment>
 <div className="sidebar">
      <img src={dropment}/>
      <Link to='/overview' style={{textDecoration: 'none'}}>
      <p>Overview</p>
      </Link>
      <Link to='/profile' style={{textDecoration: 'none'}}>
      <p>Profile</p>
      </Link>
      <Link to='/Addshoppage1' style={{textDecoration: 'none'}}>
      <p>Add Shop +</p>
      </Link>
      <Link to='/search' style={{textDecoration: 'none'}}>
      <p>Search</p>
      </Link>
      <p onClick={toggleNotification}>Notifications</p>
      {auth ? (
        <button onClick={handleLogout} className="logout-btn-mainpage">
          Logout
        </button>
      ) : (
        <Link to="/login" style={{textDecoration: 'none'}}>
          <button className="login-btn-mainpage">Login</button>
        </Link>
      )}
    </div>
    <div className="main-section-main-page">
      <AllTemplate1app/>
    </div>
    <div className={`notification-popup ${showNotification ? 'show' : ''}`}>
        <NotificationComponent/>
      </div>
  </Fragment>
}

export default Mainpage