import React, { Fragment, useState } from "react";
import Button from "../../UI/button";
import Button2 from "../../UI/button2";
import { Link } from "react-router-dom";
import "./aboutus.css";

const Aboutus = (props) => {
  return (
    <Fragment>
      <div className="aboutusheader">
        <header>
          <div className="aboutusheaderbtn">
            <span className="headtxt">
              <h1>About us</h1>
            </span>
            <Link to="/mystore">
              <span className="backbtn">
                <Button>Back</Button>
              </span>
            </Link>
            <Link to="/">
              <span className="homebtn">
                <Button>Home</Button>
              </span>
            </Link>
            <span className="Edit">
              <Button>Edit</Button>
            </span>
          </div>
        </header>
        <div className="shopname">
          <h2>Store name:</h2>
          <h3>{props.shop_name}</h3>
        </div>
        <div className="shopowner">
          <h2>Name of the owner</h2>
          <h3>{props.shop_owner}</h3>
        </div>
        <div className="aboutstore">
          <h2>About the store</h2>
          <p>{props.shop_about}</p>
        </div>
        <div className="aboutstoreprods">
          <h2>What is sold here</h2>
          <p>{props.shop_products_about}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Aboutus;
