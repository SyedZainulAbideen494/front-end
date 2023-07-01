import React, { Fragment, useState } from "react";
import saz from "../../home/header/images/saz_logo.jpg";
import "./shopsowner.css";
import "./shopimg.css";

const Shopsinprofile = (props) => {
  return (
    <Fragment>
      <div className="shopsinmyprofile">
        <div className="SHOPIMGINMYPROFILE">
          <img src={saz} />
        </div>
        <div className="shopnameinmyprofile">{props.shop_name}</div>
      </div>
    </Fragment>
  );
};

export default Shopsinprofile;
