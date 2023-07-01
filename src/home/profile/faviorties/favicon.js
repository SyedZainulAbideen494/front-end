import React, { Fragment, useState } from "react";
import Profilenameapp from "../profilename/profilenameapp";

const Fav = (props) => {
  return (
    <Fragment>
      <div className="favofprofile">
        <h2>Favorite of 3</h2>
      </div>
      <div className="favsof">
        <h2>Favorite profiles of</h2>
        <Profilenameapp />
      </div>
    </Fragment>
  );
};

export default Fav;
