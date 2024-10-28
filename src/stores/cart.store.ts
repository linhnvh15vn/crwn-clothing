import { create } from 'zustand';

import { type CartItem } from '@/interfaces/cart.interface';
import { type Product } from '@/interfaces/product.interface';

interface CartStore {
  isCartOpen: boolean;
  cartItems: CartItem[];
  toggleCartDropdown: () => void;
  addToCart: (product: Product) => void;
  reduceItemFromCart: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  isCartOpen: false,
  cartItems: [],

  toggleCartDropdown: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    }),

  reduceItemFromCart: (productId) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === productId,
      );
      if (existingItem?.quantity === 1) {
        return {
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== productId,
          ),
        };
      } else {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === productId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          ),
        };
      }
    }),

  removeItemFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== productId,
      ),
    })),

  getCartCount: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  getCartTotal: () => {
    const { cartItems } = get();
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },
}));
