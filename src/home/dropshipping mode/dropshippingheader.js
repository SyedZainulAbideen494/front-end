import React, { Fragment, useState } from "react";
import "./dropshipping.css";
import Dropbtn from "./dropshipping ui/dropshippingbtns";

const Dropshippingheader = (props) => {
  return (
    <Fragment>
      <div className="dropshippingheader">
        <header>
          <div className="headbtndropshipping">
            <span className="headtxtdropshippingmode">
              <h2>Dropshipping</h2>
            </span>
            <span className="homebtn">
              <Dropbtn>Home</Dropbtn>
            </span>
            <span className="stats">
              <Dropbtn>Stats</Dropbtn>
            </span>
            <span className="products">
              <Dropbtn>Products</Dropbtn>
            </span>
            <span className="addnewprodus">
              <Dropbtn>New product</Dropbtn>
            </span>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Dropshippingheader;
