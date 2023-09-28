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
        <div className="templates">
          {/* Template 1 */}
          <div className="template">
            <Link to="/Add/temp1/form">
              <button className="button button-primary template-button">Dropment template 1</button>
            </Link>
            <span>
              <Link to="/temp1preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>

          {/* Template 2 */}
          <div className="template">
            <Link to="/Add/temp2/form">
              <button className="button button-primary template-button">Dropment template 2</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp2preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp3/form">
              <button className="button button-primary template-button">Dropment template 3</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp3preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp4/form">
              <button className="button button-primary template-button">Dropment template 4</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp4preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp5/form">
              <button className="button button-primary template-button">Dropment template 5</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp5preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp6/form">
              <button className="button button-primary template-button">Dropment template 6</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp6preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp7/form">
              <button className="button button-primary template-button">Dropment template 7</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp7preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp8/form">
              <button className="button button-primary template-button">Dropment template 8</button>
            </Link>
            <span className="preview-span">
              <Link to="/temp8preview" className="preview-link">
                <button className="button button-secondary preview-button">Preview</button>
              </Link>
            </span>
          </div>

          {/* Add more templates as needed */}
        </div>
      </div>
    </Fragment>
  );
};

export default Addshopniche;