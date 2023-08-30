import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const SubscriptionFormInner = ({ userId }) => {
  async function handleSubscription() {
    const token = localStorage.getItem('token')
  
    try {
      const response = await fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      const data = await response.json();
  
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout page
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
    return (
      <div className="App">
        <h1>Stripe Subscription Payment</h1>
        <button onClick={handleSubscription}>Subscribe with Stripe</button>
      </div>
    );
  }

export default SubscriptionFormInner;