import React,{Fragment, useCallback, useState, useEffect} from "react";
import './csb.css'
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Header1 from "./headers-parts/header1";
import Section1Buildpreview from "./sections-parts/section1-preview";
import Section2Buildpreview from "./sections-parts/section2-preview";
import Section3Buildpreview from "./sections-parts/section3-preview";
import Section4Buildpreview from "./sections-parts/section4-preview";
import Section5Buildpreview from "./sections-parts/section5-preview";
import Section6Buildpreview from "./sections-parts/section6-preview";
import Section7Buildpreview from "./sections-parts/section7-preview";
import Section8Buildpreview from "./sections-parts/section8-preview";
import Section9Buildpreview from "./sections-parts/section9-preview";
import Section10Buildpreview from "./sections-parts/section10-preview";
import Section11Buildpreview from "./sections-parts/section11-preview";
import Section12Buildpreview from "./sections-parts/section12-preview";


const Step5build =() => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);


    const addShopHandler = (navValue) => {
      const token = localStorage.getItem("token");
  
      // Make an Axios PUT request to update the navigation bar
      Axios.put(
        "https://apifordropment.online/section5/update",
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
          console.log('Operation succeeded')
            window.location.href = `/build/${params.build}/step5/form/${params.shop_id}/${navValue}`;
        } else {
          console.log('Operation failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
    const fetchProductsHandler = useCallback(async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`https://apifordropment.online/custom/shop/display`, {
          headers: { Authorization: params.shop_id },
        });
        setItems(response.data.shops);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }, [params.shop_id]);
  
    useEffect(() => {
      fetchProductsHandler();
    }, [fetchProductsHandler]);

    const Btn1 = () => {
      if(items[0]?.section3 === '1'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(1)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn2 = () => {
      if(items[0]?.section3 === '2'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(2)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
    const Btn3 = () => {
      if(items[0]?.section3 === '3'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(3)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn4 = () => {
      if(items[0]?.section3 === '4'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(4)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
  
    const Btn5 = () => {
      if(items[0]?.section3 === '5'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(5)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn6 = () => {
      if(items[0]?.section3 === '6'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(6)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn7 = () => {
      if(items[0]?.section3 === '7'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(7)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
    const Btn8 = () => {
      if(items[0]?.section3 === '8'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(8)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
    const Btn9 = () => {
      if(items[0]?.section3 === '9'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(9)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
    const Btn10 = () => {
      if(items[0]?.section3 === '10'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(10)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn11 = () => {
      if(items[0]?.section3 === '11'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(11)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }

    const Btn12 = () => {
      if(items[0]?.section3 === '12'){
        return<h3>Selected</h3>
      }else {
        return <button
        onClick={() => addShopHandler(12)}
        className="select-nav-bar-build-shop"
      >
        Select
      </button>
      }
    }
  
    return (
      <Fragment>
      <div className="main-div-builder">
      <div className="step1buildheader">
        <header>
          <h1>Select Sections</h1>
          <Link to='/custom/shop/build/page1'>
            <button>Back</button>
          </Link>
        </header>
        <hr />
      </div>
      <div className="allHeaders">

      <Section2Buildpreview />
      <button
      onClick={() => addShopHandler(2)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section3Buildpreview/>
      <button
      onClick={() => addShopHandler(3)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section4Buildpreview/>
      <button
      onClick={() => addShopHandler(4)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section5Buildpreview/>
      <button
      onClick={() => addShopHandler(5)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section6Buildpreview/>
      <button
      onClick={() => addShopHandler(6)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section7Buildpreview/>
      <button
      onClick={() => addShopHandler(7)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section8Buildpreview/>
      <button
      onClick={() => addShopHandler(8)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section9Buildpreview/>
      <button
      onClick={() => addShopHandler(9)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section10Buildpreview/>
      <button
      onClick={() => addShopHandler(10)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section11Buildpreview/>
      <button
      onClick={() => addShopHandler(11)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      <Section12Buildpreview/>
      <button
      onClick={() => addShopHandler(12)}
      className="select-nav-bar-build-shop"
    >
      Select
    </button>
      </div>
      </div>
    </Fragment>
    );
}  

export default Step5build