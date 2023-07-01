import React, { Fragment, useState } from "react";

const Productdetailsprice = (props) => {
  return (
    <Fragment>
      <div className="product">
        <h1>{props.price}</h1>
      </div>
    </Fragment>
  );
};

export default Productdetailsprice;
