import React, { Fragment, useState } from "react";
import profilepic from "../../../home/header/images/download.png";
import "./profilepic.css";

const Profilepic = (props) => {
  const Defaultpic = () => {
    <img src={profilepic} />;
  };

  const Profilepicentered = (props) => {
    <img src={props.image} />;
  };

  const Profilepics = () => {
    if (props.image === null) {
      <Defaultpic />;
    } else {
      <Profilepicentered />;
    }
  };

  return (
    <Fragment>
      <div className="prifilepic">
        <img src={profilepic} />
      </div>
    </Fragment>
  );
};

export default Profilepic;
