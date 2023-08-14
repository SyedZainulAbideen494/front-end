import React, { Fragment, useState } from "react";


const Template3onhome= (props) => {
  if (props.temp3 === null) {
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

export default Template3onhome;
