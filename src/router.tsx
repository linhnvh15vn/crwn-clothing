import { lazy, Suspense } from 'react';

import {
  createBrowserRouter,
  RouterProvider as RemixRouterProvider,
} from 'react-router-dom';

const App = lazy(() => import('@/App'));
const Home = lazy(() => import('@/pages/home'));
const Authentication = lazy(() => import('@/pages/authentication'));
const Shop = lazy(() => import('@/pages/shop/'));
const Checkout = lazy(() => import('@/pages/checkout'));

const routes = createBrowserRouter([
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

export function RouterProvider() {
  return (
    <Suspense>
      <RemixRouterProvider router={routes} />
    </Suspense>
  );
}
