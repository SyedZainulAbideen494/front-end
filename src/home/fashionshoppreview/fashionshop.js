import React, { useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import "./fashionshop.css";
import Productsinstoreapp from "./itemsinshop/productsApp";

const Fashionshoppreview = (props) => {
  const [showform, setshowform] = useState(false);
  const [about, setabout] = useState("");

  const showformhandler = () => {
    setshowform(true);
  };

  const hideformhandler = () => {
    setshowform(false);
  };

  const params = useParams();
  return (
    <Fragment>
      <div className="headerstore1">
        <header>
          <div className="headerinlinelelments">
            <span className="headertxtname">
              <h1>Your store name</h1>
            </span>
          </div>
        </header>
      </div>
      <div className="imgheaderfashion">
        <header
          style={{
            backgroundImage: `url(${require("../../home/header/images/download.jpg")})`,
            width: "1050px",
            padding: "100px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2>Your store Tagline</h2>
        </header>
      </div>
      <div className="prodssection">
        <section>
          <div className="prodstxt1212">
            <hr />
            <h2>Products</h2>
            <Productsinstoreapp />
          </div>
        </section>
        <hr />
      </div>
      <div className="aboutussection">
        <section>
          <div className="aboutustxtheading">
            <h2>About us</h2>
          </div>
          <div className="aboutusblock1">
            <h2>heading for a deatils block for your store</h2>
            <h3>
              Enter the deatils about what you have written in the heading above
            </h3>
          </div>
          <div className="block2">
            <h2>heading for a deatils block for your store</h2>
            <h3>
              Enter the deatils about what you have written in the heading above
            </h3>
          </div>
          <div className="block3">
            <h2>heading for a deatils block for your store</h2>
            <h3>
              Enter the deatils about what you have written in the heading above
            </h3>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Fashionshoppreview;
