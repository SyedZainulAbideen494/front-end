import { Fragment } from "react";
import dummy from "../header/images/download.jpg";
import "./itemsdetails.css";

const Detailprodsimg = (props) => {
  return (
    <Fragment>
      <div className="detail__img_prods">
        <img src={dummy} />
      </div>
    </Fragment>
  );
};

export default Detailprodsimg;
