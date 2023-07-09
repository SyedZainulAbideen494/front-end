import React, { Fragment, useState, useCallback, useEffect } from "react";
import Button2 from "../UI/button2";
import { Link, useNavigate } from "react-router-dom";
import "./order.css";

const FetchOrders = () => {
  const nav = useNavigate();
  const [order, setorder] = useState([]);
  const [loading, setloading] = useState(false);
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

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("http://localhost:8080/user/orders", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformeduser = data.orders.map((userdata) => {
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
      };
    });
    setorder(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Orderslist order={order} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

const Orderslist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.order.map((itemdata) => (
            <Link
              to={`/saleschat/${itemdata.orders_id}/${itemdata.name}/${itemdata.Phone}/${itemdata.Email}/${itemdata.streetadrs}/${itemdata.city}/${itemdata.state}/${itemdata.zipcode}/${itemdata.country}/${itemdata.id}/${itemdata.product}/${itemdata.sender_id}/${itemdata.shop_id}/${itemdata.message}`}
            >
              <Orderproduct
                orders_id={itemdata.orders_id}
                name={itemdata.name}
                product={itemdata.product}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const Orderproduct = (props) => {
  return (
    <Fragment>
      <div className="orderprods">
        <div className="nameofuser">
          <p>{props.orders_id}</p>
        </div>
        <div className="nameofprod">
          <p>{props.product}</p>
          <p>Chat with seller</p>
        </div>
      </div>
    </Fragment>
  );
};

const Order = (props) => {
  return (
    <Fragment>
      <div className="order">
        <div className="orderheadinorder">
          <header>
            <span>
              <Link to="/">
                <button>close</button>
              </Link>
            </span>
            <span className="ordtxt">
              <h2>My orders</h2>
            </span>
          </header>
          <hr />
        </div>
      </div>
      <FetchOrders />
    </Fragment>
  );
};

export default Order;
