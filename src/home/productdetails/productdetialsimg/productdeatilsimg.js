import React, { Fragment, useState } from "react";
import dummyimg from "../../header/images/download.jpg";
import "./productdeatilsimg.css";

const Productdetailsimg = (props) => {
  return (
    <Fragment>
      <div className="s">
        <img src={dummyimg} />
      </div>
    </Fragment>
  );
};

export default Productdetailsimg;
