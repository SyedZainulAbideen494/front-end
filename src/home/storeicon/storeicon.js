import { Fragment } from "react";
import sazlogo from "../header/images/saz_logo.jpg";
import "./storeicon.css";
import defimgadd from "../header/images/addshop.png";
import { Link } from "react-router-dom";
const Storeicon = (props) => {
  return (
    <Fragment>
      <div className="imageofshop">
        <Link to="/mystore">
          <img src={sazlogo} />
        </Link>
        <Link to="/addnewstore">
          <img src={defimgadd} />
        </Link>
      </div>
    </Fragment>
  );
};

export default Storeicon;
