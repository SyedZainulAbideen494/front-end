import React, { useState, useEffect, useCallback, Fragment } from "react";
import './chat.css';
import { Link } from "react-router-dom";

function ChatMessageapp() {
  const [loading, setLoading] = useState(false);
  const [tokenId, setTokenId] = useState([]);
  const [user1Id, setUser1Id] = useState([]);
  const [user2Id, setUser2Id] = useState([]);
  const [chatData, setChatData] = useState([]);

  const fetchUsersHandler = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/chat/users/display", {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      const transformedUsers = data.chat.map((itemsdata) => ({
        message_id: itemsdata.message_id,
        sender_id: itemsdata.sender_id,
        reciver_id: itemsdata.reciver_id,
        message_text: itemsdata.message_text,
        user_id_1: itemsdata.user_id_1,
        user_id_2: itemsdata.user_id_2,
      }));
      setChatData(transformedUsers);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  const user1 = chatData[0]?.user_id_1;
  const user2 = chatData[0]?.user_id_2;

  const fetchChatHandler1 = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/user/chat/details/1", {
        headers: {
          Authorization: user1,
        },
      });
      const data = await response.json();
      const transformedUser = data.user.map((userdata) => ({
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        profilepic: `http://localhost:8080/images/${userdata.porfilepic}`,
        unique_id: userdata.unique_id,
      }));
      setUser1Id(transformedUser);
    } catch (error) {
      console.error(error);
    }
  }, [user1]);

  useEffect(() => {
    fetchChatHandler1();
  }, [fetchChatHandler1]);

  const fetchChatHandler2 = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/user/chat/details/2", {
        headers: {
          Authorization: user2,
        },
      });
      const data = await response.json();
      const transformedUser = data.user.map((userdata) => ({
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        profilepic: `http://localhost:8080/images/${userdata.porfilepic}`,
        unique_id: userdata.unique_id,
      }));
      setUser2Id(transformedUser);
    } catch (error) {
      console.error(error);
    }
  }, [user2]);

  useEffect(() => {
    fetchChatHandler2();
  }, [fetchChatHandler2]);

  useEffect(() => {
    const fetchUser2sHandler = async () => {
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
        const transformedUser2 = data.user.map((userdata) => ({
          user_id: userdata.user_id,
        }));
        setTokenId(transformedUser2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser2sHandler();
  }, []);

  const EEditbtn = () => {
    if (tokenId[0]?.user_id === chatData[0]?.user_id_1) {
      return (
        <Fragment>
          <Link
              to={`/chat/${chatData[0]?.user_id_1}/${chatData[0]?.user_id_2}/${chatData[0]?.message_id}`}
            >
          <div className="maindivforchatdisplayonchat">
            <img
              className="profile-picmaindisplaychatsys"
              src={user2Id[0]?.profilepic}
              alt="Profile Pic"
            />
            <div className="user-detailsmaindisplaychatsys">
              <p className="usernameonchatdisplaymaindiv">
                {user2Id[0]?.first_name}
              </p>
            </div>
          </div>
          </Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
        <Link
              to={`/chat/${chatData[0]?.user_id_1}/${chatData[0]?.user_id_2}/${chatData[0]?.message_id}`}
            >
          <div className="maindivforchatdisplayonchat">
            <img
              className="profilepicmaindisplaychatsys"
              src={user1Id[0]?.profilepic}
              alt="Profile Pic"
            />
            <div className="userdetailsmaindisplaychatsys">
              <h4 className="usernameonchatdisplaymaindiv">
                {user1Id[0]?.first_name}
              </h4>
            </div>
          </div>
          </Link>
        </Fragment>
      );
    }
  };

  useEffect(() => {
    EEditbtn();
  }, []);

  return (
    <Fragment>
      <div className="chatdisplaymain">
        <EEditbtn/>
      </div>
    </Fragment>
  );
}

export default ChatMessageapp;


