import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Template3inprofile from "./template4inprofile";
import Template6inprofile from "./template4inprofile";

const Template6list = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (
            <Link
              to={`/mystore6/${item.shop_id}/${item.shop_name}`}
            >
              <Template6inprofile
                shop_id={item.shop_id}
                shop_name={item.shop_name}
                shop_owner={item.shop_owner}
                shop_tagline={item.shop_tagline}
                shop_block2={item.shop_block2}
                shop_blockhead2={item.shop_blockhead2}
                shop_blockhead3={item.shop_blockhead3}
                shop_block3={item.shop_block3}
                user_id={item.user_id}
                shop_blockhead1={item.shop_blockhead1}
                shop_block1={item.shop_block1}
                shop_keyhead1={item.shop_keyhead1}
                shop_key1={item.shop_key1}
                shop_keyhead2={item.shop_keyhead2}
                shop_key2={item.shop_key2}
                shop_keyhead3={item.shop_keyhead3}
                shop_key3={item.shop_key3}
                shop_email={item.shop_email}
                shop_phone={item.shop_phone}
                insta={item.insta}
                salestext={item.salestext}
                temp6={item.temp6}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Template6list;
