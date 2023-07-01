import { Fragment, useContext } from "react";
import "./homedis.css";
import "./items.css";
import dummyItem from "../../../home/header/images/download.jpg";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <Fragment>
      <div className="productmodel">
        <li>
          <div className="productimg">
            <img src={dummyItem} />
          </div>
          <div className="product__title">
            <h2>{props.title}</h2>
          </div>
          <div className="product__amount">
            <h3>{props.price}</h3>
          </div>
        </li>
      </div>
    </Fragment>
  );
};

export default Products;
