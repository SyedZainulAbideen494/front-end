import React, { useEffect, useState } from 'react';

const OrderCount = () => {
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
      fetch('https://apifordropment.online/orders/count') // Assumes your backend is running on the same host as the frontend
        .then((response) => response.json())
        .then((data) => {
          setOrderCount(data.orderCount);
        })
        .catch((error) => {
          console.error('Error fetching order count: ', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Number of Orders: {orderCount}</h1>
      </div>
    );
  };

const DropmentAdminmain = () => {
  return (
    <div>
      <OrderCount />
    </div>
  );
};

export default DropmentAdminmain;