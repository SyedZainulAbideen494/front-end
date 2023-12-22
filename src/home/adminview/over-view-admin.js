import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js/auto';

// Register necessary components for Chart.js
Chart.register(...registerables);

const AdminOverview = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('oneDay');
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
            backgroundColor: '#5a67d8',
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
                color: '#333',
                font: {
                  size: 12,
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#333',
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
      <div className="container">
      <h1 className="title">Orders Overview</h1>
      <div className="filters">
      <h2>Time Range Filters</h2>
        <button onClick={() => handleTimeRangeChange('oneDay')}>One Day</button>
        <button onClick={() => handleTimeRangeChange('oneMonth')}>One Month</button>
        <button onClick={() => handleTimeRangeChange('sixMonths')}>Six Months</button>
        <button onClick={() => handleTimeRangeChange('oneYear')}>One Year</button>
      </div>
      <div className="chart-container">
        <div className="chart">
          <canvas id={`orderChart-${selectedTimeRange}`}></canvas>
        </div>
        <div className="summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-details">
            <p className="summary-text">Total Orders</p>
            <p className="summary-value">{orders.length}</p>
          </div>
          <div className="summary-details">
            <p className="summary-text">Time</p>
            <p className="summary-value">{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;