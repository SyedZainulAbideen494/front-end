import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Userdisplay from "./userdisplay";
import "./Userdisplay.css";

const Userslist = (props) => {
  return (
    <Fragment>
      <div className="usermodelmainpage">
        <ul>
          {props.shops.map((item) => (
              <Userdisplay
                first_name={item.first_name}
                last_name={item.last_name}
                user_id={item.user_id}
              />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Userslist;
