import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Userdisplay from "./userdisplay";

const Userslist = (props) => {
  return (
    <Fragment>
      <div className="usermodelul">
        <ul>
          {props.shops.map((item) => (
            <Link
              to={`/user/${item.user_id}/`}
              style={{textDecoration: 'none', color: 'black'}}
            >
              <Userdisplay
                first_name={item.first_name}
                last_name={item.last_name}
                user_id={item.user_id}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Userslist;
