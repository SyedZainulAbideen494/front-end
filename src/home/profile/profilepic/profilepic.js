import React, { Fragment, useState } from "react";
import "./profilepic.css";
import pic from '../../header/images/profiledef.png'

const Profilepic = (props) => {
  const Defaultpic = () => {
    <img src={pic}/>
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
        <img src={pic} />
      </div>
    </Fragment>
  );
};

export default Profilepic;
