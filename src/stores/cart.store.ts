import { create } from 'zustand';

interface CartStore {
  isCartOpen: boolean;
  toggleCartDropdown: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  isCartOpen: false,
  toggleCartDropdown: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
