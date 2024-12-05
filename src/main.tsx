import './index.css';
import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from '@/router';
import { stripePromise } from '@/utils/stripe';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <RouterProvider />
    </Elements>
  </React.StrictMode>,
);
