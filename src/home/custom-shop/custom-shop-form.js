import React, { Fragment, useCallback, useState, useEffect } from "react";
import "./csb.css";
import { useParams } from "react-router-dom";
import Axios from "axios";

const CustomShopForm = () => {
  const [shop_name, setname] = useState("");
  const [shop_blockheading1, setshop_blockheading1] = useState("");
  const [shop_block1, setshop_block1] = useState("");
  const [shop_blockheading2, setshop_blockheading2] = useState("");
  const [shop_block2, setshop_block2] = useState("");
  const [shop_blockheading3, setshop_blockheading3] = useState("");
  const [shop_block3, setshop_block3] = useState("");
  const [items, setitems] = useState([]);
  const [shop_owner, setowner] = useState("");
  const [shop_tagline, setshop_tagline] = useState("");
  const [shop_key1, setshop_key1] = useState("");
  const [shop_keyhead1, setshp_keyhead1] = useState("");
  const [shop_key2, setshop_key2] = useState("");
  const [shop_keyhead2, setshop_keyhead2] = useState("");
  const [shop_key3, setshop_key3] = useState("");
  const [shop_keyhead3, setshop_keyhead3] = useState("");
  const [shop_email, setshop_email] = useState("");
  const [shop_phone, setshop_phone] = useState("");
  const [temp1, settemp1]= useState('')
  const [insta, setinsta] = useState("")
  const [salestext, setsalestext] = useState('')
  const [btn1, setbtn1] = useState('')
  const [btn2, setbtn2] = useState('')
  const [btn3, setbtn3] = useState('')

  const params = useParams();

  const fetchprodshandler = useCallback(async () => {
    const response = await fetch("https://apifordropment.online/custom/shop/sections/form", {
      headers: {
        Authorization: params.shop_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shop.map((itemsdata) => {
      return {
        section1: itemsdata.section1,
        section2: itemsdata.section2,
        section3: itemsdata.section3,
        section4: itemsdata.section4,
        section5: itemsdata.section5,
        section6: itemsdata.section6,
        section7: itemsdata.section7,
        section8: itemsdata.section8,
        section9: itemsdata.section9,
        section10: itemsdata.section10,
        section11: itemsdata.section11,
        section12: itemsdata.section12,
        section13: itemsdata.section13,
      };
    });
    setitems(transformedItems);
  }, []);

  useEffect(() => {
    fetchprodshandler();
  }, []);

  const addshophandler = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "https://apifordropment.online/addShops/custom/shop",
      {
        shop_name: shop_name,  
        shop_blockhead1: shop_blockheading1,
        shop_blockhead2: shop_blockheading2,
        shop_blockhead3: shop_blockheading3,
        shop_block1: shop_block1,
        shop_block2: shop_block2,
        shop_block3: shop_block3,
        temp: 'custom',
        shop_id: params.shop_id
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };


  const Section3 = () => {
    if (items[0]?.section3 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section4 = () => {
    if (items[0]?.section4 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section5 = () => {
    if (items[0]?.section5 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section6 = () => {
    if (items[0]?.section6 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section7 = () => {
    if (items[0]?.section7 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section8 = () => {
    if (items[0]?.section8 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section9 = () => {
    if (items[0]?.section9 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section10 = () => {
    if (items[0]?.section10 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section11 = () => {
    if (items[0]?.section11 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const Section12 = () => {
    if (items[0]?.section12 === '1') {
      return (
        <Fragment>
          <div  className="inp">
            <label>
              <h3>Enter heading for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for first about us block"
              onChange={(e) => {
                setshop_blockheading1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for first about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for first about us block"
              onChange={(e) => {
                setshop_block1(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for second about us block"
              onChange={(e) => {
                setshop_blockheading2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label >
              <h3>Enter details for second about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for second about us block"
              onChange={(e) => {
                setshop_block2(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter heading for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter heading for third about us block"
              onChange={(e) => {
                setshop_blockheading3(e.target.value);
              }}
            />
          </div>
          <div  className="inp">
            <label>
              <h3>Enter details for third about us block</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter details for third about us block"
              onChange={(e) => {
                setshop_block3(e.target.value);
              }}
            />
          </div>
        </Fragment>
      );
    } else {
      return <h3>hello</h3>;
    }
  };

  const BuildNo = () => {
    if (params.build === '4') {
      return <Section3 />;
    }
    if (params.build === '5') {
      return (
        <div>
          <Section3 />
          <Section4 />
        </div>
      );
    }
    if (params.build === '6') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      );
    }
    if (params.build === '7') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      );
    }
    if (params.build === '8') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </div>
      );
    }
    if (params.build === '9') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
        </div>
      );
    }
    if (params.build === '10') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
        </div>
      );
    }
    if (params.build === '11') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
        </div>
      );
    }
    if (params.build === '12') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
        </div>
      );
    }
    if (params.build === '13') {
      return (
        <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
        </div>
      );
    }
  
    // Return something by default if none of the conditions match
    return null;
  };
  return (
    <Fragment>
      <div className="header-custom-shop">
        <header>
          <div className="formheadertextcustomshop">
            <h1>Almost there!</h1>
            <h4>Fill out this form</h4>
          </div>
        </header>
        <hr />
      </div>
      <div className="form-custom-shop">
        <form onSubmit={addshophandler}>
          <div className="inp">
            <label>
              <h3>Enter Shop Name</h3>
            </label>
            <br />
            <input
              required
              placeholder="Enter Shop Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>button 1</h3>
            </label>
            <br />
            <input
              required
              placeholder="button 1"
              onChange={(e) => {
                setbtn3(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>button 2</h3>
            </label>
            <br />
            <input
              required
              placeholder="button 2"
              onChange={(e) => {
                setbtn2(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>button 3</h3>
            </label>
            <br />
            <input
              required
              placeholder="button 3"
              onChange={(e) => {
                setbtn3(e.target.value);
              }}
            />
          </div>
          <BuildNo/>
          <div className="inp">
            <label>
              <h3>Instagram ID</h3>
            </label>
            <br />
            <input
              required
              placeholder="Instagram ID"
              onChange={(e) => {
                setinsta(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>Phone number</h3>
            </label>
            <br />
            <input
              required
              placeholder="Phone number"
              onChange={(e) => {
                setshop_phone(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>Email</h3>
            </label>
            <br />
            <input
              required
              placeholder="Email"
              onChange={(e) => {
                setshop_email(e.target.value);
              }}
            />
          </div>
          <div className="inp">
            <label>
              <h3>Anyother socials</h3>
            </label>
            <br />
            <input
              required
              placeholder="Anyother socials"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add shop</button>
        </form>
      </div>
    </Fragment>
  );
};

export default CustomShopForm;