import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./chat.css"; // Import your CSS for styling

const MainChatMessageSystem = () => {
  const [chatData, setChatData] = useState([]);
  const [message, setmessage] = useState("");
  const [tokenId, setTokenId] = useState([]);

  const params = useParams();

  const fetchChatHandler = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/chat/messages/display/api", {
        headers: {
          Authorization: params.chat_id,
        },
      });
      const data = await response.json();
      const transformedMessages = data.chat.map((messageData) => ({
        message_id: messageData.message_id,
        sender_id: messageData.sender_id,
        receiver_id: messageData.receiver_id,
        message_text: messageData.message_text,
        user_id_1: messageData.user_id_1,
        user_id_2: messageData.user_id_2,
        chat_id: messageData.chat_id,
      }));
      setChatData(transformedMessages);
    } catch (error) {
      console.error(error);
    }
  }, [params.chat_id]);

  useEffect(() => {
    fetchChatHandler();
  }, [fetchChatHandler]);

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

  const isCurrentUserMessage = (senderId) => {
    return senderId === tokenId[0]?.user_id;
  };

  // Render the chat messages
  const chatMessages = chatData.map((message) => (
    <div
      key={message.message_id}
      className={
        isCurrentUserMessage(message.sender_id)
          ? "chat-message current-user"
          : "chat-message"
      }
    >
      <p>{message.message_text}</p>
    </div>
  ));

  const addMessageHandler = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8080/send/message/sender",
        {
          message_text: message,
          user_id_1: params.user_id_1,
          user_id_2: params.user_id_2,
          sender_id: tokenId[0]?.user_id,
        },
        {
          headers: {
            Authorization: params.chat_id,
          },
        }
      );

      const newMessage = response.data.message;
      setChatData([...chatData, newMessage]);
      setmessage("");
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <Fragment>
      <div className="chat-container">
        {chatMessages}
      </div>
      <div className="footerforchat">
        <footer>
          <div className="inputforchat">
            <form onSubmit={addMessageHandler}>
              <input
                required
                placeholder="Send message"
                value={message}
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
};

export default MainChatMessageSystem;