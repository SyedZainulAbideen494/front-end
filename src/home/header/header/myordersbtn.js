import { Fragment } from "react";
import "./header.css";
import { Router, Link } from "react-router-dom";
import Button from "../../UI/button";

const Myordersbtn = (props) => {
  return (
    <Fragment>
      <div className="myorders-btn">
        <button onClick={props.onClick}>My Orders</button>
      </div>
    </Fragment>
  );
};

export default Myordersbtn;
