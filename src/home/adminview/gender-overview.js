import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const AdminOverviewgender = () => {
  const [genderPercentages, setGenderPercentages] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post('https://apifordropment.online/api/orders/overview/main/gender', { token });
        calculateGenderPercentage(response.data.genderPercentages);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  const calculateGenderPercentage = (orderResults) => {
    const totalOrders = orderResults.length;
    const genderCounts = orderResults.reduce((acc, order) => {
      acc[order.gender] = (acc[order.gender] || 0) + 1;
      return acc;
    }, {});

    const percentages = Object.keys(genderCounts).map((gender) => ({
      gender,
      percentage: ((genderCounts[gender] / totalOrders) * 100).toFixed(2),
    }));

    setGenderPercentages(percentages);
  };

  useEffect(() => {
    if (genderPercentages.length > 0) {
      createGenderPieChart(genderPercentages);
    }
  }, [genderPercentages]);

  const createGenderPieChart = (genderData) => {
    const labels = genderData.map((data) => data.gender);
    const percentages = genderData.map((data) => data.percentage);

    if (window.genderPieChart) {
      window.genderPieChart.destroy();
    }

    const ctx = document.getElementById('genderChart').getContext('2d');
    window.genderPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Gender Distribution',
            data: percentages,
            backgroundColor: ['#36a2eb', '#7364E2'], // Colors for different genders
            borderColor: '#333', // Border color for the chart
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value}%`;
              },
            },
          },
        },
      },
    });
  };

  const renderGenderDetails = () => {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '10px' }}>
        {genderPercentages.map((data, index) => (
          <span key={index}>{`${data.gender}: ${data.percentage}%  `}</span>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#171A2D', padding: '20px', borderRadius: '8px', width: '200px', height: '290px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h4 style={{textAlign: 'center'}}>Gender</h4>
      <canvas id="genderChart" width="150" height="150"></canvas>
      {renderGenderDetails()}
    </div>
  );
};

export default AdminOverviewgender;