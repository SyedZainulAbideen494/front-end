import React, { Fragment, useEffect, useState } from 'react';
import Stories from '../stories/stories';
import  './dropment-admin.css'
function UserCountComponent() {
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    fetch('https://apifordropment.online/userCount/admin') // Assumes your React app is served from the same server as your Node.js backend
      .then(response => response.json())
      .then(data => {
        setUserCount(data.userCount);
      })
      .catch(error => {
        console.error('Error fetching user count:', error);
      });
  }, []);

  return (
    <div className="analytics-cardt">
      <h2>User Count</h2>
        <h3>{userCount}</h3>
    </div>
  );
}


function OrderCountComponent() {
  const [orderCount, setOrderCount] = useState(null);

  useEffect(() => {
    fetch('https://apifordropment.online/orderCount/admin') // Assumes your React app is served from the same server as your Node.js backend
      .then(response => response.json())
      .then(data => {
        setOrderCount(data.orderCount);
      })
      .catch(error => {
        console.error('Error fetching order count:', error);
      });
  }, []);


  return (
    <div className="analytics-cardt">
      <h2>Order Count</h2>
        <h3>{orderCount}</h3>
    </div>
  );
}

function ShopCountComponent() {
  const [shopCount, setShopCount] = useState(null);

  useEffect(() => {
    fetch('https://apifordropment.online/shopCount/admin') // Assumes your React app is served from the same server as your Node.js backend
      .then(response => response.json())
      .then(data => {
        setShopCount(data.shopCount);
      })
      .catch(error => {
        console.error('Error fetching shop count:', error);
      });
  }, []);

  return (
    <div className="analytics-cardt">
      <h2>Shop Count</h2>
        <h3>{shopCount}</h3>
    </div>
  );
}

function ProductCountComponent() {
  const [productCount, setProductCount] = useState(null);

  useEffect(() => {
    fetch('https://apifordropment.online/productCount/admin') // Assumes your React app is served from the same server as your Node.js backend
      .then(response => response.json())
      .then(data => {
        setProductCount(data.productCount);
      })
      .catch(error => {
        console.error('Error fetching product count:', error);
      });
  }, []);

  return (
    <div className="analytics-cardt">
      <h2>Product Count</h2>
        <h3>{productCount}</h3>
    </div>
  );
}

function StoryCountComponent() {
  const [storyCount, setStoryCount] = useState(null);

  useEffect(() => {
    fetch('https://apifordropment.online/storyCount/admin') // Assumes your React app is served from the same server as your Node.js backend
      .then(response => response.json())
      .then(data => {
        setStoryCount(data.storyCount);
      })
      .catch(error => {
        console.error('Error fetching story count:', error);
      });
  }, []);

  return (
    <div className="analytics-cardt">
      <h2>Story Count</h2>
        <h3>{storyCount}</h3>
    </div>
  );
}

const DropmentAdminmain = () => {
  return (<Fragment>
    <h1>Admin Dashboard</h1>

    <div className="admin-dashboard">
      
      <div className="analytics-card">
        <UserCountComponent />
      </div>
      <div className="analytics-card">
        <OrderCountComponent />
      </div>
      <div className="analytics-card">
        <ShopCountComponent />
      </div>
      <div className="analytics-card">
        <ProductCountComponent />
      </div>
      <div className="analytics-card">
        <StoryCountComponent />
      </div>
    </div>
    </Fragment>
  );
};

export default DropmentAdminmain;