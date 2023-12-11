import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BotApp() {
  const [message, setMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [loading, setloading] = useState(false)
  const [name2, setname2] = useState([])
  useEffect(() => {
    const fetchUser2sHandler = async () => {
      setloading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://apifordropment.online/user/id/editbtndiaplay2",
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

  const userId = name2[0]?.user_id

  const sendMessage = async () => {
    try {
      const response = await axios.post('https://apifordropment.online/api/messages', { userId, message });
      setBotResponse(response.data.botResponse);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Chatbot App</h1>
      <div>
        <input type="text" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <strong>Bot:</strong> {botResponse}
      </div>
    </div>
  );
}

export default BotApp;