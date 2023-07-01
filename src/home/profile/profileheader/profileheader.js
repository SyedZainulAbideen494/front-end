import React, { Fragment, useState, useEffect } from "react";
import Editbtn from "./profilebtn/editbtn";
import Backbtnprofile from "./profilebtn/backbtn";
import "./profileheader.css";
import { Link } from "react-router-dom";
import Profilepicapp from "../profilepic/profilepicapp";

const Profileheader = (props) => {
  const [islogin, setislogin] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const logouthandler = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    setislogin(!!localStorage.getItem("token"));
  }, []);

  return (
    <Fragment>
      <div className="profileheadermobile">
        <header>
          <div className="profilebtnsmoblie">
            <span className="backbtnmobileporfile">
              <Link to="/">
                <button>Back</button>
              </Link>
            </span>
            <span className="backbtnmobileporfile">
              <button>Edit</button>
            </span>
            <span className="backbtnmobileporfile">
              <Link to="/Plans">
                <button>My plan</button>
              </Link>
            </span>
            <span className="authbtnsprofile">
              {islogin ? (
                <span className="loginoutbtnmobile">
                  <button onClick={logouthandler}>Logout</button>
                </span>
              ) : (
                <span className="logoutbtnmyrprofile2mobile">
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </span>
              )}
            </span>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Profileheader;
