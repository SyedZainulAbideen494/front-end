import { Fragment } from "react";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Fragment>
  );
});

export default Input;
