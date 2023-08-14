import React, { Fragment, useState } from "react";
import "./shopsowner.css";
import "./shopimg.css";

const Shopsonhome = (props) => {
  if (props.temp1 === null) {
    return;
  } else {
    return (
      <Fragment>
        <div className="shop">
          <div className="shopImg">
          </div>
          <div className="shopname">{props.shop_name}</div>
        </div>
      </Fragment>
    );
  }
 
};

export default Shopsonhome
