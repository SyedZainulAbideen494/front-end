import React, { Fragment, useState } from "react";
import { Router, Link } from "react-router-dom";
import "./header.css";
import Button from "../../UI/button";

const Sellerbtn = (props) => {
  return (
    <Fragment>
      <div className="seller-btn">
        <Button>Add Products</Button>
      </div>
    </Fragment>
  );
};

export default Sellerbtn;
