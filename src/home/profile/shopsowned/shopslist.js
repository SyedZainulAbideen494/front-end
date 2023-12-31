import React, { Fragment, useState } from "react";
import Shopsowned from "./shops";

const Shoplist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.shop.map((shopdata) => (
            <Shopsowned
              shop_name={shopdata.shop_name}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Shoplist;
