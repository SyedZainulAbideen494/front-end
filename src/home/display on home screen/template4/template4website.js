import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import "./template4.css";
import Productsapp from "../items.js/productsApp";
import Axios from "axios";
import img1 from '../header/images/Untitled design (5).png'
import img2 from '../header/images/Untitled design (4).png'
import img3 from '../header/images/Untitled design (2).png'
import img4 from '../header/images/Untitled design (6).png'
import img5 from '../header/images/Untitled design (7).png'
import img6 from '../header/images/Untitled design (8).png'
import img7 from '../header/images/Untitled design (9).png'

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
          `https://backend-zain-production.up.railway.app/user/id/editbtnstoredisplay1`,
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
          "https://backend-zain-production.up.railway.app/user/id/editbtnstoredisplay2",
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
    const response = await fetch("https://backend-zain-production.up.railway.app/myorders", {
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
      const response = await fetch("https://backend-zain-production.up.railway.app/use/shops/products", {
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
          images: `https://backend-zain-production.up.railway.app/images/${itemsData.images}`,
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
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [amount, setamount] = useState("");
  const [images, setimage] = useState("");

  const params = useParams();

  const shop_id = useEffect(() => {
    setid(params.shop_id);
  }, []);

  const token = localStorage.getItem("token");

  const addshophandler = () => {
    const formdata = new FormData();
    formdata.append("image", images);
    formdata.append("title", title); // Add title field
    formdata.append("price", price); // Add price field
    formdata.append("amount", amount); // Add amount field
    Axios.post("https://backend-zain-production.up.railway.app/addProduct", formdata, {
      headers: {
        Authorization: params.shop_id,
      },
    });
  };
  return (
    <Fragment>
      <div className="formitemadd">
        <div className="txt12">
          <h2>ADD NEW ITEM</h2>
        </div>
        <div className="backbtn1212">
          <button onClick={props.onClick}>Close</button>
        </div>
        <form onSubmit={addshophandler}>
          <div className="txt">
            <label>Product Title</label>
          </div>
          <div className="inpt">
            <input
              type="txt"
              placeholder="Product title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <br />
          <div className="txt">
            <label>Product Price</label>
          </div>
          <div className="inpt">
            <input
              type="text"
              placeholder="Product price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <br />
          <div className="txt">
            <label>Product Quantity</label>
          </div>
          <div className="inpt">
            <input
              type="text"
              placeholder="Product amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <br />
          <div className="txt">
            <label>Image</label>
          </div>
          <div className="inpt">
            <input
              type="file"
              placeholder="image"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>
          <br />
          <div className="addprodsbtn">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

const Products = (props) => {
  return (
    <div className="productmodel">
      <li>
        <div className="productimg">
          <img src={props.images} alt="Product Image" />
        </div>
        <div className="product__title">
          <h2>{props.title}</h2>
        </div>
        <div className="product__amount">
          <h3>{props.price}</h3>
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

const TestProducts = (props) => {
  return (
    <div className="productmodel4">
      <li>
        <div className="productimg4">
          <img src={img4} alt="Product Image" />
        </div>
        <div className="product__title4">
          <h2>Name of the product</h2>
        </div>
        <div className="product__amount4">
          <h3>$23</h3>
        </div>
      </li>
    </div>
  );
};

const Template4website = (props) => {
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
  const itemsRef = useRef(null)
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

  const params = useParams();
  return (
    <Fragment>
      <div className="maintemp4">
        <main>
        <div className="temp4header1">
          <header>
            <h1>Shop Name</h1>
            <div className="btnstemp4head1">
              <ul>
                <li><button onClick={scrollToItems}>Products</button></li>
                <li><button onClick={scrollToaboutus}>About us</button></li>
                <li><button onClick={scrollTocontactus}>Contact us</button></li>
              </ul>
            </div>
          </header>
        </div>
        <div className="img2header2temp4">
          <header>
          <img src={img1}/>
          </header>
        </div>
        <div className="abtustemp4" ref={aboutusRef}>
          <div className="abtusno1part1">
            <span>
              <img src={img2}/>
            </span>
            <span>
              <h2>{params.shop_blockhead1}</h2>
              <p>{params.shop_block1}</p>
            </span>
          </div>
          <div className="abt1part2temp4">
          <span>
              <h2>{params.shop_blockhead2}</h2>
              <p>{params.shop_block2}</p>
            </span>
            <span>
              <img src={img3}/>
            </span>
          </div>
          <div className="abt1temp4part3">
            <span>
              <img src={img4}/>
            </span>
            <span>
              <h2>{params.shop_blockhead3}</h2>
              <p>{params.shop_block3}</p>
            </span>
          </div>
        </div>
        <div className="ourprodstemp4" ref={itemsRef}>
          <div className="prodstemp4text">
            <h1>Our Products</h1>
            <h4>Our latest and best selling products</h4>
          </div>
          <div className="ourprodstemp4section">
            <TestProducts/>
          </div>
        </div>
        <div className="maindivforgrtimgtemp4">
          <div className="temp4textgrtimg">
            <h2>{params.shop_keyhead1}</h2>
            <h4>{params.shop_key1}</h4>
          </div>
        <div className="greateimgtemp4">
          <section>
            <div className="grtimgtemp41">
            <img src={img5}/>
            </div>
          </section>
          <section>
          <div className="grtimgtemp42">
            <img src={img6}/>
            </div>
          </section>
          <section>
          <div className="grtimgtemp43">
            <img src={img7}/>
            </div>
          </section>
        </div>
        </div>
        <div className="footertemp4" ref={contactusRef}>
          <footer>
            <h2>Contact us</h2>
            <ul>
              <li>{params.insta}</li>
              <li>{params.shop_phone}</li>
              <li>{params.shop_email}</li>
            </ul>
          </footer>
        </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Template4website;
