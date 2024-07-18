import React from 'react';
import CategoryContainer from './components/category-container';

import categories from './dev-data/categories.json';
import Navigation from './components/navigation';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
