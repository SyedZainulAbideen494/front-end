import React, { useState } from "react";
import InfoBlock from "./infoblock";
import "./infoblock.css";
const Newblock = (props) => {
  return (
    <div>
      {props.block.map((block) => (
        <InfoBlock
          key={block.id}
          Heading={block.Heading}
          Subtext={block.Subtext}
        />
      ))}
    </div>
  );
};

export default Newblock;
