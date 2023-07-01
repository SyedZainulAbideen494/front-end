import { Fragment } from "react";
import { Link } from "react-router-dom";
import Productdetailsprice from "./productdetailsprice";

const Productdeatilspricelist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.price.map((price) => (
            <Productdetailsprice price={price.price} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Productdeatilspricelist;
