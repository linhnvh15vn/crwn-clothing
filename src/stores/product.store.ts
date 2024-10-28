import { create } from 'zustand';

import { type Product } from '@/interfaces/product.interface';
import SHOP_DATA from '@/shop-data.json';

interface ProductStore {
  products: Product[];
  setProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: SHOP_DATA,
  setProducts: () => {},
}));
