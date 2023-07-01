import React, { useRef, useState } from "react";
import "./infoblock.css";
function NewItemForm(props) {
  const headRef = useRef("");
  const subtextRef = useRef("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const blockdata = {
      Heading: headRef.current.value,
      Subtext: subtextRef.current.value,
    };

    props.onAddnewBlock(blockdata);
  };
  return (
    <div>
      <div className="new-block-add">
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className="new-block-head">
              <br />
              <input
                type="text"
                className="add-block-head-inp"
                ref={headRef}
                placeholder="Heading"
              />
              <br />
            </div>
            <div className="new-block-subtext">
              <br />
              <input
                type="text"
                className="add-block-subtext"
                ref={subtextRef}
                placeholder="Sub-text"
              />
              <br />
            </div>
          </div>
          <div className="add-Block__button">
            <button type="submit">Add Info block</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewItemForm;
