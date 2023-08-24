import { useParams, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Productsapp from "../items.js/productsApp";
const Editbtndisplay = () => {
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
      return <button onClick={showedit}>Edit</button>;
    } else {
      return <h2>|</h2>;
    }
  };

  return (
    <div>
      {!loading ? <EEditbtn /> : <p>Loading...</p>}
      {showedititem && <Edititemform />}
        <Addimges/>
    </div>
  );
};

const Orderform = (props) => {
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
  const [paymentlink, setPaymentLink] = useState('');

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

  const onOrderSubmitHandler = (event) => {
    event.preventDefault();

    const orderDeatails = {
      name: user,
      Phone: phoneno,
      Email: email,
      Address: streetadrs,
      city,
      state,
      zipcode,
      country,
      id: id,
      product: title,
    };

    console.log(orderDeatails);
  };

  const token = localStorage.getItem("token");
  const nav = useNavigate()

  const fetchProdspayhandler = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const payment = data.img[0]?.payment || '';
      setPaymentLink(payment);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProdspayhandler();
  }, [fetchProdspayhandler]);


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
    ).then(() => {
      // Redirect to the payment link
      window.location.href = paymentlink;
    });
  };

  return (
    <Fragment>
      <div className="formorder">
        <form onSubmit={orderhandler}>
          <div className="name">
            <h2>{props.prodsdetails}</h2>
            <label>Name</label>
            <br />
            <input type="text" value={user} onChange={nameHandler} />
          </div>
          <div className="phone">
            <label>Phone number</label>
            <br />
            <input type="number" value={phoneno} onChange={phoneNohandler} />
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input type="email" value={email} onChange={emailhandler} />
          </div>
          <div className="address">
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
          <div className="btn">
            <span className="closebtn">
              <button onClick={props.onhidehanlder}>Close</button>
            </span>
            <span className="placeordbtn">
              <button type="submit">Place order</button>
            </span>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

const Edititemform = () => {
  const params = useParams();

  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [amount, setamount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.put(
        "http://localhost:8080/updateprods",
        {
          title: title,
          price: price,
          amount: amount,
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
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder="amount"
        />
        <button type="submit">Update</button>
        
      </form>
      <p>{message}</p>
    </div>
  );
};

const Addimges = () => {
  return<Fragment>
        <Addimage2/>
        <Addimage3/>
        <Addimage4/>
        <Addimage5/>
        <Addimage6/>
  </Fragment>
}

const Addimage2 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("http://localhost:8080/addprodsimg2", formData, {
      headers: {
        Authorization: params.id,
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
 
    Axios.post("http://localhost:8080/addprodsimg3", formData, {
      headers: {
        Authorization: params.id,
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
 
    Axios.post("http://localhost:8080/addprodsimg4", formData, {
      headers: {
        Authorization: params.id,
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
 
    Axios.post("http://localhost:8080/addprodsimg5", formData, {
      headers: {
        Authorization: params.id,
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
 
    Axios.post("http://localhost:8080/addprodsimg6", formData, {
      headers: {
        Authorization: params.id,
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


 

function Prodsright() {
  const [orderform, setOrderForm] = useState(false);
  const [items, setItems] = useState([]);
  const [paymentlink, setPaymentLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [img1, setimg1] = useState(false)
  const [img2, setimg2] = useState(false)
  const [img3, setimg3] = useState(false)
  const [img4, setimg4] = useState(false)
  const [img5, setimg5] = useState(false)
  const [img6, setimg6] = useState(false)
  const params = useParams();

  const orderOpenHandler = () => {
    setOrderForm(true);
  };

  const orderCloseHandler = () => {
    setOrderForm(false);
  };

  const [showedititem, setShowItem] = useState(false);

  const showEdit = () => {
    setShowItem(true);
  };

  const hideEdit = () => {
    setShowItem(false);
  };

  const showmg1 = () => {
    setimg1(true)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg2 = () => {
    setimg1(false)
    setimg2(true)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg3 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(true)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg4 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(true)
    setimg5(false)
    setimg6(false)
  }
  const showmg5 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(true)
    setimg6(false)
  }
  const showmg6 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(true)
  }

  const fetchProdshandler = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const transformedItems = data.img.map((itemsdata) => ({
        images: `http://localhost:8080/images/${itemsdata.images}`,
        images2: `http://localhost:8080/images/${itemsdata.images2}`,
        images3: `http://localhost:8080/images/${itemsdata.images3}`,
        images4: `http://localhost:8080/images/${itemsdata.images4}`,
        images5: `http://localhost:8080/images/${itemsdata.images5}`,
        images6: `http://localhost:8080/images/${itemsdata.images6}`,
      }));
      setItems(transformedItems);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [params.id]);

  const fetchProdspayhandler = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const payment = data.img[0]?.payment || '';
      setPaymentLink(payment);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProdshandler();
    fetchProdspayhandler();
  }, [fetchProdshandler, fetchProdspayhandler]);

  const Showimg1 = () => {
    return<Fragment>
      <img src={items[0]?.images} alt="image1"/>
    </Fragment>
  }
  const Showimg2 = () => {
    return<Fragment>
      <img src={items[0]?.images2} alt="image2"/>
    </Fragment>
  }
  const Showimg3 = () => {
    return<Fragment>
      <img src={items[0]?.images3} alt="image3"/>
    </Fragment>
  }
  const Showimg4 = () => {
    return<Fragment>
      <img src={items[0]?.images4} alt="image4"/>
    </Fragment>
  }
  const Showimg5 = () => {
    return<Fragment>
      <img src={items[0]?.images5} alt="image5"/>
    </Fragment>
  }
  const Showimg6 = () => {
    return<Fragment>
      <img src={items[0]?.images6} alt="imag6"/>
    </Fragment>
  }

  return (
    <Fragment>
      <div className="prodsetailsheader">
        <header>
          <div className="prodsdetailsbtns">
            <span className="prodsbtns">
              <Link to="/">
                <button>back</button>
              </Link>
            </span>
            <span className="prodsbtns">
              {/* Assuming Editbtndisplay is a component */}
              <Editbtndisplay />
            </span>
          </div>
        </header>
      </div>
      <div className="deatils">
        <div className="imgitemdetails">
          {loading ? (
            <div>Loading image...</div>
          ) : (
            <section className="imgprodsdetailsfordetails6imgs">
            {img1 && <Showimg1/>}
            {img2 && <Showimg2/>}
            {img3 && <Showimg3/>}
            {img4 && <Showimg4/>}
            {img5 && <Showimg5/>}
            {img6 && <Showimg6/>}
            
            </section>
          )}
        </div>

        <div className="prodes__right__full">
          <button onClick={showmg1}>Image 1</button>
            <button onClick={showmg2}>Image 2</button>
            <button onClick={showmg3}>Image 3</button>
            <button onClick={showmg4}>Image 4</button>
            <button onClick={showmg5}>Image 5</button>
            <button onClick={showmg6}>Image 6</button>
          <div className="prods__title">
            <h2>{params.title}</h2>
          </div>
          <br />
          <div className="amount">
            Price: <br />
            <h3>{params.price}</h3>
          </div>
          <div className="editbtns">{showedititem && <Edititemform />}</div>
          <br />
          <div className="prods__detail__btn">
            <span className="prods__detail_addtocart_btn">
            
                <button onClick={orderOpenHandler}>Buy Now</button>
                <a href={paymentlink}></a>
              {orderform && <Orderform onhidehandler={orderCloseHandler} />}
            </span>
          </div>
        </div>
        <div className="prodsdetails__products">
          <hr />
          <span className="prodsliketxt">
            <h3>More products you might like</h3>
          </span>
          <hr />
          {/* Assuming Productsapp is a component */}
          <Productsapp />
        </div>
      </div>
    </Fragment>
  );
}

export default Prodsright;