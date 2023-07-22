import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Productsapp from "../items.js/productsApp";
import dummyItem from "../../home/header/images/download.jpg";
import Axios from "axios";
import tick from '../../home/header/images/301-3011315_icon-check-green-tick-transparent-background.png'
import fashion2 from '../../home/header/images/Untitled design.png'
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import fashion1 from '../../home/header/images/fashion1.jpg'
import block1img from '../../home/header/images/Untitled design (2).png'
import './template8.css'
import fashion3 from "../../home/header/images/Untitled design.png";
import fashion4 from '../header/images/pet6.png'
import digital from '../header/images/servi4.png'

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
        "https://backend-zain-production.up.railway.app/updateshop1",
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
        Authorization: params.id,
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
    <Fragment>
      <Saleshead />
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
              to={`/saleschat/${itemdata.orders_id}/${itemdata.name}/${itemdata.Phone}/${itemdata.Email}/${itemdata.streetadrs}/${itemdata.city}/${itemdata.state}/${itemdata.zipcode}/${itemdata.country}/${itemdata.id}/${itemdata.product}/${itemdata.sender_id}/${itemdata.shop_id}/${itemdata.message}`}
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
      <div className="item">
        <h2>{props.product}</h2>
        <h2>{props.name}</h2>
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
 const [price, setPrice] = useState("");
 const [amount, setAmount] = useState("");
 const [image, setImage] = useState(null);

 const shopId = props.shop_id; // Assuming you're passing shopId as a prop

 const params = useParams();

 const addProductHandler = (e) => {
   e.preventDefault();

   const formData = new FormData();
   formData.append("image", image);
   formData.append("title", title);
   formData.append("price", price);
   formData.append("amount", amount);

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
     <h2>ADD NEW ITEM</h2>
     <form onSubmit={addProductHandler}>
       <label>Product Title</label>
       <input
         type="text"
         placeholder="Product title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
       />

       <label>Product Price</label>
       <input
         type="text"
         placeholder="Product Decription"
         value={price}
         onChange={(e) => setPrice(e.target.value)}
       />

       <label>Product Quantity</label>
       <input
         type="text"
         placeholder="Product amount"
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
       />

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
  return (
    <div className="productmodeltemp4">
      <li>
        <div className="productimgtemp4">
          <img src={props.images} alt="Product Image" />
        </div>
        <div className="product__titletemp4">
          <h2>{props.title}</h2>
        </div>
        <div className="product__amounttemp4">
          <p>{props.price}</p>
        </div>
      </li>
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
              to={`/products/${item.id}/${item.title}/${item.price}/${item.shop_id}/`}
            >
              <Products
                id={item.id}
                title={item.title}
                amount={item.amount}
                price={item.price}
                shop_id={item.shop_id}
                images={item.images}
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

  const showformhandler = () => {
    setshowform(true);
  };

  const hideformhandler = () => {
    setshowform(false);
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
                    <button onClick={showsaleshandler}>Sales</button>
                  </span>
                  <span className="btnwebstore">
                    <button onClick={showformhandler}>Add Item</button>
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

const TestProducts = (props) => {
  return (
    <div className="productmodeltemp8">
      <div className="productimgtemp8">
        <img src={digital} alt="Product Image" />
      </div>
      <div className="product__titletemp8">
        <h2>Service name</h2>
      </div>
      <div className="product__amounttemp4">
        <p>Detials About the service mentioned above </p>
      </div>
    </div>
  );
};


const Template8website = (props) => {
    const [user, setname] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [email, setemail] = useState("");
    const [streetadrs, setstreetsdrs] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [country, setcountry] = useState("");
    const [id, setid] = useState("");
    const [title, setitle] = useState("");
    const [shop_id, setshop_id] = useState("");

    const nameHandler = (event) => {
      setname(event.target.value);
    };

    const phoneNohandler = (event) => {
      setphoneno(event.target.value);
    };

    const emailhandler = (event) => {
      setemail(event.target.value);
    };

    const streetaddress = (event) => {
      setstreetsdrs(event.target.value);
    };

    const cityadrs = (event) => {
      setcity(event.target.value);
    };

    const stateadrs = (event) => {
      setstate(event.target.value);
    };

    const zipcodeadrs = (event) => {
      setzipcode(event.target.value);
    };

    const counrtyadrs = (event) => {
      setcountry(event.target.value);
    };

    const params = useParams();

    useEffect(() => {
      setid(params.id);
    }, [params.id]);
    useEffect(() => {
      setitle(params.title);
    }, [params.title]);
    useEffect(() => {
      setshop_id(params.shop_id);
    }, [params.shop_id]);


         const token = localStorage.getItem("token");

         const orderhandler = () => {
           Axios.post(
             "http://localhost:8080/orders",
             {
               name: user,
               Phone: phoneno,
               Email: email,
               streetadrs: streetadrs,
               city: city,
               state: state,
               zipcode: zipcode,
               country: country,
               id: id,
               product: title,
               shop_id: shop_id,
             },
             {
               headers: {
                 Authorization: token,
               },
             }
           );
         };

          const itemsRef = useRef(null);
          const aboutusRef = useRef(null);
          const contactusRef = useRef(null);

          const scrollToItems = () => {
            if (itemsRef.current) {
              itemsRef.current.scrollIntoView({ behavior: "smooth" });
            }
          };
          const scrollToaboutus = () => {
            if (aboutusRef.current) {
              aboutusRef.current.scrollIntoView({ behavior: "smooth" });
            }
          };
          const scrollTocontactus = () => {
            if (contactusRef.current) {
              contactusRef.current.scrollIntoView({ behavior: "smooth" });
            }
          };

  return (
    <Fragment>
      <div className="header2temp8">
        <header>
          <div className="shopnametemp8">
            <h1>Shop name</h1>
          </div>
          <div className="temp8header1btns">
            <span>
              <button onClick={scrollToaboutus}>About us</button>
            </span>
            <span>
              <button onClick={scrollToItems}>Our Services</button>
            </span>
            <span>
              <button onClick={scrollTocontactus}>Get in touch</button>
            </span>
          </div>
        </header>
      </div>
      <div className="header1temp8">
        <header>
          <div className="imgoftemp8header">
            <section></section>
          </div>
          <div className="shoptaglinetemp8">
            <h2>Get the best ROI Sevices(tagline line1)</h2>
            <br />
            <h2>Line 2</h2>
            <br />
            <h2>Line 3</h2>
          </div>
        </header>
      </div>
      <div className="aboutus" ref={aboutusRef}>
        <div className="trustcards">
          <div className="card1">
            <section></section>
            <div className="texttrustcard1">
              <h2>Service check</h2>
              <p>Details</p>
            </div>
          </div>
          <div className="card1">
            <section></section>
            <div className="texttrustcard1">
              <h2>Service check</h2>
              <p>Details</p>
            </div>
          </div>
          <div className="card1">
            <section></section>
            <div className="texttrustcard1">
              <h2>Service check</h2>
              <p>Details</p>
            </div>
          </div>
        </div>
        <div className="blockabt1temp8">
          <div className="block1temp8">
            <section className="blockabtno11tep8">
              <div className="abtblock1no1headtemp8">
                <h1>Heading block 1</h1>
              </div>
              <div className="bodytxtheadblock1temp8">
                <h3>details about your heading written above</h3>
              </div>
            </section>
            <section className="imgblock1abt1temp8"></section>
          </div>
          <div className="block2abtno1temp8">
            <section className="temp8imgblock2no1"></section>
            <section>
              <div className="block2no1abtemp8head">
                <h1>Heading block 2</h1>
              </div>
              <div className="block2no1abttemp8txt">
                <h3>details about your heading written above</h3>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="sevricestemp8" ref={itemsRef}>
        <div className="servicestemp8tetx">
          <h2>Our Services</h2>
        </div>
        <div className="seriveswepeovidetemp8">
          <TestProducts />
        </div>
      </div>
      <Fragment>
        <div className="formordertemp8" ref={contactusRef}>
          <div className="headingofgetintouchtemp8">
            <h2>Get in touch</h2>
          </div>
          <form onSubmit={orderhandler}>
            <div className="nametemp8">
              <h2>{props.prodsdetails}</h2>
              <label>Name</label>
              <br />
              <input type="text" value={user} onChange={nameHandler} />
            </div>
            <div className="phonetemp8">
              <label>Phone number</label>
              <br />
              <input type="number" value={phoneno} onChange={phoneNohandler} />
            </div>
            <div className="emailtemp8">
              <label>Email</label>
              <br />
              <input type="email" value={email} onChange={emailhandler} />
            </div>
            <div className="addresstemp8">
              <label>Address</label>
              <br />
              <input
                type="text"
                placeholder="street address"
                value={streetadrs}
                onChange={streetaddress}
              />
              <br />
              <input
                type="text"
                placeholder="city"
                value={city}
                onChange={cityadrs}
              />
              <br />
              <input
                type="text"
                placeholder="state/ province"
                value={state}
                onChange={stateadrs}
              />
              <br />
              <input
                type="number"
                placeholder="Zip code/ postal"
                value={zipcode}
                onChange={zipcodeadrs}
              />
              <br />
              <input
                type="text"
                placeholder="country"
                value={country}
                onChange={counrtyadrs}
              />
            </div>
            <div className="btntemp8">
              <span className="placeordbtntemp8">
                <button type="submit">Get in touch</button>
              </span>
            </div>
          </form>
        </div>
      </Fragment>
    </Fragment>
  );
}
export default Template8website;