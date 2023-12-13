import React, { Fragment, useState } from "react";
import "./addshop.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const Addshopniche = () => {

  const addCustomShopHandler = () => {
    const token = localStorage.getItem('token');
    Axios.post(
      "https://apifordropment.online/add/custom/shop",
      null,  // Request body should be null or an empty object if there's no data to send
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => {
      window.location.href = `/profile`;
    })
    .catch((error) => {
      // Handle errors here
    });
  };
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
        <div className="templates">
        <div className="template">
          <Link to='/custom/shop/build/page1'>
              <button className="button-button-primary-template-button">Custom shop</button>
              </Link>
          </div>
          {/* Template 1 */}
          <div className="template">
            <Link to="/Add/temp1/form">
              <button className="button-button-primary-template-button">Dropment template 1</button><br/>
            </Link>
            <span>
              <Link to="/temp1preview" className="preview-link">
                <button className="button-button-secondary-preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp2/form">
              <button className="button-button-primary-template-button">Dropment template 2</button><br/>
            </Link>
            <span className="preview-span">
              <Link to="/temp2preview" className="preview-link">
                <button className="button-button-secondary-preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp3/form">
              <button className="button-button-primary-template-button">Dropment template 3</button><br/>
            </Link>
            <span className="preview-span">
              <Link to="/temp3preview" className="preview-link">
                <button className="button-button-secondary-preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp4/form">
              <button className="button-button-primary-template-button">Dropment template 4</button><br/>
            </Link>
            <span className="preview-span">
              <Link to="/temp4preview" className="preview-link">
                <button className="button-button-secondary-preview-button">Preview</button>
              </Link>
            </span>
          </div>
          <div className="template">
            <Link to="/Add/temp5/form">
              <button className="button-button-primary-template-button">Dropment template 5</button><br/>
            </Link>
            <span className="preview-span">
              <Link to="/temp5preview" className="preview-link">
                <button className="button-button-secondary-preview-button">Preview</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Addshopniche;