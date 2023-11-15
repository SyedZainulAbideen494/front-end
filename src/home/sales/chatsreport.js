import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios'; // Changed import statement
import './salesreport.css'

function SalesReportApp() {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prods, setProds] = useState([]);
  const params = useParams();

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8080/sales/stats/shop`, {
        headers: {
          Authorization: params.shop_id,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const transformedData = data.products.map((userdata) => ({
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
      }));
      setSalesData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [params.shop_id]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const ChatInfoList = (props) => {
    return (
      <Fragment>
        <div className="productmodelul">
          <ul>
            {salesData.map((item) => (
              <YourComponent
                key={item.id} // Added key prop
                user_id={item.sender_id}
              />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  };

  const OrderStatusList = (props) => {
    return (
      <Fragment>
        <div className="productmodelul">
          <ul>
            {salesData.map((item) => (
              <updateOrderStatus
                key={item.id} // Added key prop
                orders_id={item.orders_id}
              />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  };

  const Prds = () => {
    const [salesdataid, setsalesdataid] = useState([]);
    useEffect(() => {
      setsalesdataid(salesData[0]?.id); // Corrected this line
    }, [salesData]);

    const fetchProdDetails = useCallback(async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(
          `http://localhost:8080/prods/details/orders/for/details`,
          {
            headers: {
              Authorization: salesData[0]?.id, // Corrected this line
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const transformedData = data.products.map((userdata) => ({
          id: userdata.id,
          title: userdata.title,
        }));
        setProds(transformedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }, [salesData]);

    useEffect(() => {
      fetchProdDetails();
    }, [fetchProdDetails]);

    return (
      <Fragment>
        {prods.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </Fragment>
    );
  };

  function YourComponent(props) {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchuserdetails = useCallback(async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/user/profile/details", {
          headers: {
            Authorization: props.user_id,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const transformeduserinfo = data.order.map((itemsdata) => {
          return {
            user_id: itemsdata.user_id,
            first_name: itemsdata.first_name,
            last_name: itemsdata.last_name,
            bio: itemsdata.bio,
            unique_id: itemsdata.unique_id,
          };
        });
        setUserInfo(transformeduserinfo);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }, [props.user_id]);
    console.log(props.user_id)
    useEffect(() => {
      fetchuserdetails();
    }, [fetchuserdetails]);

    return (
      <Fragment>
        <section>
          {!loading ? <ChatUserInfoList shops={userInfo} /> : <p>Loading...</p>}
        </section>
      </Fragment>
    );
  }

  const ChatUserInfoList = (props) => {
    return (
      <Fragment>
        <div className="productmodelul">
          <ul>
            {props.shops.map((item) => (
              <button
                key={item.user_id} // Added key prop
                onClick={() => chatHandler(item)}
              >
                Chat with {item.first_name}
              </button>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  };

  const [name2, setName2] = useState([]);

  useEffect(() => {
    const fetchUser2sHandler = async () => {
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
    };

    fetchUser2sHandler();
  }, []);

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
  const [orderStatus, setOrderStatus] = useState([]); 
  const updateOrderStatus = async (newStatus, orders_id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await Axios.put(
        `http://localhost:8080/api/update-order-status/${orders_id}`,
        {
          newStatus: newStatus,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status === 200) {
        setOrderStatus(newStatus);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="sales-report-app">
  <h1>Sales Statistics</h1>
  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="sales-container">
      {salesData.map((item) => (
        <div className="sales-item" key={item.id}>
          <div>
            <h2>Country: {item.country}</h2>
            <p>Product: {item.product}</p>
            <p>Address: {item.streetadrs}, {item.city}, {item.state}, {item.zipcode}</p>
          </div>
          <div>
            <p>Name: {item.name}</p>
            <p>Email: {item.Email}</p>
            <p>Phone: {item.Phone}</p>
            <p>Age: {item.age}</p>
            <p>Occupation: {item.occupation}</p>
          </div>
          <div>
            <button onClick={() => chatHandler(item.sender_id, item.name)} className='action-buttons'>Chat</button>
            <div>
              <h3>Order Status: {orderStatus}</h3>
              <button onClick={() => updateOrderStatus("packed", item.orders_id)} className='action-buttons'>
                Mark as Packed
              </button>
              <button onClick={() => updateOrderStatus("shipped", item.orders_id)} className='action-buttons'>
                Mark as Shipped
              </button>
              <button onClick={() => updateOrderStatus("success", item.orders_id)} className='action-buttons'>
                Mark as Success
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
}

export default SalesReportApp;