import React, { useState, useEffect, useCallback, Fragment } from "react";
import './chat.css';
import { Link } from "react-router-dom";

function ChatMessageapp() {
  const [tokenId, setTokenId] = useState([]);
  const [user1Id, setUser1Id] = useState([]);
  const [user2Id, setUser2Id] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatData2, setChatData2] = useState([]);
  const [order, setorder] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("https://apifordropment.online/chat/users/display", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformeduser = data.chat.map((userdata) => {
      return {
        chat_id: userdata.chat_id,
        user1: userdata.user1,
        user2: userdata.user2,
        first_name1: userdata.first_name1,
        first_name2: userdata.first_name2
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
              <Orderproduct
                chat_id={itemdata.chat_id}
                user1={itemdata.user1}
                user2={itemdata.user2}
                first_name1={itemdata.first_name1}
                first_name2={itemdata.first_name2}
              />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const Orderproduct = (props) => {
  const { chat_id, user1, user2, first_name1, first_name2 } = props;

  return (
    <Fragment>
      <Link to={`/chat/${chat_id}/${user1}/${user2}`}>
        <div className="maindivforchatsmain">
          <div className="nameofuserschatting">
            <p>{first_name1} and {first_name2}</p>
          </div>
          <div className="chatxt">
            <p>Chat</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};
export default ChatMessageapp;