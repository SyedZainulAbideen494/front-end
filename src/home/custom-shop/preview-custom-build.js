import React, { Fragment, useCallback, useEffect, useState } from "react";
import './customshop.css'
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar1 from "./navigation-bars/navbar1";
import NavBar2 from "./navigation-bars/navbar2";
import NavBar3 from "./navigation-bars/navbar3";
import NavBar4 from "./navigation-bars/navbar4";
import Header1 from "./headers-parts/header1";
import Section1Build from "./sections-parts/section1";
import Footer1 from "./footer-parts/footer1";
import NavBar6 from "./navigation-bars/navbar6";
import NavBar5 from "./navigation-bars/navbar5";
import NavBar7 from "./navigation-bars/navbar7";
import Header2 from "./headers-parts/header2";
import Header3 from "./headers-parts/header3";
import Header4 from "./headers-parts/header4";
import Header5 from "./headers-parts/header5";
import Section2Build from "./sections-parts/section2";
import Section3Build from "./sections-parts/section3";
import Section4Build from "./sections-parts/section4";
import Section5Build from "./sections-parts/section5";
import Section6Build from "./sections-parts/section6";
import Section7Build from "./sections-parts/section7";
import Section8Build from "./sections-parts/section8";
import Section9Build from "./sections-parts/section9";
import Section10Build from "./sections-parts/section10";
import Section11Build from "./sections-parts/section11";
import Section12Build from "./sections-parts/section12";
import Section1BuildSec4 from "./sections-parts/section4 parts/section1-sec4";
import Section2BuildSec4 from "./sections-parts/section4 parts/section2-sec4";
import Section3BuildSec4 from "./sections-parts/section4 parts/section3-sec4";
import Section4BuildSec4 from "./sections-parts/section4 parts/section4-sec4";
import Section5BuildSec4 from "./sections-parts/section4 parts/section5-sec4";
import Section6BuildSec4 from "./sections-parts/section4 parts/section6-sec4";
import Section7BuildSec4 from "./sections-parts/section4 parts/section7-sec4";
import Section8BuildSec4 from "./sections-parts/section4 parts/section8-sec4";
import Section9BuildSec4 from "./sections-parts/section4 parts/section9-sec4";
import Section10BuildSec4 from "./sections-parts/section4 parts/section10-sec4";
import Section11BuildSec4 from "./sections-parts/section4 parts/section11-sec4";
import Section12BuildSec4 from "./sections-parts/section4 parts/section12-sec4";
import Section1BuildSec6 from "./sections-parts/section6 parts/section1-sec6";
import Section2BuildSec6 from "./sections-parts/section6 parts/section2-sec6";
import Section3BuildSec6 from "./sections-parts/section6 parts/section3-sec6";
import Section4BuildSec6 from "./sections-parts/section6 parts/section4-sec6";
import Section5BuildSec6 from "./sections-parts/section6 parts/section5-sec6";
import Section7BuildSec6 from "./sections-parts/section6 parts/section7-sec6";
import Section8BuildSec6 from "./sections-parts/section6 parts/section8-sec6";
import Section9BuildSec6 from "./sections-parts/section6 parts/section9-sec6";
import Section10BuildSec6 from "./sections-parts/section6 parts/section10-sec6";
import Section11BuildSec6 from "./sections-parts/section6 parts/section11-sec6";
import Section12BuildSec6 from "./sections-parts/section6 parts/section12-sec6";
import Section1BuildSec5 from "./sections-parts/section5 parts/section1-sec5";
import Section2BuildSec5 from "./sections-parts/section5 parts/section2-sec5";
import Section3BuildSec5 from "./sections-parts/section5 parts/section3-sec5";
import Section4BuildSec5 from "./sections-parts/section5 parts/section4-sec5";
import Section5BuildSec5 from "./sections-parts/section5 parts/section5-sec5";
import Section7BuildSec5 from "./sections-parts/section5 parts/section7-sec5";
import Section8BuildSec5 from "./sections-parts/section5 parts/section8-sec5";
import Section9BuildSec5 from "./sections-parts/section5 parts/section9-sec5";
import Section10BuildSec5 from "./sections-parts/section5 parts/section10-sec5";
import Section11BuildSec5 from "./sections-parts/section5 parts/section11-sec5";
import Section12BuildSec5 from "./sections-parts/section5 parts/section12-sec5";
import  Axios  from "axios";
import Footer1Footer from "./footer-parts/footer1-footer";

