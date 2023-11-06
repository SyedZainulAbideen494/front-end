import React,{Fragment, useCallback} from "react";
import './csb.css'
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Header1 from "./headers-parts/header1";
import Section1Build from "./sections-parts/section1";

const Step12build =() => {
    const params = useParams();

    const addShopHandler = (navValue) => {
      const token = localStorage.getItem("token");
  
      // Make an Axios PUT request to update the navigation bar
      Axios.put(
        "http://localhost:8080/section12/update",
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
            window.location.href = `/build/${params.build}/footer/${params.shop_id}/${params.build}`;
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
          <Section1Build/>
          <button onClick={() => addShopHandler(1)} className="select-nav-bar-build-shop">select</button>
        </div>
      </Fragment>
    );
}  

export default Step12build