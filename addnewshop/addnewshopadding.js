import React, { Fragment, useState } from "react";
import add from "../../home/header/images/addshop.png";
import { Link } from "react-router-dom";
import "./addshop.css";
import "./addshopimg.css";

const Addshopimg = () => {
  return (
    <Fragment>
      <Link to="/Addshoppage1">
        <div className="imgaddshop">
          <img src={add} />

          <div>
            <h3>add new shop</h3>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Addshopimg;
