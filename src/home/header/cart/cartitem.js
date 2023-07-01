import React, { Fragment, useState } from "react";
import "./cart.css";
import dummyitem from "../images/download.jpg";

const CartItem = (props) => {
  return (
    <Fragment>
      <div className="Cartitem">
        <div className="inlinedivforcrt">
          <div className="inlinetitleimg">
            <span className="cartitemimg">
              <img src={dummyitem} />
            </span>
            <span className="cartitemtitle">
              <h2>{props.title}</h2>
            </span>
          </div>
          <div className="crtinlineele">
            <div className="cartitemprice">
              <h3> ${props.price} </h3>
            </div>
            <div className="amountaddordecrnum">
              <span className="crtbtnremover">
                <button onClick={props.onRemove}>-</button>
              </span>
              <span className="cartitemamount">
                <h4>x{props.amount}</h4>
              </span>
              <span className="crtbtnadd">
                <button onClick={props.onAdd}>+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
