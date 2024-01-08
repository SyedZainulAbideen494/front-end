import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './payment.css'

const SubscriptionFormInner = ({ userId }) => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentResult, setPaymentResult] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('https://apifordropment.online/process-payment', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ amount, cardNumber, expiry, cvv }),
          });
          const result = await response.json();
          setPaymentResult(result.message);
      } catch (error) {
          console.error('Error:', error);
          // Handle error
      }
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number" />
              <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="Expiry Date" />
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" />
              <button type="submit">Pay Now</button>
          </form>
          {paymentResult && <p style={{color:' white'}}>{paymentResult}</p>}
      </div>
  );
};

export default SubscriptionFormInner;