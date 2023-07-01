import { Fragment } from "react";
import { Link } from "react-router-dom";
import Productdetailstitle from "./productdetailstitle";

const Productdeatilstitlelist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.title.map((title) => (
            <Productdetailstitle title={title.title} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Productdeatilstitlelist;
