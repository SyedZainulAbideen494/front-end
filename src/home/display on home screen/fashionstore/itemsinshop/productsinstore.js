import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Productsinstore = (props) => {
  return (
    <Fragment>
      <div className="prodmodel">
        <li>
          <div className="img">
          </div>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="price">
            <h3>{props.price}</h3>
          </div>
        </li>
      </div>
    </Fragment>
  );
};

export default Productsinstore;
