import React, { Fragment, useState } from "react"

const Template2inuser = (props) => {
  if (props.temp2 === null){
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
export default Template2inuser;
