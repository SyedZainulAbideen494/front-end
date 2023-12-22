import React, { useState, useEffect } from 'react';

function OrdersNoti() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://apifordropment.online/orders/notification/details'); // Assumes your backend is running on the same server
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };



  return (
<div class='notification-container'>
    <h2>Orders</h2>
  {orders.map((order, index) => (
    <div class='notification-item' key={index}>
      <div class='notification-content'>
        <p className='dashboard-admin-overview-order-noti-txt-head' style={{color: 'black'}}>New Order</p>
        <p style={{color: 'black'}}>
          <span className='dashboard-admin-overview-order-noti-product'>Product:</span> {order.product}
        </p>
        <p style={{color: 'black'}}>
          <span className='dashboard-admin-overview-order-noti-name'>Name:</span> {order.name}
        </p>
      </div>
    </div>
  ))}
</div>
  );
}

export default OrdersNoti;