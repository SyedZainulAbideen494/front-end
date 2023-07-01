import React, { Fragment, useState } from "react";
import Profileuniqueid from "./profileuniqueid";

const Profileuniqueidlist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.uniqueid.map((user) => (
            <Profileuniqueid unique_id={user.unique_id} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Profileuniqueidlist;
