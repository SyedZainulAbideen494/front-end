import React, { Fragment, useState } from "react";
import profilepic from "../header/images/download.png";
import "./user.css";

const SearchProfile = (props) => {
  const Ifelseimg = () => {
    if (props.image === null) {
      return <Profilepica />;
    } else {
      return <Profilepicb />;
    }
  };
  const Profilepica = () => {
    return <img src={profilepic} />;
  };
  const Profilepicb = () => {
    return <img src={props.image} />;
  };
  return (
    <Fragment>
      <div className="userprofile">
        <li>
          <div className="profileinsearch">
            <div className="profilepic">
              <img src={profilepic} />
            </div>
            <div className="profileuniqueid">
              <h3>{props.unique_id}</h3>
            </div>
            <div className="profiletxt">
              <h2>{props.first_name}</h2>
            </div>
            <div className="profilesubtxt">
              <h2>{props.last_name}</h2>
            </div>
          </div>
        </li>
      </div>
    </Fragment>
  );
};

export default SearchProfile;
