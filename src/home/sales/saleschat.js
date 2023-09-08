import React, { Fragment, useState, useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./sales.css";
import Axios from "axios";

const Fetchmessage = () => {
  const params = useParams();
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState([]);

  const fetchmessages = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("http://localhost:8080/message", {
      headers: {
        Authorization: params.orders_id,
      },
    });
    const data = await response.json();
    const transformeduser = data.chat.map((userdata) => {
      return {
        message: userdata.message,
      };
    });
    setmessage(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchmessages();
  }, []);

  return (
    <Fragment>
      {!loading && <Chatlist message={message} />}
      {loading && <p>Loading..</p>}
    </Fragment>
  );
};

const Chatlist = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.message.map((user) => (
            <Chat message={user.message} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const Chat = (props) => {
  return (
    <Fragment>
      <div className="chattxt">
        <h2>{props.message}</h2>
      </div>
    </Fragment>
  );
};

function Saleschat(props) {
  const [message, setmessage] = useState([]);
  const [order, setorder]  =useState([])
  const [loading, setloading] = useState(false);
  const params = useParams();

  const addshophandler = () => {
    Axios.post(
      "http://localhost:8080/sendmessage",
      {
        message: message,
      },
      {
        headers: {
          Authorization: params.orders_id,
        },
      }
    );
  };

    const fetchmessages = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("http://localhost:8080/order/details", {
      headers: {
        Authorization: params.orders_id,
      },
    });
    const data = await response.json();
    const transformedser = data.order.map((userdata) => {
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
    setorder(transformedser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchmessages();
  }, []);

 
  return (
    <Fragment>
      <div className="saleschatheader">
        <header>
          <div className="headerbtnschat">
            <Link to="/">
            <span><button>Back</button></span>
            </Link>
          </div>
        </header>
      </div>

      <div className="chatinterface">
        <div className="orderdetails">
          <h3>{order[0]?.orders_id}</h3>
          <h3>{order[0]?.name}</h3>
          <h3>{order[0]?.Phone}</h3>
          <h3>{order[0]?.Email}</h3>
          <h3>{order[0]?.streetadrs}</h3>
          <h3>{order[0]?.city}</h3>
          <h3>{order[0]?.state}</h3>
          <h3>{order[0]?.country}</h3>
          <h3>{order[0]?.zaipcode}</h3>
          <h3>{order[0]?.product}</h3>
        </div>
      </div>
      <div className="chatininterface">
        <Fetchmessage />
      </div>
      <div className="footherforchat">
        <footer>
          <div className="inputforchat">
            <form onSubmit={addshophandler}>
              <input
                required
                placeholder="Send message"
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              />
              <button>Send</button>
            </form>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}


export default Saleschat;
