import { Fragment } from "react";
import "./dropshippingui.css";

const Dropbtn = (props) => {
  return (
    <Fragment>
      <div className="dropbtn">
        <button type={props.type || "button"} onClick={props.onClick}>
          <h2>{props.children}</h2>
        </button>
      </div>
    </Fragment>
  );
};

export default Dropbtn;
