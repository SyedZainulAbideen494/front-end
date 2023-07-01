import "./infoblock.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import NewItemForm from "./newblockform";
const Infoblock = (props) => {
  return (
    <Fragment>
      <div className="infoblock">
        <div className="heading">
          <h2>{props.Heading}</h2>
        </div>
        <div className="subtext">{props.Subtext}</div>
        <div className="aboutus--btn__btn">
          <Link to="aboutus">
            <button>About us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Infoblock;
