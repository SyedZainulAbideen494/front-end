import "./iepd.css";
import React, { Fragment, useState } from "react";
import Productdetailsimgapp from "../productdetialsimg/productdeatilsimgapp";
import Productdetailstitleapp from "../productdeatilstitle/productdeatilstitleapp";
import Productdetailsimg from "../productdetialsimg/productdeatilsimg";
import Productdetailspriceapp from "../productpricedetails.js/productdetailspriceapp";

const Prodsinele = (props) => {
  return (
    <Fragment>
      <div className="inlinelepdtp">
        <div>
          <span>
            <Productdetailsimg />
          </span>
          <span>
            <Productdetailstitleapp />
          </span>
        </div>
        <br />
        <div>
          <Productdetailspriceapp />
        </div>
      </div>
    </Fragment>
  );
};

export default Prodsinele;
