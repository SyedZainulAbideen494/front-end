import React, { Fragment, useState } from "react";
import Button from "../UI/button";
import "./webstore.css";
import StoreHeader from "./store-header";
import Productsapp from "../items.js/productsApp";
import InfoBlock from "./store-info-block/block";
import MyStore from "./Mystore";
import Prodssaveadd from "../products add and saves/productsaddsave";
import Addproductstodatabase from "../addproducts/addproductsinshop";
const Webstore = (props) => {
  const [showprodsadd, setshowprodsadd] = useState(false);
  const [showaddblock, setshowaddblock] = useState(false);

  const showaddblockhandler = () => {
    setshowaddblock(true);
  };

  const hideaddblockhandler = () => {
    setshowaddblock(false);
  };

  const showaddprodshandler = () => {
    setshowprodsadd(true);
  };

  const hideaddprodshandler = () => {
    setshowprodsadd(false);
  };

  return (
    <Fragment>
      <MyStore onShow={showaddblockhandler} onShowprods={showaddprodshandler} />
      <StoreHeader />
      {showaddblock && <InfoBlock onhide={hideaddblockhandler} />}
      {showprodsadd && <Addproductstodatabase onHide={hideaddprodshandler} />}
    </Fragment>
  );
};

export default Webstore;
