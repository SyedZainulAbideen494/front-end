import React, { Fragment, useState } from "react";
import "./profilename.css";

const Profilename = (props) => {
  return (
    <Fragment>
      <div className="profilename">
        <span className="firtsname">
          <h2>{props.first_name}</h2>
        </span>
        <span className="lastname">
          <h2>{props.last_name}</h2>
        </span>
      </div>
    </Fragment>
  );
};

export default Profilename;
