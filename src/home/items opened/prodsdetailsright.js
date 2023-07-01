import { useParams, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import Prodimg from "../../home/header/images/download.jpg";
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

function Prodsright() {
  const [orderform, setorederform] = useState(false);
  const params = useParams();

  const orderopenhandler = () => {
    setorederform(true);
  };

  const orderclosehanlder = () => {
    setorederform(false);
  };
  const [showedititem, setshowitem] = useState(false);

  const showedit = () => {
    setshowitem(true);
  };
  const hideedit = () => {
    setshowitem(false);
  };
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
              <Editbtndisplay />
            </span>
          </div>
        </header>
      </div>
      <div className="deatils">
        <div className="imgitemdetails">
          <img src={Prodimg} alt="Product" />
        </div>

        <div className="prodes__right__full">
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
              <button onClick={orderopenhandler}>Buy Now</button>
              {orderform && <Orderform onhidehanlder={orderclosehanlder} />}
            </span>
          </div>
        </div>
        <div className="prodsdetails__products">
          <hr />
          <span className="prodsliketxt">
            <h3>More products you might like</h3>
          </span>
          <hr />
          <Productsapp />
        </div>
      </div>
    </Fragment>
  );
}

export default Prodsright;
