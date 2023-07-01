import React, { Fragment, useState } from "react";
import Profilename from "./profilename";

const Profilenamelist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.name.map((user) => (
            <Profilename
              first_name={user.first_name}
              last_name={user.last_name}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Profilenamelist;
