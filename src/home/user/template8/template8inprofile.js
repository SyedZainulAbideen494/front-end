import React, { Fragment, useState } from "react"

const Template8inuser = (props) => {
  if (props.temp8 === null){
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
export default Template8inuser;
