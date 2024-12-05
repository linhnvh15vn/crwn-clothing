import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import Navigation from './components/navigation';

import { useProductStore } from '@/stores/product.store';
import { getCategoriesAndDocuments } from '@/utils/firebase';

export default function App() {
  const setCategoryMap = useProductStore((state) => state.setCategoryMap);

  useEffect(() => {
    const fetchData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
      console.log(categoryMap);
    };

    void fetchData();
  });

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
