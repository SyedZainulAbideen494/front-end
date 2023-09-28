import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Template3inprofile from "./template1inprofile";
import Template5inprofile from "./template1inprofile";
import Template1inuser from "./template1inprofile";

const Template1userlist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (

              <Template1inuser
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

export default Template1userlist;
