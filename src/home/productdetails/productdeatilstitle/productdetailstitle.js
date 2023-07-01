import React, { Fragment, useState } from "react";

const Productdetailstitle = (props) => {
  return (
    <Fragment>
      <div className="producttitle">
        <h2>{props.title}</h2>
      </div>
    </Fragment>
  );
};

export default Productdetailstitle;
