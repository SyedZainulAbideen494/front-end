import React,{Fragment, useCallback} from "react";
import './csb.css'
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Header1 from "./headers-parts/header1";
import Section1Build from "./sections-parts/section1";
import Footer1 from "./footer-parts/footer1";

const StepFooterBuild =() => {
    const params = useParams();

    const addShopHandler = (navValue) => {
      const token = localStorage.getItem("token");
  
      // Make an Axios PUT request to update the navigation bar
      Axios.put(
        "https://apifordropment.online/footer/update",
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
            window.location.href = `/build/${params.build}/footer/form/${params.shop_id}/${navValue}`;
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
            <h1>Select Header</h1>
            <Link to='/custom/shop/build/page1'>
              <button>Back</button>
            </Link>
          </header>
          <hr />
        </div>
        <div className="allHeaders">
          <Footer1/>
          <button onClick={() => addShopHandler(1)} className="select-nav-bar-build-shop">select</button>
        </div>
        </div>
      </Fragment>
    );
}  

export default StepFooterBuild