import React, { useState, useEffect, useReducer, useRef } from "react";
import { Fragment } from "react";
import "./header.css";
import Mycart from "../cart/mycart";
import Myordersbtn from "./myordersbtn";
import Mycartbtn from "./mycartbtn";
import Profilebtn from "./profilebtn";
import Sellerbtn from "./sellerbtn";
import Axios from "axios";
import Button from "../../UI/button";
import { Router, Link } from "react-router-dom";
import Cartprovider from "../cart/cartprovider";
import logo from '../images/Dropment.png'

const Mobileheader = (props) => {
  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    }
  }, []);

  return (
    <Fragment>
      <div className="largescreenheader">
        <header>
          <div className="headerinlineele">
          <span className="imgdropmentlgog">
              <img src={logo}/>
              </span>
            <Link to="/profile">
              <span className="largescreenheaderbtns">
                <button>My Profile</button>
              </span>
            </Link>
            <Link to="/orders">
              <span className="largescreenheaderbtns">
                <button>My Orders</button>
              </span>
            </Link>
            <span className="largescreenheaderbtns">
              <button>Search</button>
            </span>
            <span className="largescreenheaderauthbtns">
              {auth ? (
                <div className="logoutbtnlargescreen">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="loginbtnlargescreen">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Mobileheader;
