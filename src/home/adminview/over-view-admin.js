import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js/auto';
import AdminOverviewgender from './gender-overview';
import { Link } from 'react-router-dom';
import OrdersNoti from './notifecation-orders';
import Storiesapp from '../stories/storiesdisplay';
import NotificationComponent from '../notifications/notifications';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      axios.post('https://apifordropment.online/login/user/check', { token })
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          setMessage(error.response.data.message);
        });
    }
  }, [token]);

  const handleLogin = () => {
    // Logic to handle login
  };

  return (
    <div>
      {message && (
        <p style={{ color: 'white', textAlign: 'center' }}>
          {message}
          <Link to='/login'>
            <p>Login</p>
          </Link>
        </p>
      )}
      {token ? null : <button onClick={handleLogin}>Login</button>}
    </div>
  );
};

// Register necessary components for Chart.js
Chart.register(...registerables);

const AdminOverview = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('oneDay');
  const [showNotification, setShowNotification] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post('https://apifordropment.online/api/orders/overview/main', { token });
        setOrders(response.data.orders);
        createCharts(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  const getTimeRangeOrders = (timeRange, ordersData) => {
    const now = new Date();
    const filterDate = new Date(now);

    switch (timeRange) {
      case 'oneDay':
        filterDate.setDate(now.getDate() - 1);
        break;
      case 'oneMonth':
        filterDate.setMonth(now.getMonth() - 1);
        break;
      case 'sixMonths':
        filterDate.setMonth(now.getMonth() - 6);
        break;
      case 'oneYear':
        filterDate.setFullYear(now.getFullYear() - 1);
        break;
      default:
        break;
    }

    return ordersData.filter(order => new Date(order.orderDateTime) > filterDate);
  };

  const generateChartData = (timeRange, ordersData) => {
    const filteredOrders = getTimeRangeOrders(timeRange, ordersData);

    const chartData = {};
    filteredOrders.forEach((order) => {
      const orderDateTime = new Date(order.orderDateTime);
      const key = timeRange === 'oneDay' ? orderDateTime.getHours().toString() : orderDateTime.toDateString();
      chartData[key] = (chartData[key] || 0) + 1;
    });

    return Object.entries(chartData).sort(([a], [b]) => (a > b ? 1 : -1));
  };

  const createCharts = (ordersData) => {
    const data = generateChartData(selectedTimeRange, ordersData);
    createHourlyBarChart(selectedTimeRange, data);
  };

  const createHourlyBarChart = (timeRange, data) => {
    const canvasId = `orderChart-${timeRange}`;
    const canvasElement = document.getElementById(canvasId);

    if (canvasElement) {
      new Chart(canvasElement, {
        type: 'bar',
        data: {
          labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Labels from 0:00 to 23:00
          datasets: [{
            label: 'Orders per Hour',
            data: Array.from({ length: 24 }, (_, i) => {
              const hourData = data.find(([hour]) => parseInt(hour) === i);
              return hourData ? hourData[1] : 0;
            }),
            backgroundColor: '#7466E1',
            borderWidth: 1,
          }],
        },
        options: {
          indexAxis: 'x',
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#fefae0',
                font: {
                  size: 12,
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fefae0',
                font: {
                  size: 12,
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    } else {
      console.error(`Canvas element '${canvasId}' not found.`);
    }
  };

  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
    const data = generateChartData(range, orders);
  };


  return (
    <div className="dashboard">
      <App />
      <header className="header">
        <Link to='/profile'>
          <button style={{ cursor: 'pointer' }}>Profile</button>
        </Link>
        <Link to='/Addshoppage1'>
          <button style={{ cursor: 'pointer' }}>Add shop +</button>
        </Link>
        <Link to='/search'>
          <button style={{ cursor: 'pointer' }}>Search</button>
        </Link>
        <Link to='/orders'>
          <button style={{ cursor: 'pointer' }}>Orders</button>
        </Link>
        <Link to='/add/Blinkfeed'>
          <button style={{ cursor: 'pointer' }}>Add Blinkfeed</button>
        </Link>
      </header>
      <div className='stories-dropment-main-page' style={{ margin: '20px 20px' }}>
        <Storiesapp />
      </div>
      <div className="main-content">
        <main className="main">
          <div className="container">
            <h2 className="section-title">Orders Overview</h2>
            <div className="chart-container">
              <div className="chart">
                <canvas id={`orderChart-${selectedTimeRange}`}></canvas>
              </div>
              <div className="summary">
                <h2 className="summary-title">Order Summary</h2>
                <div className="summary-details">
                  <p className="summary-text">Total Orders</p>
                  <h2 className="summary-value">{orders.length}</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <OrdersNoti />
    </div>
  );
};

export default AdminOverview;