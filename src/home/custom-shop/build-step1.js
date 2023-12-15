import React, { Fragment } from "react";
import './csb.css';
import { Link, useParams } from "react-router-dom";
import NavBar1 from "./navigation-bars/navbar1";
import NavBar2 from "./navigation-bars/navbar2";
import Axios from "axios";
import NavBar3 from "./navigation-bars/navbar3";
import NavBar4 from "./navigation-bars/navbar4";
import NavBar5 from "./navigation-bars/navbar5";
import NavBar6 from "./navigation-bars/navbar6";
import NavBar7 from "./navigation-bars/navbar7";
import NavBar4Preview from "./navigation-bars copy/navbar4-preview";
import NavBar5Preview from "./navigation-bars copy/navbar5-preview";
import NavBar1Preview from "./navigation-bars copy/navbar1-preview";
import NavBar2Preview from "./navigation-bars copy/navbar2-preview";
import NavBar3Preview from "./navigation-bars copy/navbar3-preview";
import NavBar6Preview from "./navigation-bars copy/navbar6-preview";
import NavBar7Preview from "./navigation-bars copy/navbar7-preview";

const Step1build = () => {
  const params = useParams();

  const addShopHandler = (navValue) => {
    const token = localStorage.getItem("token");

    // Make an Axios PUT request to update the navigation bar
    Axios.put(
      "https://apifordropment.online/nav/bar/update",
      {
        nav: navValue // Use the 'navValue' argument to set the 'nav' value
      },
      {
        headers: {
          Authorization: params.shop_id
        }
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log('Operation succeeded');
        window.location.href = `/build/${params.build}/step1/form/${params.shop_id}/${navValue}`;
      } else {
        console.log('Operation failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Fragment>
      <div className="main-div-builder">
      <div className="step1buildheader">
        <header>
          <h1>Select Navigation bar</h1>
          <Link to='/custom/shop/build/page1'>
            <button>Back</button>
          </Link>
        </header>
        <hr />
      </div>
      <div className="allNavBars">
      <NavBar4Preview/>
        <button onClick={() => addShopHandler(4)} className="select-nav-bar-build-shop">Select</button>
        <NavBar1Preview />
        <button onClick={() => addShopHandler(1)} className="select-nav-bar-build-shop">
          Select
        </button>
        <NavBar2Preview />
        <button onClick={() => addShopHandler(2)} className="select-nav-bar-build-shop">Select</button>
        <NavBar6Preview/>
        <button onClick={() => addShopHandler(6)} className="select-nav-bar-build-shop">Select</button>
      </div>
      </div>
      <p>- - - -</p>
    </Fragment>
  );
};

export default Step1build;