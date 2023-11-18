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

const CustomShop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const params = useParams();
  const shopId = params.shop_id; // Replace with actual shop ID
  const userId = 123; // Replace with actual user ID

  useEffect(() => {
    axios.post(`http://localhost:8080/updateVisits/${shopId}`)
      .then((response) => {
        console.log(response.data);
        // Handle success, maybe show a success message or update state
      })
      .catch((error) => {
        console.error('Error updating shop visits: ', error);
        // Handle error, maybe show an error message
      });
  }, [shopId]);

  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:8080/custom/shop/display`, {
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
        section13: itemsdata.section13,
        background_clr: itemsdata.background_clr
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, [token]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

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
      return
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
      return 
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
      return 
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
      return 
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
      return 
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
      return 
    }
  }

  const Section13 = () => {
    if (items[0]?.section13 === '1') {
      return <Footer1Footer />
    } else {
      return
    }
  }

  const Editstoreform = () => {
    const params = useParams();
  
    const [shop_name, setname] = useState("");
    const [shop_owner, setowner] = useState("");
    const [shop_tagline, setshop_tagline] = useState("");
    const [shop_blockhead2, setshop_blockheading2] = useState("");
    const [shop_blockhead3, setshop_blockheading3] = useState("");
    const [shop_blockhead1, setshop_blockheading1] = useState("");
    const [shop_block1, setshop_block1] = useState("");
    const [shop_block2, setshop_block2] = useState("");
    const [shop_block3, setshop_block3] = useState("");
    const [shop_key1, setshop_key1] = useState("");
    const [shop_keyhead1, setshp_keyhead1] = useState("");
    const [shop_key2, setshop_key2] = useState("");
    const [shop_keyhead2, setshop_keyhead2] = useState("");
    const [shop_key3, setshop_key3] = useState("");
    const [shop_keyhead3, setshop_keyhead3] = useState("");
    const [shop_email, setshop_email] = useState("");
    const [shop_phone, setshop_phone] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await Axios.put(
          "http://localhost:8080/updateshop1",
          {
            shop_name: shop_name,
            shop_owner: shop_owner,
            shop_tagline: shop_tagline,
            shop_blockhead2: shop_blockhead2,
            shop_block2: shop_block2,
            shop_blockhead3: shop_blockhead3,
            shop_blockhead1: shop_blockhead1,
            shop_block1: shop_block1,
            shop_keyhead1: shop_keyhead1,
            shop_key1: shop_key1,
            shop_keyhead2: shop_keyhead2,
            shop_key2: shop_key2,
            shop_keyhead3: shop_keyhead3,
            shop_key3: shop_key3,
            shop_email: shop_email,
            shop_phone: shop_phone,
          },
          {
            headers: {
              Authorization: params.shop_id,
            },
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setMessage("Error updating data.");
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={shop_name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_owner}
            onChange={(e) => setowner(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_tagline}
            onChange={(e) => setshop_tagline(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_blockhead1}
            onChange={(e) => setshop_blockheading1(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_block1}
            onChange={(e) => setshop_block1(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_blockhead2}
            onChange={(e) => setshop_blockheading2(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={shop_block2}
            onChange={(e) => setshop_block2(e.target.value)}
            placeholder="price"
          />
          <input
            type="text"
            value={shop_blockhead3}
            onChange={(e) => setshop_blockheading3(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_block3}
            onChange={(e) => setshop_block3(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_keyhead1}
            onChange={(e) => setshp_keyhead1(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_key1}
            onChange={(e) => setshop_key1(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_keyhead2}
            onChange={(e) => setshop_keyhead2(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_key2}
            onChange={(e) => setshop_key2(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_keyhead3}
            onChange={(e) => setshop_keyhead3(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_key3}
            onChange={(e) => setshop_key3(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_email}
            onChange={(e) => setshop_email(e.target.value)}
            placeholder="amount"
          />
          <input
            type="text"
            value={shop_phone}
            onChange={(e) => setshop_phone(e.target.value)}
            placeholder="amount"
          />
          <button type="submit">Update</button>
        </form>
        <p>{message}</p>
      </div>
    );
  };

  const Editbtndisplay = () => {
    const params = useParams();
    const [showEditItem, setShowEditItem] = useState(false);
    const [name, setName] = useState([]);
    const [name2, setName2] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchUsersHandler = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `http://localhost:8080/user/id/editbtnstoredisplay1`,
            {
              headers: {
                Authorization: params.id,
              },
            }
          );
          const data = await response.json();
          const transformedUser = data.shops.map((userdata) => {
            return {
              user_id: userdata.user_id,
            };
          });
          setName(transformedUser);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsersHandler();
    }, [params.id]);
  
    useEffect(() => {
      const fetchUsers2Handler = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:8080/user/id/editbtnstoredisplay2",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const data = await response.json();
          const transformedUser2 = data.users.map((userdata) => {
            return {
              user_id: userdata.user_id,
            };
          });
          setName2(transformedUser2);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers2Handler();
    }, []);
  
    const showEdit = () => {
      setShowEditItem(true);
    };
  
    const hideEdit = () => {
      setShowEditItem(false);
    };
  
    const EEditbtn = () => {
      if (
        name.length > 0 &&
        name2.length > 0 &&
        name[0].user_id === name2[0].user_id
      ) {
      } else {
        return <button onClick={showEdit}>Edit</button>;
      }
    };
  
    return (
      <div>
        {!loading ? <EEditbtn /> : <p>Loading...</p>}
        {showEditItem && <Editstoreform />}
      </div>
    );
  };
  
  const Sales = (props) => {
    const [loading, setloading] = useState(false);
    const [orders, setorders] = useState([]);
    const [token, settoken] = useState("");
    const params = useParams();
  
    const fetchusershandler = useCallback(async () => {
      setloading(true);
  
      setloading(true);
      const response = await fetch("http://localhost:8080/myorders", {
        headers: {
          Authorization: params.shop_id,
        },
      });
      const data = await response.json();
      const transformeduser = data.sales.map((userdata) => {
        return {
          orders_id: userdata.orders_id,
          name: userdata.name,
          Phone: userdata.Phone,
          Email: userdata.Email,
          streetadrs: userdata.streetadrs,
          city: userdata.city,
          state: userdata.state,
          zipcode: userdata.zipcode,
          country: userdata.country,
          id: userdata.id,
          product: userdata.product,
          sender_id: userdata.sender_id,
          shop_id: userdata.shop_id,
          message: userdata.message,
        };
      });
      setorders(transformeduser);
      setloading(false);
    }, []);
  
    useEffect(() => {
      fetchusershandler();
    }, []);
  
    return (
      <Fragment><div className="closebtn">
      <button onClick={props.onClick}>close</button>
    </div>
        <h2>My store sales</h2>
  
        <section>
          {!loading && <Saleslist Sales={orders} />}
          {loading && <p>Loading..</p>}
        </section>
      </Fragment>
    );
  };
  
  const Salesbtn = (props) => {
    return (
      <Fragment>
        <div className="salesbtn">
          <button type={props.type || "button"} onClick={props.onClick}>
            {props.children}
          </button>
        </div>
      </Fragment>
    );
  };
  
  const Saleshead = (props) => {
    return (
      <Fragment>
        <div className="salesheader">
          <header>
            <div className="salesheaderbtn">
              <span className="headtxtsales">
                <h2>My Sales</h2>
              </span>
              <span className="backbtnsales">
                <Salesbtn>Back</Salesbtn>
              </span>
              <span className="productsbtnsales">
                <Salesbtn>Products</Salesbtn>
              </span>
              <span className="statsbtnsales">
                <Salesbtn>Stats</Salesbtn>
              </span>
              <span className="editstorebtnsales">
                <Salesbtn>edit store</Salesbtn>
              </span>
            </div>
          </header>
        </div>
      </Fragment>
    );
  };
  
  const Saleslist = (props) => {
    return (
      <Fragment>
        <div>
          <ul>
            {props.Sales.map((itemdata) => (
              <Link
                to={`/saleschat/${itemdata.orders_id}`}
                style={{textDecoration: 'none', color: 'black'}}
              >
                <Solditems
                  orders_id={itemdata.orders_id}
                  name={itemdata.name}
                  Phone={itemdata.Phone}
                  Email={itemdata.Email}
                  streetadrs={itemdata.streetadrs}
                  city={itemdata.city}
                  state={itemdata.state}
                  zipcode={itemdata.zipcode}
                  country={itemdata.country}
                  id={itemdata.id}
                  product={itemdata.product}
                  sender_id={itemdata.sender_id}
                  shop_id={itemdata.shop_id}
                  message={itemdata.message}
                />
              </Link>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  };
  
  const Solditems = (props) => {
    return (
      <Fragment>
        <div className="itemsold">
          <h2>Sold Item</h2>
          <h2>{props.product}</h2>
        </div>
      </Fragment>
    );
  };
  
  function Productsinshopapp() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
  
    const fetchProductsHandler = useCallback(async () => {
      setLoading(true);
  
      try {
        const response = await fetch("http://localhost:8080/use/shops/products", {
          headers: {
            Authorization: params.shop_id,
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
  
        const data = await response.json();
        const transformedItems = data.items.map((itemsData) => {
          return {
            id: itemsData.id,
            title: itemsData.title,
            price: itemsData.price,
            amount: itemsData.quantity,
            shop_id: itemsData.shop_id,
            images: `http://localhost:8080/images/${itemsData.images}`,
            usd: itemsData.usd,
            EUR: itemsData.EUR,
            GBP: itemsData.GBP,
            JPY: itemsData.JPY,
            CAD: itemsData.CAD,
            AUD: itemsData.AUD,
            CHF: itemsData.CHF,
            CNY: itemsData.CNY,
            INR: itemsData.INR,
            BRL: itemsData.BRL,
            RUB: itemsData.RUB,
            KRW: itemsData.KRW,
            SGD: itemsData.SGD,
            NZD: itemsData.NZD,
            MXN: itemsData.MXN,
            HKD: itemsData.HKD,
            TRY: itemsData.TRY,
            ZAR: itemsData.ZAR,
            SEK: itemsData.SEK,
            NOK: itemsData.NOK,
          };
        });
  
        setItems(transformedItems);
      } catch (error) {
        console.log(error);
      }
  
      setLoading(false);
    }, []);
  
    useEffect(() => {
      fetchProductsHandler();
    }, [fetchProductsHandler]);
  
    return (
      <Fragment>
        <section>
          {!loading ? <ProductList items={items} /> : <p>Loading..</p>}
        </section>
      </Fragment>
    );
  }
  const Addproductstodatabase = (props) => {
    const [title, setTitle] = useState("");
    const [usd, setUSD] = useState("");
    const [EUR, setEUR] = useState("");
    const [GBP, setGBP] = useState("");
    const [JPY, setJPY] = useState("");
    const [CAD, setCAD] = useState("");
    const [AUD, setAUD] = useState("");
    const [CHF, setCHF] = useState("");
    const [CNY, setCNY] = useState("");
    const [INR, setINR] = useState("");
    const [BRL, setBRL] = useState("");
    const [RUB, setRUB] = useState("");
    const [KRW, setKRW] = useState("");
    const [SGD, setSGD] = useState("");
    const [NZD, setNZD] = useState("");
    const [MXN, setMXN] = useState("");
    const [HKD, setHKD] = useState("");
    const [TRY, setTRY] = useState("");
    const [ZAR, setZAR] = useState("");
    const [SEK, setSEK] = useState("");
    const [NOK, setNOK] = useState("");
    const [amount, setAmount] = useState("");
    const [image, setImage] = useState(null);
    const [payment, setpayment] = useState('')
    const [product_description, setproduct_description] = useState('')
   
    const shopId = props.shop_id; // Assuming you're passing shopId as a prop
   
    const params = useParams();
   
    const addProductHandler = (e) => {
      e.preventDefault();
   
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("amount", amount);
      formData.append("payment", payment)
      formData.append("usd", usd);
      formData.append("EUR", EUR);
      formData.append("GBP", GBP);
      formData.append("JPY", JPY);
      formData.append("CAD", CAD);
      formData.append("AUD", AUD);
      formData.append("CHF", CHF);
      formData.append("CNY", CNY);
      formData.append("INR", INR);
      formData.append("BRL", BRL);
      formData.append("RUB", RUB);
      formData.append("KRW", KRW);
      formData.append("SGD", SGD);
      formData.append("NZD", NZD);
      formData.append("MXN", MXN);
      formData.append("HKD", HKD);
      formData.append("TRY", TRY);
      formData.append("ZAR", ZAR);
      formData.append("SEK", SEK);
      formData.append("NOK", NOK);
      formData.append("product_description", product_description)
   
      Axios.post("http://localhost:8080/addProduct", formData, {
        headers: {
          Authorization: params.shop_id,
        },
      })
        .then((response) => {
          console.log(response.data);
          // Handle success
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          // Handle error
        });
    };
   
    return (
      <div>
        <div className="closebtn">
          <button onClick={props.onClick}>Close</button>
        </div>
        <h2>ADD NEW ITEM</h2>
        <form onSubmit={addProductHandler}>
          <label>Product Title</label>
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br/>
   
          <label>Product Quantity</label>
          <input
            type="text"
            placeholder="Product Quantity"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          /><br/>
          <label>Enter your stripe payment url</label>
          <input
            type="text"
            placeholder="Enter your stripe payment url"
            value={payment}
            onChange={(e) => setpayment(e.target.value)}
          /><br/>
          <label>Enter description below 2000 words</label>
          <input
            type="text"
            placeholder="Enter description below 2000 words"
            value={product_description}
            onChange={(e) => setproduct_description(e.target.value)}
          /><br/>
          <h3>Price (please enter the price only where you want to sell your products)</h3>
          <label>USD</label>
          <input
            type="text"
            placeholder="USD"
            value={usd}
            onChange={(e) => setUSD(e.target.value)}
          /><br/>
          <label>EUR</label>
          <input
            type="text"
            placeholder="EUR"
            value={EUR}
            onChange={(e) => setEUR(e.target.value)}
          /><br/>
          <label>GBP</label>
          <input
            type="text"
            placeholder="GBP"
            value={GBP}
            onChange={(e) => setGBP(e.target.value)}
          /><br/>
          <label>JPY</label>
          <input
            type="text"
            placeholder="JPY"
            value={JPY}
            onChange={(e) => setJPY(e.target.value)}
          /><br/>
          <label>CAD</label>
          <input
            type="text"
            placeholder="CAD"
            value={CAD}
            onChange={(e) => setCAD(e.target.value)}
          /><br/>
          <label>AUD</label>
          <input
            type="text"
            placeholder="AUD"
            value={AUD}
            onChange={(e) => setAUD(e.target.value)}
          /><br/>
          <label>CHF</label>
          <input
            type="text"
            placeholder="CHF"
            value={CHF}
            onChange={(e) => setCHF(e.target.value)}
          /><br/>
          <label>CNY</label>
          <input
            type="text"
            placeholder="CNY"
            value={CNY}
            onChange={(e) => setCNY(e.target.value)}
          /><br/>
          <label>INR</label>
          <input
            type="text"
            placeholder="INR"
            value={INR}
            onChange={(e) => setINR(e.target.value)}
          /><br/>
          <label>BRL</label>
          <input
            type="text"
            placeholder="BRL"
            value={BRL}
            onChange={(e) => setBRL(e.target.value)}
          /><br/>
          <label>RUB</label>
          <input
            type="text"
            placeholder="RUB"
            value={RUB}
            onChange={(e) => setRUB(e.target.value)}
          /><br/>
          <label>Price in KRW</label>
          <input
            type="text"
            placeholder="Price in KRW"
            value={KRW}
            onChange={(e) => setKRW(e.target.value)}
          /><br/>
          <label>Price in SGD</label>
          <input
            type="text"
            placeholder="Price in SGD"
            value={SGD}
            onChange={(e) => setSGD(e.target.value)}
          /><br/>
          <label>Price in NZD</label>
          <input
            type="text"
            placeholder="Price in NZD"
            value={NZD}
            onChange={(e) => setNZD(e.target.value)}
          /><br/>
          <label>Price in MXN</label>
          <input
            type="text"
            placeholder="Price in MXN"
            value={MXN}
            onChange={(e) => setMXN(e.target.value)}
          /><br/>
          <label>Price in HKD</label>
          <input
            type="text"
            placeholder="Price in HKD"
            value={HKD}
            onChange={(e) => setHKD(e.target.value)}
          /><br/>
          <label>Price in TRY</label>
          <input
            type="text"
            placeholder="Price in TRY"
            value={TRY}
            onChange={(e) => setTRY(e.target.value)}
          /><br/>
          <label>Price in TRY</label>
          <input
            type="text"
            placeholder="Price in TRY"
            value={TRY}
            onChange={(e) => setTRY(e.target.value)}
          /><br/>
          <label>Price in SEK</label>
          <input
            type="text"
            placeholder="Price in SEK"
            value={SEK}
            onChange={(e) => setSEK
              (e.target.value)}
          /><br/>
          <label>Price in NOK</label>
          <input
            type="text"
            placeholder="Price in NOK"
            value={NOK}
            onChange={(e) => setNOK(e.target.value)}
          />       <br/> 
  
          <label>Image</label>
          <input
            type="file"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
   
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
   };
   
  
   const Products = (props) => {
    const Pricing = ({ country }) => {
      if (country === "India") {
        return <h3>{props.INR} ₹</h3>;
      } else if (country === "europe") {
        return <h3>{props.EUR} €</h3>;
      } else if (country === "united kingdom") {
        return <h3>{props.GBP} £</h3>;
      } else if (country === "japan") {
        return <h3>{props.JPY} ¥</h3>;
      } else if (country === "canada") {
        return <h3>{props.CAD} CAD</h3>;
      } else if (country === "australia") {
        return <h3>{props.AUD} AUD</h3>;
      } else if (country === "switzerland") {
        return <h3>{props.CHF} Fr</h3>;
      } else if (country === "china") {
        return <h3>{props.CNY} ¥</h3>;
      } else if (country === "brazil") {
        return <h3>{props.BRL} R$</h3>;
      } else if (country === "south korea") {
        return <h3>{props.KRW} ₩</h3>;
      } else if (country === "singapore") {
        return <h3>{props.SGD} SGD</h3>;
      } else if (country === "new zealand") {
        return <h3>{props.NZD} NZD</h3>;
      } else if (country === "mexico") {
        return <h3>{props.MXN} MXN</h3>;
      } else if (country === "hong kong") {
        return <h3>{props.HKD} HKD</h3>;
      } else if (country === "turkey") {
        return <h3>{props.TRY} ₺</h3>;
      } else if (country === "south africa") {
        return <h3>{props.ZAR} R</h3>;
      } else if (country === "sweden") {
        return <h3>{props.SEK} kr</h3>;
      } else if (country === "norway") {
        return <h3>{props.NOK} kr</h3>;
      } else {
        return <h3>{props.USD} $</h3>;
      }
    };
  
    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchUsersHandler = useCallback(async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      try {
        const response = await fetch("http://localhost:8080/users/", {
          headers: {
            Authorization: token,
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
  
        const data = await response.json();
        const transformedUsers = data.user.map((userData) => {
          return {
            first_name: userData.first_name,
            last_name: userData.last_name,
            country: userData.country,
          };
        });
  
        setName(transformedUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
  
      setLoading(false);
    }, []);
  
    useEffect(() => {
      fetchUsersHandler();
    }, [fetchUsersHandler]);
  
    return (
      <div className="productmodeltemp3">
        {name.map((user, index) => (
          <li key={index}>
            <div className="productimgtemp3">
              <img src={props.images} alt="Product Image" />
            </div>
            <div className="product__titletemp3">
              <h2>{props.title}</h2>
            </div>
            <Pricing country={user.country} />
          </li>
        ))}
      </div>
    );
  };
  
  const ProductList = (props) => {
    return (
      <div className="productmodelul">
        <ul>
          {props.items.map((item) => (
            <div key={item.id}>
              <Link
               to={`/products/${item.id}/${item.shop_id}`}
              >
                <Products
                  id={item.id}
                  title={item.title}
                  amount={item.amount}
                  price={item.price}
                  shop_id={item.shop_id}
                  images={item.images}
                  payment={item.payment}
                  usd={item.usd}
                  EUR={item.EUR}
                  GBP={item.GBP}
                  JPY={item.JPY}
                  CAD={item.CAD}
                  AUD={item.AUD}
                  CHF={item.CHF}
                  CNY={item.CNY}
                  INR={item.INR}
                  BRL={item.BRL}
                  RUB={item.RUB}
                  KRW={item.KRW}
                  SGD={item.SGD}
                  NZD={item.NZD}
                  MXN={item.MXN}
                  HKD={item.HKD}
                  TRY={item.TRY}
                  ZAR={item.ZAR}
                  SEK={item.SEK}
                  NOK={item.NOK}
                />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  
  
  const Editbtndisplay1 = () => {
    const [showform, setshowform] = useState(false);
    const [showsales, setshowsales] = useState(false);
    const [showimg, setshowimg] = useState(false);
    const [ratingform, setRatingform] = useState(false)
  
    const showratingform = () => {
      setRatingform(true)
    }
  
    const hideratingform = () => {
      setRatingform(false)
    }
  
    const showformhandler = () => {
      setshowform(true);
    };
  
    const hideformhandler = () => {
      setshowform(false);
    };
  
    const showimghandler = () => {
      setshowimg(true);
    };
  
    const hideimghandler = () => {
      setshowimg(false);
    };
  
    const showsaleshandler = () => {
      setshowsales(true);
    };
  
    const hidesaleshandler = () => {
      setshowsales(false);
    };
    const nav = useNavigate();
    const params = useParams();
    const [showedititem, setshowitem] = useState(false);
  
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
    if (auth === false) {
      nav("/login");
    }
  
    const showedit = () => {
      setshowitem(true);
    };
    const hideedit = () => {
      setshowitem(false);
    };
    const [name, setname] = useState([]);
    const [name2, setname2] = useState([]);
    const [loading, setloading] = useState(false);
  
    useEffect(() => {
      const fetchUsersHandler = async () => {
        setloading(true);
        try {
          const response = await fetch(
            `http://localhost:8080/user/id/editbtndiaplay1`,
            {
              headers: {
                Authorization: params.shop_id,
              },
            }
          );
          const data = await response.json();
          const transformedUser = data.shops.map((userdata) => {
            return {
              user_id: userdata.user_id,
            };
          });
          setname(transformedUser);
        } catch (error) {
          console.error(error);
        } finally {
          setloading(false);
        }
      };
  
      fetchUsersHandler();
    }, [params.shop_id]);
  
    useEffect(() => {
      const fetchUser2sHandler = async () => {
        setloading(true);
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:8080/user/id/editbtndiaplay2",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const data = await response.json();
          const transformedUser2 = data.user.map((userdata) => {
            return {
              user_id: userdata.user_id,
            };
          });
          setname2(transformedUser2);
        } catch (error) {
          console.error(error);
        } finally {
          setloading(false);
        }
      };
  
      fetchUser2sHandler();
    }, []);
  
    const EEditbtn = () => {
      if (
        name.length > 0 &&
        name2.length > 0 &&
        name[0].user_id === name2[0].user_id
      ) {
        return (
          <Fragment>
            <div className="profile-header-owner">
              <header>
                <div className="shop_owner_view">
                  <h2>Control panel</h2>
                  <div className="shopownerbtn">
                    <span className="edit_store_btn"></span>
                    <span className="btnwebstore">
                      <Link to="/">
                        <button>Home</button>
                      </Link>
                    </span>
                    <span className="btnwebstore">
                      <Link to={`/admin/${params.shop_id}`}>
                      <button>Admin Menu</button>
                      </Link>
                    </span>
                    <span className="btnwebstore-addproducts">
                      <Link to={`/add/product/${params.shop_id}`}>
                      <button>Add Products +</button>
                      </Link>
                    </span>
                  </div>
                </div>
              </header>
            </div>
            <div className="sales">
              {showsales && <Sales onClick={hidesaleshandler} />}
            </div>
            <div className="addshopform">
              {showform && <Addproductstodatabase onClick={hideformhandler} />}
            </div>
            
          </Fragment>
        );
      } else {
        return;
      }
    };
  
    return <div>{!loading ? <EEditbtn /> : <p>Loading...</p>}</div>;
  };
  

  return (
       <>
      <Editbtndisplay1/>
  <div style={{ backgroundColor: items[0]?.background_clr }}>
    <section className="parts-custom-shop-main">
      <Section1 />
    </section>
    <section className="parts-custom-shop-main">
      <Section2 />
    </section>
    <section className="parts-custom-shop-main">
      <Section3 />
    </section>
    <section className="parts-custom-shop-main">
      <Section4 />
    </section>
    <section className="parts-custom-shop-main">
      <Section5 />
    </section>
    <section className="parts-custom-shop-main">
      <Section6 />
    </section>
    <section className="parts-custom-shop-main">
      <Section13 />
    </section>
  </div>
</>
  );
}

export default CustomShop;