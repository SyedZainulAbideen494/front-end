import React, { Fragment, useState } from "react";

const FashionShopsinprofile = (props) => {
  if (props.temp2 === null) {
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

export default FashionShopsinprofile;
