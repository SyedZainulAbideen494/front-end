import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Productsapp from "../items.js/productsApp";
import Axios from "axios";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import './template5.css'
import head2img from '../../home/header/images/The Indian Gent.jpg'
import key1img from '../../home/header/images/10 Outfit Ideas from Men Fashion Influencers - The Indian Gent.png'
import key2img from '../../home/header/images/key2img.jpg'
import key3img from '../header/images/الامل سر الحياة😻ماريا&جواد.jpg'


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
  const [payment, setpayment] = useState('')
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const addProductHandler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("amount", amount);
    formData.append("payment", payment)
 
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
          placeholder="Product price"
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
        <label>Enter your stripe payment url</label>
        <input
          type="text"
          placeholder="Enter your stripe payment url"
          value={payment}
          onChange={(e) => setpayment(e.target.value)}
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
          <h3>{props.price}</h3>
        </div>
      </li>
    </div>
  );
};

const TestProducts = (props) => {
  return (
    <div className="productmodeltemp4">
      <li>
        <div className="product__titletemp4">
          <h2>title</h2>
        </div>
        <div className="product__amounttemp4">
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
          <Addimage1/>
          <Addimage2/>
          <Addimage3/>
          <Addimage4/>
          <Addimage5/>
          <Addimage6/>
          <Addimage7/>
        </Fragment>
      );
    } else {
      return;
    }
  };

  return <div>{!loading ? <EEditbtn /> : <p>Loading...</p>}</div>;
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
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
 
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
 };
 
 

const Template5website = (props) => {
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
  const Blocktext = () => {
    return (
      <Fragment>
        <div className="block1">
          <div className="blockheading">
              <h1>Block 1 heading</h1>
              <br />
              <button onClick={scrollToItems}>View</button>
          </div>
        </div>
      </Fragment>
    );
  }

    const Blocktext2 = () => {
      return (
        <Fragment>
          <div className="block2">
            <div className="blockheading">
              <h1>Block 1 heading</h1>
              <br />
              <button onClick={scrollToItems}>View</button>
            </div>
          </div>
        </Fragment>
      );
    };

    const Blocktext3 = () => {
      return (
        <Fragment>
          <div className="block3">
            <div className="blockheading">
              <h1>Block 1 heading</h1>
              <br />
              <button onClick={scrollToItems}>View</button>
            </div>
          </div>
        </Fragment>
      );
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

    const Block1 = () => {
      return(<Fragment>
        <div className="block">
          <div className="blockhead">
            <h2>Heading</h2>
          </div>
          <div className="blocktextdetails">
            <p>Deatils about the heading above</p>
          </div>
        </div>
      </Fragment>)
    }

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
      <div className="maintemp5">
        <div className="temp5head1">
          <header>
            <div className="storenametemp5">
              <h1>{params.shop_name}</h1>
            </div>
            <div className="btnhead1temp5">
              <button onClick={scrollToItems}>Our products</button>
              <button onClick={scrollToaboutus}>About us</button>
              <button onClick={scrollTocontactus}>Contact us</button>
            </div>
          </header>
          </div>
          <div className="temp5head2">
            <header>
              <div className="head2imgtem5">
                <img src={items[0]?.images1} alt="image 1"/>
              </div>
            </header>
          </div>
        <div className="abt1temp1">
          <div className="abt1temp5text">
            <h2>{params.shop_keyhead1}</h2>
            <h4>{params.shop_key1}</h4>
          </div>
          <div className="inilineimgtemp5abt1">
          <div className="abt1key1">
            <img src={items[0]?.images2} alt="image 2"/>
          </div>
          <div className="abt1key1">
            <img src={items[0]?.images3}/>
          </div>
          <div className="abt1key1">
            <img src={items[0]?.images4}/>
          </div>
          </div>
        </div>
        <div className="prodstemp5section" ref={itemsRef}>
          <div className='propdstexttemp5'>
            <h1>Our products</h1>
            <p><h4>Our latest and best selling  products</h4></p>
          </div>
          <div className="prodstemp5">
            <Productsinshopapp/>
          </div>
        </div>
        <div className="abt2temp5" ref={aboutusRef}>
          <div className="abt2no1temp5">
            <span className="imgtemp5abt2no1">
              <img src={items[0]?.images5}/>
            </span>
            <span className="texttemp5abt2no1"><h2>{params.shop_blockhead1}</h2>
            <p>{params.block1}</p></span>
          </div>
          <div className="abt2no2temp5">
          <span className="texttemp5abt2no2"><h2>{params.shop_blockhead2}</h2>
            <p>{params.shop_block2}</p></span>
            <span className="imgtemp5abt2no2">
              <img src={items[0]?.images6}/>
            </span>
          </div>
          <div className="abt2no1temp5">
            <span className="imgtemp5abt2no1">
              <img src={items[0]?.images7}/>
            </span>
            <span className="texttemp5abt2no1"><h2>{params.shop_blockhead3}</h2>
            <p>{params.shop_block3}</p></span>
          </div>
        </div>
        <div className="contacttemp5" ref={contactusRef}>
          <footer>
            <div className="contactheadtemp5"> 
              <h2>Contact us</h2>
            </div>
            <div className="conytactstmep5">
              <ul>
                <li>{params.insta}</li>
                <li>{params.shop_phone}</li>
                <li>{params.shop_email}</li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Template5website;