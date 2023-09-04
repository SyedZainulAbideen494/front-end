import React, { Fragment, useCallback, useState } from "react";
import "./plans.css";
import Subsbtn from "./subsbtn";
import { Link } from "react-router-dom";
import Button from "../UI/button";

const Plans = (props) => {
  return (
    <Fragment>
      <div className="headerplans">
        <header>
          <div className="planheadbtn">
            <span>
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </span>
          </div>
        </header>
      </div>
      <div className="plans">
        <div className="mini">
          <h1>Mini Plan</h1>
          <h4>1 month</h4>
          <div className="pricing">
            <span className="dis">
              <h3>$3</h3>
            </span>
            <span className="disaf">
              <h2>$0.24</h2>
            </span>
          </div>
          <ul>
            <li>
              <h4>Access to about us page on your store</h4>
            </li>
            <li>
              <h4>
                You will be able to add 8 products/services/courses at a time.
              </h4>
            </li>
            <Subsbtn />
          </ul>
        </div>
        <div className="mini">
          <h1>Standard Plan</h1>
          <h4>1 month</h4>
          <div className="pricing">
            <span className="dis">
              <h3>$5</h3>
            </span>
            <span className="disaf">
              <h2>$0.60</h2>
            </span>
          </div>
          <ul>
            <li>
              <h4>
                You will be able to add 20 products/services/courses at a time.
              </h4>
            </li>
            <li>
              <h4>
                Your products will be displayed on the dropment main page.
              </h4>
            </li>
            <li>
              <h4>Access to about us page on your store</h4>
            </li>
            <Subsbtn />
          </ul>
        </div>
        <div className="mini">
          <h1>Ultra Plan</h1>
          <h4>3 month</h4>
          <div className="pricing">
            <span className="dis">
              <h3>$12</h3>
            </span>
            <span className="disaf">
              <h2>$3</h2>
            </span>
          </div>
          <ul>
            <li>
              <h4>
                You will be able to add unlimited products/services/courses at a
                time.
              </h4>
            </li>
            <li>
              <h4>
                Your products will be displayed on the dropment main page.
              </h4>
            </li>
            <li>
              <h4>Access to about us page on your store</h4>
            </li>
            <Subsbtn />
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Plans;
