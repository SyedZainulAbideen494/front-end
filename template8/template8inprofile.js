import React, { Fragment, useState } from "react";
import saz from "../../home/header/images/saz_logo.jpg";

const Template4inprofile = (props) => {
  return (
    <Fragment>
      <div className="shop">
        <div className="shopImg">
          <img src={saz} />
        </div>
        <div className="shopname">{props.shop_name}</div>
      </div>
    </Fragment>
  );
};

export default Template4inprofile;
