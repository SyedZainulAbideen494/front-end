import { Route, Link } from "react-router-dom";
import React, { Fragment } from "react";
import Webstore from "./store";
import Button from "../UI/button";
import InfoBlock from "./store-info-block/block";
import "./webstore.css";

const MyStore = (props) => {
  return (
    <Fragment>
      <div className="profile-header-owner">
        <header>
          <div className="shop_owner_view">
            <div className="shopownerbtn">
              <span className="edit_store_btn">
                <button>Edit store</button>
              </span>
              <span className="settings_btn">
                <button>Settings</button>
              </span>
              <span className="add-block-btn__btn">
                <button onClick={props.onShow}>Add block</button>
              </span>
              <span>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </span>
              <span className="stats">
                <Button>Stats</Button>
              </span>
              <span className="sales_btn_profile_pg">
                <Link to="/Mysales">
                  <Button>Sales</Button>
                </Link>
              </span>
              <span className="add-block-btn__btn">
                <button onClick={props.onShowprods}>Add product</button>
              </span>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default MyStore;
