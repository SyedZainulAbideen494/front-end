import { Fragment } from "react";
import Products from "./products";
import "./homedis.css";
import { Link, useParams } from "react-router-dom";
import "./items.css";

const Productlist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.items.map((item) => (
            <Link to={`/products/${item.id}/${item.title}/${item.price}`}>
              <Products
                id={item.id}
                title={item.title}
                amount={item.amount}
                price={item.price}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Productlist;
