import React, { Fragment, useCallback } from "react";
import Shopownedheader from "./shopsownedheader";
import "./shopsowned.css";
import { Link } from "react-router-dom";

const Shopsowned = (props) => {
  return (
    <Fragment>
      <Shopownedheader />
      <div className="shopsowned">
        <span className="shopowned">
          <Link to="/mystore">
          </Link>
        </span>
        <span className="addshop">
          <Link to="/Addshop">
          </Link>
        </span>
      </div>
    </Fragment>
  );
};

export default Shopsowned;
