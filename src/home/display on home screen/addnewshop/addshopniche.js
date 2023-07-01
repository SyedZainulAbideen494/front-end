import React, { Fragment, useState } from "react";
import "./addshop.css";
import { Link } from "react-router-dom";

const Addshopniche = () => {
  return (
    <Fragment>
      <div className="nichehead">
        <header>
          <div className="nicheheaderbtns">
            <span className="nicheheaderbtn">
              <button>Back</button>
            </span>
            <span className="nicheheaderbtn">
              <button>Home</button>
            </span>
            <span className="nicheheaderbtn">
              <button>Plans</button>
            </span>
          </div>
        </header>
      </div>
      <div className="niches">
        <div className="txt2121">
          <h2>PLEASE SELECT A TEMPLATE</h2>
        </div>
        <span className="temp">
          <Link to="/Defaultstore">
            <button>Default(free)</button>
          </Link>
          <br />
          <div className="temp">
            <span>
              <button>Dropment template 1 (comming soon)</button>
            </span>
            <span className="previewbtn">
              <Link to="temp1preview">
                <button>Previw</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <button>Dropment template 3(comming soon)</button>
            </span>
            <span className="previewbtn">
              <Link to="/prevewtemp3">
                <button>Previw</button>
              </Link>
            </span>
          </div>
          <br />
        </span>
      </div>
    </Fragment>
  );
};

export default Addshopniche;
