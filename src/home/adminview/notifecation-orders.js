import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersNoti() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post('https://apifordropment.online/api/orders/overview/main', { token });
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  const initiateWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
};

  return (
<div class='notification-container'>
    <h2>Orders</h2>
  {orders.map((order, index) => (
    <div class='notification-item' key={index}>
      <div class='notification-content'>
        <p className='dashboard-admin-overview-order-noti-txt-head' style={{color: 'white'}}>New Order</p>
        <p style={{color: 'white'}}>
          <span className='dashboard-admin-overview-order-noti-product'>Product:</span> {order.product}
        </p>
        <p style={{color: 'white'}}>
          <span className='dashboard-admin-overview-order-noti-name'>Name:</span> {order.name}
        </p>
        <button 
    onClick={() => initiateWhatsAppChat(order.Phone)} 
    style={{
        backgroundColor: '#25D366', // WhatsApp green color
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }}
>
    Chat on WhatsApp
</button>
      </div>
    </div>
  ))}
</div>
  );
}

export default OrdersNoti;