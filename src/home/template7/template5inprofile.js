import React, { Fragment, useState } from "react"

const Template5inprofile = (props) => {
  if (props.temp5 === null){
    return;
  }else{
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
}
export default Template5inprofile;
