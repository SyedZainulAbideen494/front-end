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

const Mainpage = () => {
    const [auth, setauth] = useState(false);
    const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);
  useEffect(() => {
  if (auth === false) {
    nav("/login");
  }
})
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

    return<Fragment>
    
     <div className="maindivefordropmentmainpage">
      <div className="dropmentmainheader">
        <header>
          <div className="dropmentlogomainpage">
            <img src={dropment} alt="Dropment Logo" />
          </div>
          <div className="dropmentmainbtns">
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <Link to="/orders">
              <button>My Orders</button>
            </Link>
            <Link to="/search">
              <button>Search</button>
            </Link>
            <button onClick={toggleNotifications}>
  Notifications
</button>
<Link to="/Addshoppage1" style={{textDecoration: 'none'}}>
<p className="add-shop-btn-home-header">Add Shop +</p>
</Link>
<button className="mboile-btn-display-home-headre">Messages</button>
            {auth ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
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
            <button>Add a BlinkFeed</button>
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
            <AllTemplate1app />
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