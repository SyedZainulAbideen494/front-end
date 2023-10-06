import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './order.css'

function Order() {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name2, setName2] = useState([]);
  const params = useParams();

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8080/user/order/display`, {
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const transformedData = data.user.map((userdata) => ({
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
        age: userdata.age,
        occupation: userdata.occupation,
        status: userdata.status
      }));
      setSalesData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const chatHandler = async (user_id, name) => {
    if (!user_id || !name) {
      console.error("Invalid user data:", user_id, name);
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const response = await Axios.post(
        "http://localhost:8080/start/chat",
        {
          user_id: user_id,
          first_name1: name2[0]?.first_name,
          first_name2: name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(name);

      if (response.status === 200) {
        // Chat started successfully, perform the redirection
        const { chat_id, user1, user2 } = response.data;

        window.location.href = `/chat/${chat_id}/${user1}/${user2}`;
      } else {
        // Handle other response statuses (e.g., 401, 500) here.
        console.error("An error occurred:", response.data);
      }
    } catch (error) {
      // Handle network or other errors here.
      console.error("An error occurred:", error);
    }
  };

  const fetchUser2sHandler = useCallback(async () => {
    setLoading(true);
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
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const transformedUser2 = data.user.map((userdata) => {
        return {
          user_id: userdata.user_id,
          first_name: userdata.first_name,
        };
      });
      setName2(transformedUser2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser2sHandler();
  }, [fetchUser2sHandler]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'packed':
        return '30%';
      case 'shipped':
        return '60%';
      case 'success':
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="order-container-customer-side-all-order-main-div">
    <h1>Your Orders</h1>
    {loading ? (
      <p>Loading...</p>
    ) : (
      salesData.map((item) => (
        <div className="order-details-card" key={item.orders_id}>
           <div className="order-tracking-bar" key={item.orders_id}>
            <div className="order-status">
              <div className="status-label">Packed</div>
              <div className={`status-dot ${item.status === 'packed' ? 'active' : ''}`} />
            </div>
            <div className="order-status">
              <div className="status-label">Shipped</div>
              <div className={`status-dot ${item.status === 'shipped' ? 'active' : ''}`} />
            </div>
            <div className="order-status">
              <div className="status-label">Delivered</div>
              <div className={`status-dot ${item.status === 'success' ? 'active' : ''}`} />
            </div>
            <div className="order-progress">
              <div
                className="order-progress-bar"
                style={{ width: getStatusColor(item.status) }}
              />
            </div>
          </div>
          <div className="order-details">
            <strong>Order ID: {item.orders_id}</strong>
            <p>Product: {item.product}</p>
            <p>
              Ship To: {item.name}, {item.streetadrs}, {item.city}, {item.state} {item.zipcode}
            </p>
            <p>Phone: {item.Phone}</p>
            <p>Status: {item.status}</p>
          </div>
          <button
            className="order-details-button"
            onClick={() => chatHandler(item.sender_id, item.name)}
          >
            Chat
          </button>
        </div>
      ))
    )}
  </div>
  );
}

export default Order;