import { Fragment } from "react";
import Button from "../UI/button";
import "./webstore.css";
import Button2 from "../UI/button2";
import Storename from "./storename";
import { Link } from "react-router-dom";
import NameStore from "./store-name-name";
const StoreHeader = (props) => {
  return (
    <Fragment>
      <div className="webstore-header">
        <header>
          <NameStore />
          <div className="btn-store-header">
            <span>
              <Link to="/aboutus">
                <Button2>About us</Button2>
              </Link>
            </span>

            <span>
              <Link to="/shop-products">
                <Button2>Products</Button2>
              </Link>
            </span>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default StoreHeader;
