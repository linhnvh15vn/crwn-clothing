import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Authentication from '@/pages/authentication';
import Home from '@/pages/home';

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
    ],
  },
]);
