import { Fragment } from "react";
import { Router, Link } from "react-router-dom";
import Signinform from "./signinform";
import "./auth.css";

const Signin = () => {
  return (
    <Fragment>
      <div>
        <Signinform />
      </div>
    </Fragment>
  );
};

export default Signin;
