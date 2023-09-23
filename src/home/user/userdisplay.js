import React, { Fragment, useState } from "react";
import './user.css'

const Userdisplay = (props) => {
    return (
      <Fragment>
        <div className="user">
          <div className="userImg">
          </div>
          <div className="shopname">{props.first_name}{props.last_name}</div>
        </div>
      </Fragment>
    );
};

export default Userdisplay;
