import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Template3inprofile from "./template1inprofile";
import Template5inprofile from "./template1inprofile";
import Template1inprofile from "./template1inprofile";

const Template1list = (props) => {

  const Linkno = (item) => {
    if (item.temp1 !== null) {
      return "/mystore1";
    } else if (item.temp2 !== null) {
      return "/mystore2";
    } else if (item.temp3 !== null) {
      return "/mystore3";
    } else if (item.temp4 !== null) {
      return "/mystore4";
    } else if (item.temp5 !== null) {
      return "/mystore5";
    } else if (item.temp6 !== null) {
      return "/mystore6";
    } else if (item.temp7 !== null) {
      return "/mystore7";
    } 
    else if (item.temp8 !== null) {
      return "/mystore8";
    } 
  };

  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (
              <Template1inprofile
  shop_id={item.shop_id}
  shop_name={item.shop_name}
  temp={item.temp}
  logo={item.logo}
  shop_owner={item.shop_owner}
  user_id={item.user_id}
  build={item.build}
              />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Template1list;
