import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Stripform({ userId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error('Error creating payment method: ', error);
      setLoading(false);
      return;
    }

    // Send paymentMethod.id to your server to complete the subscription
    try {
        const response = await fetch('http://localhost:8080/subscribe/dropment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
            paymentMethodId: paymentMethod.id,
            email: 'user@example.com', // Replace with user's email
          }),
        });
      
        if (response.ok) {
          console.log('Subscription successful!');
          // Handle success, e.g., show a success message to the user
        } else {
          const responseData = await response.json();
          console.error('Subscription failed: ', responseData.error);
          // Display a user-friendly error message based on responseData.error
        }
      } catch (error) {
        console.error('Error subscribing: ', error);
        // Handle the error and show an error message to the user
      } finally {
        setLoading(false);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}

export default Stripform;