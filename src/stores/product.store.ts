import { create } from 'zustand';

import { type Product } from '@/interfaces/product.interface';

interface ProductStore {
  categoryMap: Record<string, Product[]>;
  setCategoryMap: (categoryMap: Record<string, Product[]>) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  categoryMap: {},
  setCategoryMap: (categoryMap) => set({ categoryMap }),
}));
