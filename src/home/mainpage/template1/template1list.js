import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Template1inmain from "./template1inprofile";

const Template1mainlist = (props) => {
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
      <div className="shopmodelul">
        <ul>
          {props.shops.map((item) => (
            
              <Template1inmain
                shop_id={item.shop_id}
                shop_name={item.shop_name}
                temp1={item.temp1}
                temp2={item.temp2}
                temp3={item.temp3}
                temp4={item.temp4}
                temp5={item.temp5}
                temp6={item.temp6}
                temp7={item.temp7}
                temp8={item.temp8}
                logo={item.logo}
                shop_owner={item.shop_owner}
                user_id={item.user_id}
              />

          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Template1mainlist;