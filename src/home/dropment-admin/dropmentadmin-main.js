import React, { useEffect, useState } from 'react';

const OrderCount = () => {
  const [uniqueOrderCount, setUniqueOrderCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apifordropment.online/orderCount/admin/menu'); // Replace with your backend URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUniqueOrderCount(data.totalorders);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors (e.g., show an error message)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Unique Orders Count</h2>
      {uniqueOrderCount !== null ? (
        <p>Number of unique orders: {uniqueOrderCount}</p>
      ) : (
        <p>Loading...</p>
      )}
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