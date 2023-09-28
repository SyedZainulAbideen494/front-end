import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Productsapp from "../items.js/productsApp";
import Axios from "axios";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import './template6.css'
import logo from '../header/images/Dropment (2).png'
import header2banner from '../header/images/fashion1.png'
import r1 from '../header/images/Untitled design (2).png'
import r2 from '../header/images/Untitled design (6).png'
import r3 from '../header/images/Untitled design (4).png' 
import r4 from '../header/images/Untitled design (5).png'
import r5 from '../header/images/Untitled design (9).png'
import img1 from '../header/images/ffri (1).png'
import img2 from '../header/images/ffri (2).png'



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
             to={`/products/${item.id}/${item.title}/${item.price}/${item.shop_id}`}
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
          <AddLogo/>
                    <Addimage1/>
          <Addimage2/>
          <Addimage3/>
          <Addimage4/>
          <Addimage5/>
          <Addimage6/>
          <Addimage7/>
          <Addimage8/>
          <Addimage9/>
          <Addimage10/>
          <Addimage11/>
          <Addimage12/>
          <Addimage13/>
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
 const Addimage6 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg6", formData, {
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
      <h2>ADD Image 6</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 6</label>
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
 
 const Addimage7 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg7", formData, {
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
      <h2>ADD Image 7</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 7</label>
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
 
 const Addimage8 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg8", formData, {
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
      <h2>ADD Image 8</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 8</label>
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
 
 const Addimage9 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg9", formData, {
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
      <h2>ADD Image 9</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 9</label>
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
 
 const Addimage10 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg10", formData, {
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
      <h2>ADD Image 10</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 10</label>
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
 
 const Addimage11 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg11", formData, {
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
      <h2>ADD Image 11</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 11</label>
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
 const Addimage12 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg12", formData, {
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
      <h2>ADD Image 12</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 12</label>
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
 
 const Addimage13 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addshopimg13", formData, {
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
      <h2>ADD Image 13</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 13</label>
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
 

const TestProducts = (props) => {
  return (
    <div className="productmodeltemp6">
      <li>
        <div className="productimgtemp6">
          <img src={r1}/>
        </div>
        <div className="product__titletemp6">
          <h2>title</h2>
        </div>
        <div className="product__amounttemp6">
          <h3>$30</h3>
        </div>
      </li>
    </div>
  );
};

const Template6website = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

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

    const params = useParams()

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
            images8: `http://localhost:8080/images/${itemsdata.images8}`,
            images9: `http://localhost:8080/images/${itemsdata.images9}`,
            images10: `http://localhost:8080/images/${itemsdata.images10}`,
            images11: `http://localhost:8080/images/${itemsdata.images11}`,
            images12: `http://localhost:8080/images/${itemsdata.images12}`,
            images13: `http://localhost:8080/images/${itemsdata.images13}`,
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
            insta: itemsdata.insta,
            salestext: itemsdata.salestext,
            temp6: itemsdata.temp6
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
  

  return (
    <Fragment>
      <Editbtndisplay1/>
      <div className="temp6base">
       <div className="header1temp6">
        <header>
          <img src={items[0]?.images1} alt="image 1"/>
          <h1>{items[0]?.shop_name}</h1>
          <ul>
            <li><button>Products</button></li>
            <li><button>About us</button></li>
            <li><button>Contact us</button></li>
          </ul>
        </header>
       </div>
       <div className="header2temp6">
        <div className="textsectionheader2temp6">
          <section>
          <h1 className="salestext">{items[0]?.salestext}</h1>
          <h1>{items[0]?.shop_tagline}</h1>
          </section>
        </div>
        <div className="temp6header2img">
          <section>
          <img src={items[0]?.images2} alt="image 2"/>
          </section>
        </div>
       </div>
       <div className="roundimgtemp6">
        <div className="roundkey1temp6">
        <section><img src={items[0]?.images3} alt="image 3"/></section>
        </div>
        <div className="roundkey2temp6">
        <section><img src={items[0]?.images4}/></section>
        </div>
        <div className="roundkey3temp6">
        <section><img src={items[0]?.images5} alt="image 4"/></section>
        </div>
        <div className="roundkey4tmep6">
        <section><img src={items[0]?.images6} alt="image 6"/></section>
        </div>
       </div>
       <div className="temp6keys">
       <div className="key1temp6">
        <h2>{items[0]?.shop_keyhead1}</h2>
        <p>{items[0]?.shop_key1}</p>
       </div>
       <div className="key1temp6">
        <h2>{items[0]?.shop_keyhead2}</h2>
        <p>{items[0]?.shop_key2}</p>
       </div>
       <div className="key3temp6">
        <h2>{items[0]?.shop_keyhead3}</h2>
        <p>{items[0]?.shop_key3}</p>
       </div>
       </div>
       <div className="abtus1temp6">
        <div className="abt1no1temp6">
          <div className="abt1no1temp6img">
            <img src={items[0]?.images7} alt="image 7"/>
          </div>
          <div className="abt1no1text">
            <h1>{items[0]?.shop_blockhead1}</h1>
            <p>{items[0]?.shop_block1}</p>
          </div>
        </div>
        <div className="abt1no2temp6">     
          <div className="abt1no2text">
            <h1>{items[0]?.shop_blockhead2}</h1>
            <p>{items[0]?.shop_block2}</p>
          </div>
          <div className="abt1no2temp6img">
            <img src={items[0]?.images8} alt="image 8"/>
          </div>
        </div>
        <div className="abt1no1temp6">
          <div className="abt1no1temp6img">
            <img src={items[0]?.images9} alt="image 9"/>
          </div>
          <div className="abt1no1text">
            <h1>{items[0]?.shop_blockhead3}</h1>
            <p>{items[0]?.shop_block3}</p>
          </div>
        </div>
       </div>
        <div className="prodstemp6section">
          <h1>Our products</h1>
          <p>Our latest and best selling products</p>
          <Productsinshopapp/>
        </div>
        <div className="imagestemp6">
          <img src={items[0]?.images10} alt="image 10"/>
          <img src={items[0]?.images11} about="image 11"/>
          <img src={items[0]?.images12} alt="image 12"/>
          <img src={items[0]?.images13} alt="image 13"/>
        </div>
        <div className="footertemp6">
          <footer>
            <h2>Contact us</h2>
            <ul>
              <li>{items[0]?.insta}</li>
              <li>{items[0]?.shop_email}</li>
              <li>{items[0]?.shop_phone}</li>
            </ul>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}
export default Template6website;