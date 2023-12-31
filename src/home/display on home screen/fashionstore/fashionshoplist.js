import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import FashionShopsinprofile from "./fashionshopinprofile";
import FashionShopsonhome from "./fashionshopinprofile";

const FashionShopslistonhome = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (
            <Link
              to={`/mystore/fashion/${item.shop_id}/${item.shop_name}/${item.shop_owner}/${item.shop_about}/${item.shop_tagline}/${item.shop_abouthead}/${item.shop_block2}/${item.shop_blockhead2}/${item.shop_blockhead3}/${item.shop_block3}/${item.user_id}`}
            >
              <FashionShopsonhome
                shop_id={item.shop_id}
                shop_name={item.shop_name}
                shop_owner={item.shop_owner}
                shop_about={item.shop_about}
                shop_tagline={item.shop_tagline}
                shop_abouthead={item.shop_abouthead}
                shop_block2={item.shop_block2}
                shop_blockhead2={item.shop_blockhead2}
                shop_blockhead3={item.shop_blockhead3}
                shop_block3={item.shop_block3}
                user_id={item.user_id}
                images={item.images}
                temp2={item.temp2}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default FashionShopslistonhome;
