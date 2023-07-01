import React, { Fragment, useState } from "react";
import "./items.css";
import green from "../header/images/301-3011315_icon-check-green-tick-transparent-background.png";
import { Link } from "react-router-dom";
const Placeorder = (props) => {
  return (
    <Fragment>
      <div className="ordsuccess">
        <div className="ord1">
          <h1>
            Your order has been placed
            <br />
            Successfully!
          </h1>
          <div className="greentick">
            <img src={green} />
          </div>
        </div>
        <div className="ord2">
          <h3>
            The seller will get in contact
            <br />
            with you soon.
          </h3>
        </div>
        <div className="ord3">
          <h2>
            Thank you for shoping with
            <br />
            <span className="dropment">
              <h1>Dropment</h1>
            </span>
          </h2>
        </div>
        <div className="confbtn">
          <Link to="/">
            <button>Ok</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Placeorder;
