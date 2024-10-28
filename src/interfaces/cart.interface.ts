import { type Product } from '@/interfaces/product.interface';

export type CartItem = Product & {
  quantity: number;
};
