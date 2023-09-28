import React,{Fragment, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import dropment from '../header/images/Dropment.png'
import './mainpage.css'
import AllTemplate1app from "./template1/template1app";
import Users from "../user/userapp";
import ChatMessageapp from "../chat/chat";

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
  if (auth === false) {
    nav("/login");
  }
  

    return<Fragment>
    <div className="maindivefordropmentmainpage">
        <div className="dropmentmainheader">
            <header>
                <div className="dropmentlogomainpage">
                    <img src={dropment}/>
                </div>
                <div className="dropmentmainbtns">
                  <Link to='/profile'>
                    <button>My profile</button>
                    </Link>
                    <Link to='/orders'>
                    <button>My orders</button>
                    </Link>
                    <Link to='/search'>
                    <button>Search</button>
                    </Link>
              {auth ? (
                  <button onClick={handleLogout}>Logout</button>
              ) : (
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
              )}
                </div>
            </header>
        </div>
        <div className="rightsectionmainpagedropment">
        <ChatMessageapp/>
        </div>
        <div className="section1inmainpage">
          <AllTemplate1app/>
          
          <Users/>
          
        </div>
    </div>
</Fragment>
}

export default Mainpage