import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success-place-order.css'; // Importing CSS file

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/home');
  };

  return (
    <div className="success-page">
      <div className="content">
        <h1>Order Placed Successfully</h1>
        <p>The seller will contact you shortly via WhatsApp using the provided number.</p>
        <p>Thank you for using Dropment!</p>
        <button className="done-btn" onClick={handleDoneClick}>Done</button>
      </div>
    </div>
  );
};

export default SuccessPage;