import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Productsapp from "../items.js/productsApp";
import Axios from "axios";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import './template8.css'
import head2img from '../../home/header/images/The Indian Gent.jpg'
import key1img from '../../home/header/images/10 Outfit Ideas from Men Fashion Influencers - The Indian Gent.png'
import key2img from '../../home/header/images/key2img.jpg'


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
  const shopId = params.shop_id; // Replace with actual shop ID
  const userId = 123; // Replace with actual user ID

  useEffect(() => {
    Axios.post(`http://localhost:8080/updateVisits/${shopId}`)
      .then((response) => {
        console.log(response.data);
        // Handle success, maybe show a success message or update state
      })
      .catch((error) => {
        console.error('Error updating shop visits: ', error);
        // Handle error, maybe show an error message
      });
  }, [shopId]);
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
  return (
    <div className="productmodeltemp8">
      <li>
        <div className="productimgtemp8">
          <img src={props.images} alt="Product Image" />
        </div>
        <div className="product__titletemp8">
          <h2>{props.title}</h2>
        </div>
      </li>
    </div>
  );
};

const TestProducts = (props) => {
  return (
    <div className="productmodeltemp5">
      <li>
        <div className="product__titletemp5">
          <h2>title</h2>
        </div>
        <div className="product__amounttemp5">
          <h3>$30</h3>
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
              to={`/products/${item.id}/${item.shop_id}`}
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
                      <Link to={`/admin/${params.shop_id}`}>
                      <button>Admin Menu</button>
                      </Link>
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
          <AddLogo/>
          <Addimage1/>
          <Addimage2/>
          <Addimage3/>
          <Addimage4/>
          <Addimage5/>
        </Fragment>
      );
    } else {
      return;
    }
  };

  return <div>{!loading ? <EEditbtn /> : <p>Loading...</p>}</div>;
};

const AddLogo = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/add/shop/logo5", formData, {
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
      <h2>ADD Logo</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Logo</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Logo</button>
      </form>
    </div>
  );
 };

