import React, { useState, useEffect, useCallback, Fragment } from "react";
import './chat-page.css';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function ChatPage() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsersHandler = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://apifordropment.online/chat/users/display", {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      const transformedUser = data.chat.map((userData) => {
        return {
          chat_id: userData.chat_id,
          user1: userData.user1,
          user2: userData.user2,
          first_name1: userData.first_name1,
          first_name2: userData.first_name2
        };
      });
      setOrder(transformedUser);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        {/* Add other navigation links as needed */}
      </nav>

      <section>
        <div className="progress-bar">
          {loading && <Spinner animation="border" role="status" />}
        </div>
        <OrdersList order={order} />
      </section>
    </Fragment>
  );
}

const OrdersList = (props) => {
  return (
    <Fragment>
      <div className="chatinmainpagelist">
        <ul>
          {props.order.map((itemData) => (
            <OrderProduct
              key={itemData.chat_id}
              chat_id={itemData.chat_id}
              user1={itemData.user1}
              user2={itemData.user2}
              first_name1={itemData.first_name1}
              first_name2={itemData.first_name2}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const OrderProduct = (props) => {
  const { chat_id, user1, user2, first_name1, first_name2 } = props;
  const [user1Id, setUser1Id] = useState([]);
  const [user2Id, setUser2Id] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsersHandler1 = useCallback(async () => {
    try {
      const response = await fetch("https://apifordropment.online/user/chat/details/1", {
        headers: {
          Authorization: user1,
        },
      });
      const data = await response.json();
      const transformedUser = data.user.map((userData) => {
        return {
          first_name: userData.first_name,
          last_name: userData.last_name,
          profilepic: `https://apifordropment.online/images/${userData.profilepic}`,
        };
      });
      setUser1Id(transformedUser);
    } catch (error) {
      console.error(error);
    }
  }, [user1]);

  const fetchUsersHandler2 = useCallback(async () => {
    try {
      const response = await fetch("https://apifordropment.online/user/chat/details/2", {
        headers: {
          Authorization: user2,
        },
      });
      const data = await response.json();
      const transformedUser = data.user.map((userData) => {
        return {
          first_name: userData.first_name,
          last_name: userData.last_name,
          profilepic: `https://apifordropment.online/images/${userData.profilepic}`,
        };
      });
      setUser2Id(transformedUser);
    } catch (error) {
      console.error(error);
    }
  }, [user2]);

  useEffect(() => {
    setLoading(true);
    fetchUsersHandler1();
    fetchUsersHandler2();
    setLoading(false);
  }, [fetchUsersHandler1, fetchUsersHandler2]);

  return (
    <Link to={`/chat/${chat_id}/${user1}/${user2}`} style={{textDecoration: 'none', color: 'black'}}>
      <div className="mobile-main">
        <div className="user-profiles-mobile">
          {loading ? (
            <div className="placeholder-image-mobile" />
          ) : (
            <Fragment>
              <img
                src={user1Id[0]?.profilepic}
                alt={`${first_name1}'s Profile`}
                style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '20px'}}
              />
              <img
                src={user2Id[0]?.profilepic}
                alt={`${first_name2}'s Profile`}
                style={{width: '50px', height: '50px', borderRadius: '50%', marginLeft: '20px'}}
              />
            </Fragment>
          )}
        </div>
        <div className="chat-details-mobile">
          <p className="mobile-user-names">{first_name1} and {first_name2}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatPage;