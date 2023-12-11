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
      <div className="chatinmainpagelist">
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
  const [tokenId, setTokenId] = useState([]);
  const [user1Id, setUser1Id] = useState([]);
  const [user2Id, setUser2Id] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatData2, setChatData2] = useState([]);
  const [order, setorder] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler1 = useCallback(async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://apifordropment.online/user/chat/details/1", {
      headers: {
        Authorization: user1,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        profilepic: `https://apifordropment.online/images/${userdata.porfilepic}`,
      };
    });
    setUser1Id(transformeduser);
  }, []);
  
  useEffect(() => {
    fetchusershandler1();
  }, []);

  const fetchusershandler2 = useCallback(async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://apifordropment.online/user/chat/details/2", {
      headers: {
        Authorization: user2,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        profilepic: `https://apifordropment.online/images/${userdata.porfilepic}`,
      };
    });
    setUser2Id(transformeduser);
  }, []);
  
  useEffect(() => {
    fetchusershandler2();
  }, []);

  return (
    <Fragment>
    <Link to={`/chat/${chat_id}/${user1}/${user2}`}
    style={{textDecoration: 'none', color: 'black'}}
    >
      <div className="maindivforchatsmain">
        <div className="user-profiles">
          {loading ? (
            <div className="placeholder-image" />
          ) : (
            <Fragment>
              <img
                src={user1Id[0]?.profilepic || "placeholder.jpg"}
                alt={`${first_name1}'s Profile`}
              />
              <img
                src={user2Id[0]?.profilepic || "placeholder.jpg"}
                alt={`${first_name2}'s Profile`}
              />
            </Fragment>
          )}
        </div>
        <div className="chat-details">
          <p className="user-names">{first_name1} and {first_name2}</p>
          <p className="chat-button">Chat</p>
        </div>
      </div>
    </Link>
  </Fragment>
);
};
export default ChatMessageapp;