const Addimage1 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg1", formData, {
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
      <h2>ADD Image 1</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 1</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };
 const Addimage2 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg2", formData, {
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
      <h2>ADD Image 2</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 2</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };
 const Addimage3 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg3", formData, {
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
      <h2>ADD Image 3</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 3</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };
 const Addimage4 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg4", formData, {
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
      <h2>ADD Image 4</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 4</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };
 const Addimage5 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg5", formData, {
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
      <h2>ADD Image 5</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 5</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };

 const RatingForm = (props) => {
  const [itemId, setItemId] = useState('');
  const [rating, setRating] = useState('');

  const params = useParams()

  const shop_id = params.shop_id
  const user_id = props.user_id

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8080/api/ratings', { shop_id, rating, user_id });
      // Add logic to update UI or show success message
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Submit Rating</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>write a review</label>
          <input
            type="text"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />
        </div>
        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Template8website = (props) => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const params = useParams()
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
  

    const TestProducts = (props) => {
      return (
        <div className="productmodeltemp5">
          <li>
            <div className="productimgtemp5">
              <img src={key1img}/>
            </div>
            <div className="product__titletemp5">
              <h2>title</h2>
            </div>
            <div className="product__amounttemp5">
              <h3>$30</h3>
            </div>
          </li>
        </div>
      );
    };

    const fetchProdshandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/custom/img/shop", {
        headers: {
          Authorization: params.shop_id,
        },
      });
      const data = await response.json();
      const transformedItems = data.img.map((itemsdata) => {
        return {
          images1: `http://localhost:8080/images/${itemsdata.images1}`,
          images2: `http://localhost:8080/images/${itemsdata.images2}`,
          images3: `http://localhost:8080/images/${itemsdata.images3}`,
          images4: `http://localhost:8080/images/${itemsdata.images4}`,
          images5: `http://localhost:8080/images/${itemsdata.images5}`,
          images6: `http://localhost:8080/images/${itemsdata.images6}`,
          images7: `http://localhost:8080/images/${itemsdata.images7}`,
          shop_id: itemsdata.shop_id,
          shop_name: itemsdata.shop_name,
          shop_owner: itemsdata.shop_owner,
          shop_tagline: itemsdata.shop_tagline,
          shop_blockhead2: itemsdata.shop_blockhead2,
          shop_block2: itemsdata.shop_block2,
          shop_blockhead3: itemsdata.shop_blockhead3,
          shop_block3: itemsdata.shop_block3,
          user_id: itemsdata.user_id,
          shop_blockhead1: itemsdata.shop_blockhead1,
          shop_block1: itemsdata.shop_block1,
          shop_keyhead1: itemsdata.shop_keyhead1,
          shop_key1: itemsdata.shop_key1,
          shop_keyhead2: itemsdata.shop_keyhead2,
          shop_key2: itemsdata.shop_key2,
          shop_keyhead3: itemsdata.shop_keyhead3,
          shop_key3: itemsdata.shop_key3,
          shop_email: itemsdata.shop_email,
          shop_phone: itemsdata.shop_phone,
          temp5: itemsdata.temp5,
          insta: itemsdata.insta,
          salestext: itemsdata.salestext
        };
      });
      setItems(transformedItems);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    fetchProdshandler().finally(() => {
      setLoading(false);
    });
  }, [fetchProdshandler]);

  const [ratingform, setRatingform] = useState(false)

  const showratingform = () => {
    setRatingform(true)
  }

  const hideratingform = () => {
    setRatingform(false)
  }
    

  return (
    <Fragment>
      <Editbtndisplay1/>
      <div className="maindivtemp8">
        <div className="header1temp8">
          <header>
           <h1>Shop name</h1>
           <div className="taglintemp8">
           <h1>{items[0]?.salestext}</h1>
           <h3>{items[0]?.shop_tagline}</h3>
           <button>Our properties</button>
           </div>
          </header>
        </div>
        <div className="abt1temp8">
          <div className='imagesabt1temp8'>
          <img src={items[0]?.images1} alt="image 1" className="img1temp8abt1"/>
          <div className="img1temp8abt1">
          <img src={items[0]?.images2} alt="image 2" className="img1temp8abt1"/>
          </div>
          </div>
          <div className="abt1temp8textarea">
            <h1>{items[0]?.shop_blockhead1}</h1>
            <h4>{items[0]?.shop_block1}</h4>
            <p>{items[0]?.shop_blockhead2}</p>
            <button>About us</button>
          </div>
        </div>
        <div className="whatwedotemp8">
          <section>
            <div className="h3temp8whatwedo">
            <h3>What we do</h3>
            </div>
            <div className="h1whwedotext6temp8">
              <h1>{items[0]?.shop_block2}</h1>
            </div>
            <div className="whatwedoservicestemp8">
              <section className="textareawhatwedoparttemp8">
                <h2>{items[0]?.shop_keyhead1}</h2>
                <p>{items[0]?.shop_key1}</p>
              </section >
              <section className="textareawhatwedoparttemp8">
                <h2>{items[0]?.shop_keyhead2}</h2>
                <p>{items[0]?.shop_key2}</p>
              </section>
              <section className="textareawhatwedoparttemp8">
                <h2>{items[0]?.shop_keyhead3}</h2>
                <p>{items[0]?.shop_key3}</p>
              </section>
            </div>
            <div className="ourprojectstemp8">
            <h2>Our projects</h2>
            <div className="ourprojectsimgtemp8">
              <img src={items[0]?.images3} alt="image 3" />
              <img src={items[0]?.images4} alt="image 4"/>
              <img src={items[0]?.images5} alt="image 5"/>
            </div>
          </div>
          </section>
        </div>
        <div className="ourprodssectemp8">
          <h1>Our listings</h1>
          <Productsinshopapp/>
        </div>
        <div className="contactsectemp8">
          <footer>
            <h2>Contact us</h2>
            <ul>
              <li>{items[0]?.insta}</li>
              <li>{items[0]?.shop_phone}</li>
              <li>{items[0]?.shop_email}</li>
            </ul>
            <button onClick={showratingform}>Rate shop</button>
            <div className="review">
          {ratingform && <RatingForm onClick={hideratingform} />}
          </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Template8website;