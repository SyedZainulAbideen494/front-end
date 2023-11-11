import React,{Fragment, useCallback} from "react";
import './csb.css'
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Header1 from "./headers-parts/header1";
import Header2 from "./headers-parts/header2";
import Header1Preview from "./headers-parts/header1-preview";
import Header2Preview from "./headers-parts/header2-preview";
import Header3Preview from "./headers-parts/header3-preview";
import Header4preview from "./headers-parts/header4-preview";
import Header5preview from "./headers-parts/header5-preview";


const Step2build =() => {
    const params = useParams();

    const addShopHandler = (navValue) => {
      const token = localStorage.getItem("token");
  
      // Make an Axios PUT request to update the navigation bar
      Axios.put(
        "http://localhost:8080/header/update",
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
          window.location.href = `/build/${params.build}/step2/form/${params.shop_id}/${navValue}`;
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
            <h1>Select Hero Section</h1>
            <Link to='/custom/shop/build/page1'>
              <button>Back</button>
            </Link>
          </header>
          <hr />
        </div>
        <div className="allHeaders">
          <Header2Preview/>
          <button onClick={() => addShopHandler(2)} className="select-nav-bar-build-shop">select</button>
          <Header3Preview/>
          <button onClick={() => addShopHandler(3)} className="select-nav-bar-build-shop">select</button>
          <Header4preview/>
          <button onClick={() => addShopHandler(4)} className="select-nav-bar-build-shop">select</button>
          <Header5preview/>
          <button onClick={() => addShopHandler(5)} className="select-nav-bar-build-shop">select</button>
        </div>
        </div>
      </Fragment>
    );
}  

export default Step2build