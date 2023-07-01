import React, { Fragment, useState } from "react";
import "./profileuniquename.css";

const Profileuniqueid = (props) => {
  return (
    <Fragment>
      <div className="unique_id">
        <h3>{props.unique_id}</h3>
      </div>
    </Fragment>
  );
};

export default Profileuniqueid;
