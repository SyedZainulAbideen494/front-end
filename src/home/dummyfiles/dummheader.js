import React, { useState, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import Mycartbtn from "../header/header/mycartbtn";
import Myordersbtn from "../header/header/myordersbtn";
import Profilebtn from "../header/header/profilebtn";

const Header = (props) => {
  return (
    <Fragment>
      <div className="header-home-pc">
        <header>
          <div className="app-dsp">
            <h1>Dropment</h1>
          </div>
          <div className="header-btn">
            <span className="mycart">
              <Mycartbtn onClick={props.onShowcart} />
            </span>
            <span className="myorders">
              <Myordersbtn onClick={props.onShowOrders} />
            </span>
            <span className="profilebtn">
              <Link to="/mystore">
                <button>
                  <h2>My Store</h2>
                </button>
              </Link>
            </span>
            <span className="dropshipbtn">
              <Link to="/Dropshipping">
                <button>
                  <h2>Dropshipping</h2>
                </button>
              </Link>
            </span>
            <span>
              <Link to="/profile">
                <Profilebtn />
              </Link>
            </span>
            <span>
              <Link to="/search">
                <button>
                  <h2>Search</h2>
                </button>
              </Link>
            </span>
          </div>
        </header>
      </div>
    </Fragment>
  );
};
export default Header;
