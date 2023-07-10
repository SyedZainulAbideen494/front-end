import React,{Fragment, useState} from "react";
import { Link } from "react-router-dom";
import './tempabout.css'

const Tempsabout = () => {
    return (
      <Fragment>
        <div className="headingfortempabout">
          <h1>Make your own online shop With droment templates</h1>
          <div className="p">
            <p>Make your dream online store for free on dropment</p>
          </div>
          <div className="tempbrousebtn">
            <Link to="/Addshoppage1">
              <button>
                <h3>Make your online store now</h3>
              </button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
}

export default Tempsabout