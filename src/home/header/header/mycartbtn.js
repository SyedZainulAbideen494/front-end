import React, { Fragment, useContext, useState } from "react";
import { reduce } from "react";
import "./header.css";
import Header from "./header";
import Cartcontext from "../cart/cartcontext";
import Mycart from "../cart/mycart";
import Button from "../../UI/button";
import { Router, Link } from "react-router-dom";
const Mycartbtn = (props) => {
  const cartctx = useContext(Cartcontext);
  const numberofcartitems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <div className="cart-btn">
        <button onClick={props.onClick}>
          <span>My Cart</span>
          <span className="cartitemamt"> {numberofcartitems} </span>
        </button>
      </div>
    </Fragment>
  );
};

export default Mycartbtn;
