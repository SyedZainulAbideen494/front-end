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

    const ctx = document.getElementById('genderChart').getContext('2d');
    if (window.genderPieChart) {
      window.genderPieChart.destroy(); // Destroy previous chart if it exists
    }
    window.genderPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Gender Distribution',
            data: percentages,
            backgroundColor: 'transparent',
            borderColor: ['#36a2eb', '#ff6384'], // Border colors for different genders
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '80%', // Adjust the cutout size to control the hole in the middle
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

  return (
    <div>
      <canvas id="genderChart" width="400" height="400"></canvas>
    </div>
  );
};

export default AdminOverviewgender;