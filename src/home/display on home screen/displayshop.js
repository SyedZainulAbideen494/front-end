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
import Template5apponhome from "./template5/template5app";
import Template4apponhome from "./template4/template4app";
import Template3apponhome from "./template3/template3app";
import Shopapponhome from "./shopsowner/shopsapp";
import FashionShopapponhome from "./fashionstore/fashionshopapp.js";


const Displayshoponhome = () => {
  return (
    <Fragment>
      <div className="shops">
        <span>
         <Template5apponhome/>
        </span>
        <span>
          <Template4apponhome/>
        </span>
        <span>
          <Template3apponhome/>
        </span>
        <span>
          <Shopapponhome/>
        </span>
        <span>
          <FashionShopapponhome/>
        </span>
      </div>
    </Fragment>
  );
}

export default Displayshoponhome