import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Shopapp from "../shopsowner/shopsapp";
import Template3app from "../template3/template3app";
import FashionShopapp from "../fashionstore/fashionshopapp.js";
import './prodsstorenav.css'


const Displayshoponhome = () => {
  return (
    <Fragment>
      <div className="shops">
        <span>
          <Shopapp />
        </span>
        <span>
          <Template3app />
        </span>
        <span>
          <FashionShopapp />
        </span>
      </div>
    </Fragment>
  );
}

export default Displayshoponhome