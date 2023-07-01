import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Productsinstore from "./productsinstore";

const Productinstorelist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.items.map((item) => (
            <Link to={`/products/${item.id}/${item.title}/${item.price}`}>
              <Productsinstore
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

export default Productinstorelist;
