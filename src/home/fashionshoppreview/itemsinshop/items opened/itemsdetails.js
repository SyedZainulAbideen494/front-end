import { Fragment } from "react";
import Detailprodsimg from "./productimgdetail";
import Prodsright from "./prodsdetailsright";
import "./itemsdetails.css";
import Prodsdetailsbottom from "./prodsdetailsbottom";

const ItemsDetails = (props) => {
  return (
    <Fragment>
      <div className="prods__details">
        <Detailprodsimg />
        <Prodsright />
      </div>
      <Prodsdetailsbottom />
    </Fragment>
  );
};

export default ItemsDetails;
