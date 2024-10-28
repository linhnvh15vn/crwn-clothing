import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Authentication from '@/pages/authentication';
import Checkout from '@/pages/checkout';
import Home from '@/pages/home';
import Shop from '@/pages/shop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/authentication',
        element: <Authentication />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);
