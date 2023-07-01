import React, { useEffect, useState, Fragment } from "react";
import NewItemForm from "./newblockform";
import "./infoblock.css";
import Addblock from "./addblock";
import Newblock from "./newblock";
import { Router, Link } from "react-router-dom";
const expenses = [{}];
const InfoBlock = (props) => {
  const [block, setblock] = useState([]);
  const onAddnewBlock = (block) => {
    setblock((prevblock) => {
      return [block, ...prevblock];
    });
  };
  return (
    <Fragment>
      <div className="block_block">
        <div className="addblock-h2">
          <h2>Add block</h2>
        </div>
        <div className="addblockclosebtn">
          <span>
            <button onClick={props.onhide}>Close</button>
          </span>
        </div>
        <div className="Add__block__add">
          <Addblock onAddBlock={onAddnewBlock} />
        </div>
      </div>
      <Newblock block={block} />
    </Fragment>
  );
};
export default InfoBlock;
