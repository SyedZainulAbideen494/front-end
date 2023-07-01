import { Fragment } from "react";
import Productsapp from "../items.js/productsApp";
import "./itemsdetails.css";

const Prodsdetailsbottom = (props) => {
  return (
    <Fragment>
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
};
export default Prodsdetailsbottom;
