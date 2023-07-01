import React, { Fragment } from "react";
import Productdetailsimgap from "./productdetialsimg/productdeatilsimgapp";
import Productdetailstitleapp from "./productdeatilstitle/productdeatilstitleapp";
import Productdetailsimg from "./productdetialsimg/productdeatilsimg";
import Productdetailspriceapp from "./productpricedetails.js/productdetailspriceapp";
import Prodsinele from "./produsdetailsimginline/inlineleprodsdetails";

const Productdeatils = (props) => {
  return (
    <Fragment>
      <div>
        <Prodsinele />
      </div>
    </Fragment>
  );
};

export default Productdeatils;
