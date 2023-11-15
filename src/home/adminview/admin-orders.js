import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/Dropment (2).png'
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedInterval, setSelectedInterval] = useState(null);
    const params = useParams();
    const shopId = params.shop_id;
  
    const fetchOrders = (interval) => {
      let url = `http://localhost:8080/orders/product/admin/data/${shopId}`;
      if (interval) {
        url += `?timeInterval=${interval}`;
      }
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => setOrders(data))
        .catch((error) => console.error('Error fetching orders:', error));
    };
  
    useEffect(() => {
      fetchOrders(selectedInterval);
    }, [shopId, selectedInterval]);
  
    const handleFilterChange = (interval) => {
      setSelectedInterval(interval);
    };
  
    return (
      <div className='orders-admin-prods'>
        <h1>Orders</h1>
        <div>
          <label>
            Filter by:
            <select onChange={(e) => handleFilterChange(e.target.value)}>
              <option value="">Select interval</option>
              <option value="1year">1 Year</option>
              <option value="6months">6 Months</option>
              <option value="1month">1 Month</option>
              <option value="1week">1 Week</option>
              <option value="1day">1 Day</option>
            </select>
          </label>
        </div>
        <table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Country</th>
      <th>State</th>
      <th>City</th>
      <th>Street Address</th>
      <th>Zipcode</th>
      <th>Order Date</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((order) => (
      <tr key={order.id}>
        <td>{order.product}</td>
        <td>{order.name}</td>
        <td>{order.Email}</td>
        <td>{order.Phone}</td>
        <td>{order.country}</td>
        <td>{order.state}</td>
        <td>{order.city}</td>
        <td>{order.streetadrs}</td>
        <td>{order.zipcode}</td>
        <td>{order.orderDatetime}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    );
  };
  

const AdminProducts = () => {
  const params = useParams()
    return (
        <Fragment>
          <div className='main-div-overview-shop-admin'>
         <div class='header-overview-shop'>
        <header>
          <img src={logo} alt='Dropment Logo'/>
          <div className='admin-menu-header-btns'>
          <Link to={`/admin/products/${params.shop_id}`}>
            <button>Products</button>
            </Link>
            <Link to={`/admin/${params.shop_id}`}>
            <button>Overview</button>
            </Link>
          </div>
        </header>
      </div>
      <div className='admin-view-products-page'>
        <Orders/>
      </div>
          </div>
      </Fragment>
      );
}

export default AdminProducts