import { Fragment } from "react";
import "./button.css";

const Button2 = (props) => {
  return (
    <Fragment>
      <div className="button2">
        <button type={props.type || "button"} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </Fragment>
  );
};

export default Button2;
