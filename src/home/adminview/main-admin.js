import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/drop2_logo.png'
const OrdersComponent = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Replace with your JWT token
        const response = await axios.get('https://apifordropment.online/orders/overview', {
          headers: {
            Authorization: token,
          },
        });
        setOrdersData(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {ordersData.map((shopOrders, index) => (
          <li key={index}>
            <h3>Shop Orders:</h3>
            <ul>
              {shopOrders.map((order, orderIndex) => (
                <li key={orderIndex} style={{color: 'white'}}>
                  Product: {order.product}, Count: {order.orderCount}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
const AdminMain = () => {
  const params = useParams()
    return (
        <Fragment>
          <OrdersComponent/>
      </Fragment>
      );
}

export default AdminMain