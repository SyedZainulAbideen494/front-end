import React, { useState, Fragment } from "react";
import SearchProfile from "./searchproducts";
import "./user.css";

const Userinfolist = (props) => {
  return (
    <Fragment>
      <div className="userul">
        <ul>
          {props.users.map((user) => (
            <SearchProfile
              key={user.id}
              id={user.id}
              unique_id={user.unique_id}
              image={user.image}
              first_name={user.first_name}
              last_name={user.last_name}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Userinfolist;
