import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51LoS3iSGyKMMAZwsaj8KZX4Sqqffth0eo9jyTSElpu9UG8M815kZdSIg1huPtPgke75vqtymOLDXtwosJrEYBWPh001ecyI5aW');


const StripeAppa = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, token } = await stripe.createToken(cardElement);

      if (error) {
        setError(error.message);
        console.error('Stripe Error:', error);
      } else {
        // Send token to your server
        const response = await fetch('http://localhost:8080/charge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: '10', // Ensure paymentAmount is defined
            token: token.id
          })
        });

        const data = await response.json();
        console.log(data); // Handle response from server
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error processing payment. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

const StripeApp = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeAppa />
    </Elements>
  );
};

export default StripeApp;