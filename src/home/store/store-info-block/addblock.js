import React, { useState } from "react";
import InfoBlock from "./infoblock";
import NewItemForm from "./newblockform";
import Newblock from "./newblock";
import "./infoblock.css";
const Addblock = (props) => {
  const onblockdataHandler = (enteredblockdata) => {
    const blockdata = {
      ...enteredblockdata,
      id: Math.random().toString(),
    };
    props.onAddBlock(blockdata);
  };
  return <NewItemForm onAddnewBlock={onblockdataHandler} />;
};

export default Addblock;
