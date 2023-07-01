import { Fragment } from "react";
import { Link } from "react-router-dom";
import Productdetailsimg from "./productdeatilsimg";

const Productdeatilsimglist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.img.map((img) => (
            <Productdetailsimg img={img.img} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Productdeatilsimglist;
