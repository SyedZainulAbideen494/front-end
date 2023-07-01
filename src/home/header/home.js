import { Fragment, useEffect } from "react";
import Header from "../dummyfiles/dummheader";
import React, { useState } from "react";
import { Router, Link, useNavigate } from "react-router-dom";
import Homedisplay from "../display on home screen/displayonhome";
import Cartprovider from "./cart/cartprovider";
import Mobleheader from "./header/header";
import Mycart from "./cart/mycart";
import Order from "../order/order";
import FashionShopapp from "../fashionstore/fashionshopapp.js";
import Shopsright from "../shopsowner/shopsright";
import Addshopform1 from "../addnewshop/addshopform1";

const Home = () => {
  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);

  const [showcart, setshowcart] = useState(false);
  const showcarthandler = () => {
    setshowcart(true);
  };

  const hidecarthandler = () => {
    setshowcart(false);
  };

  return (
    <Fragment>
      <div>
        <Cartprovider>
          <Mobleheader onShowcart={showcarthandler} />
          {showcart && <Mycart onHideCart={hidecarthandler} />}
          <Homedisplay />
        </Cartprovider>
      </div>
    </Fragment>
  );
};

export default Home;
