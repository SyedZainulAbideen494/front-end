import React, { Fragment, useState } from "react";

const Template4inprofile = (props) => {
  return (
    <Fragment>
      <div className="shop">
        <div className="shopImg">
        </div>
        <div className="shopname">{props.shop_name}</div>
      </div>
    </Fragment>
  );
};

export default Template4inprofile;
