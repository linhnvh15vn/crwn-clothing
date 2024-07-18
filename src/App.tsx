import React from 'react';
import CategoryContainer from './components/category-container';

import categories from './dev-data/categories.json';

export default function App() {
  return <CategoryContainer categories={categories} />;
}
