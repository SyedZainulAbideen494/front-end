import { useParams, Link } from "react-router-dom";
import { Fragment, useState, useCallback, useEffect } from "react";
import Productsapp from "../items.js/productsApp";
import "./shopsowner.css";
import saz from "../../home/header/images/saz_logo.jpg";
import "./shopblock.css";
import Axios from "axios";
import dummyItem from "../../../src/home/header/images/download.jpg";
import ItemsDetails from "../items opened/itemsdetails";
import Edititemform from "../edit/edititem";

const Editstoreform = () => {
  const [shop_name, setshop_name] = useState([]);
  const [shop_owner, setshop_owner] = useState([]);
  const [shop_about, setshop_about] = useState([]);
  const [shop_prods, setshop_prods] = useState([]);
  const [message, setMessage] = useState("");

  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.put(
        "http://localhost:8080/updateshop1",
        {
          shop_name: shop_name,
          shop_owner: shop_owner,
          shop_about: shop_about,
          shop_prods: shop_prods,
        },
        {
          headers: {
            Authorization: params.id,
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
          onChange={(e) => setshop_name(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={shop_owner}
          onChange={(e) => setshop_owner(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={shop_about}
          onChange={(e) => setshop_about(e.target.value)}
          placeholder="amount"
        />
        <input
          type="text"
          value={shop_prods}
          onChange={(e) => setshop_prods(e.target.value)}
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
            <span className="backbtnsales">
              <button onClick={props.onClick}>Back</button>
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
        <p>order id:- {props.orders_id}</p>
        <p>product:- {props.product}</p>
        <p>name:- {props.name}</p>
        <p>country:- {props.country}</p>
        <p>state:- {props.state}</p>
        <p>city:- {props.city}</p>
        <p>zipcode:- {props.zipcode}</p>
        <p>street:- {props.streetadrs}</p>
        <p>Chat with customer</p>
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
    Axios.post("http://localhost:8080/addProduct", formdata, {
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

function Shopsright({ items }) {
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
  const params = useParams();
  return (
    <Fragment>
      <div className="profile-header-owner">
        <header>
          <div className="shop_owner_view">
            <div className="shopownerbtn">
              <span className="btnwebstore">
                <Editbtndisplay />
              </span>
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
      <div className="shop_name">
        <h2>{params.shop_name}</h2>
      </div>
      <div className="stinfoblock">
        <hr />

        <span>
          <div className="stinfoblockheadtxt">
            <h3>{params.shop_about}</h3>
          </div>
        </span>
        <hr />
      </div>
      <div className="ndinfoblock">
        <hr />
        <span>
          <div className="infoblock2headtxt">
            <h3>{params.shop_prods}</h3>
          </div>
        </span>
        <hr />
      </div>
      <div className="itemsinshop">
        <Productsinshopapp />
      </div>
    </Fragment>
  );
}

export default Shopsright;
