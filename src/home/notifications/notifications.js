import React, { useState, useEffect } from 'react';
import './notification.css'

const NotificationComponent = ({ closeNotifications }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:8080/api/notifications', {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle received notifications
          setNotifications(data.notifications); // Assuming your API returns notifications in a 'notifications' field
        })
        .catch((error) => {
          console.error('Error fetching notifications:', error);
        });
    }
  }, []); // Run this effect only once on component mount

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2>Notifications</h2>
        <button onClick={closeNotifications}>Close</button>
      </div>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li className="notification-item" key={notification.id}>
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <p className="notification-time">{notification.time_created}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationComponent;