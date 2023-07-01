import { Fragment } from "react";
import { Router, Link } from "react-router-dom";
import Button from "../../UI/button";
const Profilebtn = () => {
  return (
    <Fragment>
      <div className="profilebtn">
        <button>
          <h2>My Profile</h2>
        </button>
      </div>
    </Fragment>
  );
};

export default Profilebtn;
