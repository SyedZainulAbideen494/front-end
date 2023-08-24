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

  const params = useParams();
  return (
    <Fragment>
      <div className="saleschatheader">
        <header>
          <div className="headerbtnssaleschat">
            <span className="btns">
              <h2>{params.name}</h2>
            </span>
            <Link to="/profile">
              <span className="btns">
                <button>Profile</button>
              </span>
            </Link>
          </div>
        </header>
      </div>

      <div className="chatinterface">
        <div className="orderdetails">
          <h3>{params.orders_id}</h3>
          <h3>{params.name}</h3>
          <h3>{params.Phone}</h3>
          <h3>{params.Email}</h3>
          <h3>{params.streetadrs}</h3>
          <h3>{params.city}</h3>
          <h3>{params.state}</h3>
          <h3>{params.country}</h3>
          <h3>{params.zaipcode}</h3>
          <h3>{params.product}</h3>
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
