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
import Tempsabout from "../tempsabout/tempsabout";
import Contact from "../dropmentcontacts/contackts";
import './home.css'
import Displayshoponhome from "../display on home screen/displayshop";

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
          <div className="prodsonhomepg">
            <div className="prodsheadhome">
              <hr/>
              <h2>Products from our customers</h2>
              <hr/>
            </div>
            <Homedisplay />
          </div>
          <div className="shopsonhome">
            <div className="txthomeshops">
              <hr/>
              <h2>Shops of our customer</h2>
              <hr/>
            </div>
            <div>
              <Displayshoponhome/>
            </div>
          </div>
        </Cartprovider>
        <Tempsabout />
        <footer>
          <Contact />
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
