import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Stripform from './payment2';

const stripePromise = loadStripe('pk_test_51LoS3iSGyKMMAZwsaj8KZX4Sqqffth0eo9jyTSElpu9UG8M815kZdSIg1huPtPgke75vqtymOLDXtwosJrEYBWPh001ecyI5aW'); 

function StripeApp() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Stripform userId={1} />
      </Elements>
    </div>
  );
}

export default StripeApp;