import { Fragment, useContext } from "react";
import "./homedis.css";
import "./items.css";
import dummyItem from "../header/images/download.jpg";
import { Link } from "react-router-dom";
import Itemproductform from "./itemproductform";
import Cartcontext from "../header/cart/cartcontext";
import "./homedis.css";

const Products = (props) => {
  const cartctx = useContext(Cartcontext);
  const addtocarthandler = (amount) => {
    cartctx.additem({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <Fragment>
      <div className="productmodelmbile">
        <li>
          <div className="productimgmobile">
            <img src={props.images} />
          </div>
          <div className="product__titlemobile">
            <h3>{props.title}</h3>
          </div>
          <div className="product__amountmobile">
            <h4>{props.price}</h4>
          </div>
        </li>
      </div>

      <div className="productmodeltablet">
        <li>
          <div className="productimgtablet">
            <img src={props.images} />
          </div>
          <div className="producttitletablet">
            <h3>{props.title}</h3>
          </div>
          <div className="productpricetablet">
            <h4>{props.price}</h4>
          </div>
        </li>
      </div>

      <div className="productmodelsmallscreen">
        <li>
          <div className="productimgsmall">
            <img src={props.images} />
          </div>
          <div className="producttitlesmall">
            <h2>{props.title}</h2>
          </div>
          <div className="productpricesmall">
            <h3>{props.price}</h3>
          </div>
        </li>
      </div>
    </Fragment>
  );
};

export default Products;