const CustomShopPreview = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [backgroundColor1, setbackgroundColor1] = useState('#ffffff');
  const [backgroundColor2, setbackgroundColor2] = useState('#ffffff');
  const [backgroundColor3, setbackgroundColor3] = useState('#ffffff');
  const [fontColor1, setfontColor1] = useState('#000000');
  const [fontColor2, setfontColor2] = useState('#000000');
  const [fontColor3, setfontColor3] = useState('#000000');
  const [fontColor4, setfontColor4] = useState('#000000');
  const [fontColor5, setfontColor5] = useState('#000000');
  const [fontColor6, setfontColor6] = useState('#000000');
  const token = localStorage.getItem("token");
  const params = useParams();
  
  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://apifordropment.online/custom/shop/display`, {
      headers: {
        Authorization: params.shop_id, // Set the token in the Authorization header
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        section1: itemsdata.section1,
        section2: itemsdata.section2,
        section3: itemsdata.section3,
        section4: itemsdata.section4,
        section5: itemsdata.section5,
        section6: itemsdata.section6,
        section13: itemsdata.section13
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, [token]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const EditMenu = () => {
  
    const handleBackgroundColorChange1 = (event) => {
      setbackgroundColor1(event.target.value);
    };
  
    const shopFinishHandler = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        Axios.put(
          "https://apifordropment.online/custom/shop/finish/api",
          {
            temp: 'custom'
          },
          {
            headers: {
              Authorization: params.shop_id,
            },
          }
        )
          .then((response) => {
            if (response.status === 200) {
             window.location.href = `/preview/${params.build}/${params.shop_id}/shop/congratulations`;
            } else {
              console.log('Operation failed');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
  
    const addColorsHandler = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      Axios.put(
        "https://apifordropment.online/color/selection/background/shop/color/add",
        {
          backgroundColor1,
        },
        {
          headers: {
            Authorization: params.shop_id,
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            console.log('Operation succeeded');
          } else {
            console.log('Operation failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <form onSubmit={addColorsHandler}>
        <div className="color-palette">
          <label htmlFor="fc6"><h4>background Color</h4></label>
          <input
            type="color"
            value={backgroundColor1}
            onChange={handleBackgroundColorChange1}
            style={{ background: 'transparent', border: "none" }}
            id="fc6"
          />
          <h4 style={{ color: backgroundColor1 }}>{backgroundColor1}</h4>
        </div>
        <button type="submit" className="st-bg-clr-previrew-custom-shop">Set Color</button>
        <button type="button" onClick={shopFinishHandler} className="publish-web-btn">
          Publish
        </button>
      </form>
    );
  };
  const Section1 = () => {
    if (items[0]?.section1 === '1') {
      return <NavBar1 />
    } else if (items[0]?.section1 === '2') {
      return <NavBar2 />
    } else if (items[0]?.section1 === '3') {
      return <NavBar3 />
    }else if (items[0]?.section1 === '4') {
      return <NavBar4 />
    }else if (items[0]?.section1 === '5') {
      return <NavBar5 />
    }else if (items[0]?.section1 === '6') {
      return <NavBar6 />
    }else if (items[0]?.section1 === '7') {
      return <NavBar7 />
    } else {
      return <h2>navigationbar  +</h2>
    }
  }

  const Section2 = () => {
    if (items[0]?.section2 === '1') {
      return <Header1 />
    } if (items[0]?.section2 === '2') {
      return <Header2 />
    }if (items[0]?.section2 === '3') {
      return <Header3 />
    } if (items[0]?.section2 === '4') {
      return <Header4 />
    } if (items[0]?.section2 === '5') {
      return <Header5 />
    }  else {
      return <h2>Section 2 +</h2>
    }
  }

  const Section3 = () => {
    if (items[0]?.section3 === '1') {
      return <Section1Build />
    }  if (items[0]?.section3 === '2') {
      return <Section2Build />
    }  if (items[0]?.section3 === '3') {
      return <Section3Build />
    }  if (items[0]?.section3 === '4') {
      return <Section4Build />
    }if (items[0]?.section3 === '5') {
      return <Section5Build />
    }if (items[0]?.section3 === '6') {
      return <Section6Build />
    } if (items[0]?.section3 === '7') {
      return <Section7Build />
    } if (items[0]?.section3 === '8') {
      return <Section8Build />
    }if (items[0]?.section3 === '9') {
      return <Section9Build />
    }if (items[0]?.section3 === '10') {
      return <Section10Build />
    }if (items[0]?.section3 === '11') {
      return <Section11Build />
    }if (items[0]?.section3 === '12') {
      return <Section12Build />
    } else {
      return <h2>Section 3 +</h2>
    }
  }

  const Section4 = () => {
    if (items[0]?.section4 === '1') {
      return <Section1BuildSec4 />
    }  if (items[0]?.section4 === '2') {
      return <Section2BuildSec4 />
    }  if (items[0]?.section4 === '3') {
      return <Section3BuildSec4 />
    }  if (items[0]?.section4 === '4') {
      return <Section4BuildSec4 />
    }if (items[0]?.section4 === '5') {
      return <Section5BuildSec4 />
    } if (items[0]?.section4 === '6') {
      return <Section6BuildSec4 />
    } if (items[0]?.section4 === '7') {
      return <Section7BuildSec4 />
    } if (items[0]?.section4 === '8') {
      return <Section8BuildSec4 />
    }if (items[0]?.section4 === '9') {
      return <Section9BuildSec4 />
    }if (items[0]?.section4 === '10') {
      return <Section10BuildSec4 />
    }if (items[0]?.section4 === '11') {
      return <Section11BuildSec4 />
    }if (items[0]?.section4 === '12') {
      return <Section12BuildSec4/>
    } else {
      return <h2>Section 4 +</h2>
    }
  }

  const Section5 = () => {
    if (items[0]?.section5 === '1') {
      return <Section1BuildSec5 />
    }  if (items[0]?.section5 === '2') {
      return <Section2BuildSec5 />
    }  if (items[0]?.section5 === '3') {
      return <Section3BuildSec5 />
    }  if (items[0]?.section5 === '4') {
      return <Section4BuildSec5 />
    }if (items[0]?.section5 === '5') {
      return <Section5BuildSec5 />
    } if (items[0]?.section5 === '7') {
      return <Section7BuildSec5 />
    } if (items[0]?.section5 === '8') {
      return <Section8BuildSec5 />
    }if (items[0]?.section5 === '9') {
      return <Section9BuildSec5 />
    }if (items[0]?.section5 === '10') {
      return <Section10BuildSec5 />
    }if (items[0]?.section5 === '11') {
      return <Section11BuildSec5 />
    }if (items[0]?.section5 === '12') {
      return <Section12BuildSec5 />
    } else {
      return <h2>Section 5 +</h2>
    }
  }

  const Section6 = () => {
    if (items[0]?.section6 === '1') {
      return <Section1BuildSec6 />
    }  if (items[0]?.section6 === '2') {
      return <Section2BuildSec6 />
    }  if (items[0]?.section6 === '3') {
      return <Section3BuildSec6 />
    }  if (items[0]?.section6 === '4') {
      return <Section4BuildSec6 />
    }if (items[0]?.section6 === '5') {
      return <Section5BuildSec6 />
    } if (items[0]?.section6 === '7') {
      return <Section7BuildSec6 />
    } if (items[0]?.section6 === '8') {
      return <Section8BuildSec6 />
    }if (items[0]?.section6 === '9') {
      return <Section9BuildSec6 />
    }if (items[0]?.section6 === '10') {
      return <Section10BuildSec6 />
    }if (items[0]?.section6 === '11') {
      return <Section11BuildSec6 />
    }if (items[0]?.section6 === '12') {
      return <Section12BuildSec6 />
    } else {
      return <h2>Section 6 +</h2>
    }
  }

  
  const Section13 = () => {
    if (items[0]?.section13 === '1') {
      return <Footer1Footer />
    } else {
      return<h2>Footer +</h2>
    }
  }

  return (
    <>
  <div style={{ backgroundColor: backgroundColor1 }}>
    <EditMenu />
    <section className="parts-custom-shop-main">
      <Section1 />
      <Link to={`/build/${params.build}/step1/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section2 />
      <Link to={`/build/${params.build}/step2/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section3 />
      <Link to={`/build/${params.build}/step3/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section4 />
      <Link to={`/build/${params.build}/step4/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section5 />
      <Link to={`/build/${params.build}/step5/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section6 />
      <Link to={`/build/${params.build}/step6/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
    <section className="parts-custom-shop-main">
      <Section13 />
      <Link to={`/build/${params.build}/footer/${params.shop_id}/${params.build}`}>
      <button>Edit</button>
      </Link>
    </section>
  </div>
</>
  );
}

export default CustomShopPreview;