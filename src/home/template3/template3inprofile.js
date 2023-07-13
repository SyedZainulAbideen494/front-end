import React, { Fragment, useState } from "react";
import saz from "../../home/header/images/saz_logo.jpg";
import dropment from '../../home/header/images/dropmentlogo.jpg'


const Template3inprofile = (props) => {
  if (props.shop_key1 === null) {
    return;
  } else {
    return (
      <Fragment>
        <div className="shop">
          <div className="shopImg">
            <img src={dropment} />
          </div>
          <div className="shopname">{props.shop_name}</div>
        </div>
      </Fragment>
    );
  }
  
};

export default Template3inprofile;
