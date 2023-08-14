import { useParams, Link } from "react-router-dom";
import { Fragment } from "react";
import Prodimg from "../../home/header/images/download.jpg";
import Productsapp from "../items.js/productsApp";

function Prodsright({ items }) {
  const params = useParams();
  return (
    <Fragment>
      <div className="imgdeatils">
        <img src={Prodimg} />
      </div>
      <div className="prodes__right__full">
        <div className="prods__title">
          <h2>{params.title}</h2>
        </div>
        <br />
        <div className="amount">
          Price: <br />
          <h3>{params.price}</h3>
        </div>
        <br />
        <div className="prods__detail__btn">
          <span className="prods__detail_buynow_btn">
            <button>Add to cart</button>
          </span>
          <br />
          <span className="prods__detail_addtocart_btn">
            <Link to="/orderproduct">
              <button>Buy now</button>
            </Link>
          </span>
        </div>
      </div>
      <div className="prodsdetails__products">
        <hr />
        <span className="prodsliketxt">
          <h3>More products you might like</h3>
        </span>
        <hr />
        <Productsapp />
      </div>
    </Fragment>
  );
}

export default Prodsright;
