import React, { Fragment, useState } from "react";
import saz from "../../home/header/images/saz_logo.jpg";
import "./shopsowner.css";
import "./shopimg.css";
import dropment from '../../home/header/images/dropmentlogo.jpg'

const Shopsinprofile = (props) => {
  if (props.shop_prods === null) {
    return;
  } else {
    return (
      <Fragment>
        <div className="shopsinmyprofile">
          <div className="SHOPIMGINMYPROFILE">
            <img src={dropment} />
          </div>
          <div className="shopnameinmyprofile">{props.shop_name}</div>
        </div>
      </Fragment>
    );
  }
 
};

export default Shopsinprofile;
