import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
