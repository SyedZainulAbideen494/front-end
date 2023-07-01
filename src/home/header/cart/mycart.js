import React, { Fragment, useContext, useState } from "react";
import "../header/header.css";
import Home from "../home";
import { Router, Link } from "react-router-dom";
import Cartcontext from "./cartcontext";
import CartItem from "./cartitem";
import "./cart.css";

const Mycart = (props) => {
  const cartctx = useContext(Cartcontext);

  const Totalamount = cartctx.totalamount;
  const Cartitemremovehandler = (id) => {
    cartctx.removeitem(id);
  };
  const cartitemaddhandler = (item) => {
    const cartitem = { ...item, amount: 1 };
    cartctx.additem(cartitem);
  };

  const cartitems = (
    <ul className="Cart-item-Holdler">
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={Cartitemremovehandler.bind(null, item.id)}
          onAdd={cartitemaddhandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Fragment>
      <div className="cart-menu">
        <div className="mycarttxt">
          <h2>My Cart</h2>
        </div>
        <div className="cartclosebtn">
          <button onClick={props.onHideCart}>Close</button>
        </div>
        <div className="cartitems">{cartitems}</div>
        <div className="carttotalpmount">
          <span className="crttotalpricetxt">
            <h2>Total Price:</h2>
          </span>
          <span className="crttotalpricenum">
            <h3>${Totalamount}</h3>
          </span>
          <span className="cartorderbtn">
            <Link to="/orderproduct">
              <button>Order</button>
            </Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Mycart;
