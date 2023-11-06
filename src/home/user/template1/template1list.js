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
              temp={item.temp}
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
