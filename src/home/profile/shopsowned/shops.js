import React, { Fragment, useCallback } from "react";
import Shopownedheader from "./shopsownedheader";
import saz from "../../header/images/saz_logo.jpg";
import addshopicon from "../../header/images/addshop.png";
import "./shopsowned.css";
import { Link } from "react-router-dom";

const Shopsowned = (props) => {
  return (
    <Fragment>
      <Shopownedheader />
      <div className="shopsowned">
        <span className="shopowned">
          <Link to="/mystore">
            <img src={saz} />
          </Link>
        </span>
        <span className="addshop">
          <Link to="/Addshop">
            <img src={addshopicon} />
          </Link>
        </span>
      </div>
    </Fragment>
  );
};

export default Shopsowned;
