import React, { Fragment, useState } from "react";
import Profilepic from "./profilepic";

const Profilepiclist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.image.map((user) => (
            <Profilepic image={user.image} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Profilepiclist;
