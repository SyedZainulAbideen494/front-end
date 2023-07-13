import React,{useCallback, Fragment} from "react";
import Productsinshopapp from "../items.js/productsApp";
import "../../home/shopsowner/shopsowner.css";

const Temp1rpeview = () => {
    return (
      <Fragment>
        <div className="shop_name">
          <h2>Your shop name</h2>
        </div>
        <div className="stinfoblock">
          <hr />

          <span>
            <div className="stinfoblockheadtxt">
              <h3>write about your shop on this block</h3>
            </div>
          </span>
          <hr />
        </div>
        <div className="ndinfoblock">
          <hr />
          <span>
            <div className="infoblock2headtxt">
              <h3>Write details about what you sell on this block</h3>
            </div>
          </span>
          <hr />
        </div>
        <div className="itemsinshop">
          <Productsinshopapp />
        </div>
      </Fragment>
    );
}

export default Temp1rpeview