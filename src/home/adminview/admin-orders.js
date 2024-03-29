import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/drop2_logo.png'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)
    const [orderStatus, setOrderStatus] = useState([])
    const [selectedInterval, setSelectedInterval] = useState(null);
    const params = useParams();
    const shopId = params.shop_id;

    const fetchOrders = (interval) => {
        let url = `https://apifordropment.online/orders/product/admin/data/${shopId}`;
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

    const updateOrderStatus = async (newStatus, orders_id) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                `https://apifordropment.online/api/update-order-status/${orders_id}`,
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

    const initiateWhatsAppChat = (phoneNumber) => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <div className='orders-admin-prods'>
            <h1>Orders Dashboard</h1>
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
                        <th>Status</th>
                        <th>Actions</th> {/* New column for actions */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orders_id}>
                            <td style={{ color: 'white' }}>{order.product}</td>
                            <td>{order.name}</td>
                            <td>{order.Email}</td>
                            <td>{order.Phone}</td>
                            <td>{order.country}</td>
                            <td>{order.state}</td>
                            <td>{order.city}</td>
                            <td>{order.streetadrs}</td>
                            <td>{order.zipcode}</td>
                            <td>{order.orderDatetime}</td>
                            <td>
                                <div>
                                    {order.status !== 'cancel' ? (
                                        <div>
                                            <h3>Order Status: {order.status}</h3>
                                            <button onClick={() => updateOrderStatus('packed', order.orders_id)} className='action-buttons-packed'>
                                                Mark as Packed
                                            </button>
                                            <button onClick={() => updateOrderStatus('shipped', order.orders_id)} className='action-buttons-shipped'>
                                                Mark as Shipped
                                            </button>
                                            <button onClick={() => updateOrderStatus('success', order.orders_id)} className='action-buttons-success'>
                                                Mark as Success
                                            </button>
                                        </div>
                                    ) : (
                                        <h3>This order has been canceled.</h3>
                                    )}
                                </div>
                            </td>
                            <td>
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;