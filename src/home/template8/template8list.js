import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Template8inprofile from "./template8inprofile";

const Template8list = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (
            <Link
              to={`/mystore8/${item.shop_id}/${item.shop_name}`}
              style={{textDecoration: 'none', color: 'black'}}
            >
              <Template8inprofile
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
                temp8={item.temp8}
                insta={item.insta}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Template8list;
