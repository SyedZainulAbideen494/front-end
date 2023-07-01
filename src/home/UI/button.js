import { Fragment } from "react";
import "./button.css";

const Button = (props) => {
  return (
    <Fragment>
      <div className="button">
        <button type={props.type || "button"} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
