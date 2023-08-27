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
          </div>
        </header>
      </div>
      <div className="niches">
        <div className="txt2121">
          <h1>PLEASE SELECT A TEMPLATE</h1>
        </div>
        <span className="temp">
          <Link to="/Add/shop/template1/form">
            <button>Dropment template 1 </button>
          </Link>
          <span>
            <Link to="/temp1preview">
              <button>Preview</button>
            </Link>
          </span>
          <br />
          <div className="temp">
            <span>
              <Link to="/Add/template2/form">
                <button>Dropment template 2</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/Preview/Template2">
                <button>Preview</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <Link to="/addtemplate3form">
                <button>Dropment template 3</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/preview/template3">
                <button>Preview</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <Link to="/Add/Tempate4/Form">
                <button>Dropment template 4</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/template4/preview">
                <button>Preview</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <Link to="/addShopTemp5">
                <button>Dropment template 5</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/temp5preview">
                <button>Preview</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <Link to="/Add/template6/form">
                <button>Dropment template 6</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/Template6/preview">
                <button>Preview</button>
              </Link>
            </span>
          </div>
          <div className="temp">
            <span>
              <Link to="/Add/template6/form">
                <button>Dropment template 7</button>
              </Link>
            </span>
            <span className="previewbtn">
              <Link to="/Template7/preview">
                <button>Preview</button>
              </Link>
            </span>
          </div>

          <br />
        </span>
        <h2></h2>
      </div>
    </Fragment>
  );
};

export default Addshopniche;
