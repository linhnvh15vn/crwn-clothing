import { create } from 'zustand';

import productData from '@/dev-data/shop-data.json';
import { type Product } from '@/interfaces/product.interface';

interface ProductStore {
  categoryMap: Record<string, Product[]>;
}

export const useProductStore = create<ProductStore>(() => ({
  categoryMap: productData.reduce(
    (acc: Record<string, Product[]>, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {},
  ),
}));
