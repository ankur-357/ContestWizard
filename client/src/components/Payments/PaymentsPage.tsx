import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CardForm from './CardForm';

//const publicKey = "pk_test_51OZ9SdSGACR00lZ5KZGmaGxmAGVpPCG5MYL8Lh2ZVjQACEDNUY8GB8BirEBUqAt9fYjnD2NxZHMZXvwAcCvTRSbk00BMaazx0b"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

const PaymentsPage = (): JSX.Element => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm />
    </Elements>
  );
};

export default PaymentsPage;
