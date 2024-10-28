import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './cart-dropdown.module.scss';

import Button from '@/components/button';
import CartItem from '@/components/cart-item';
import { useCartStore } from '@/stores/cart.store';

const cx = classNames.bind(styles);

export default function CartDropdown() {
  const navigate = useNavigate();
  const { cartItems } = useCartStore();

  return (
    <div className={cx('cart-dropdown-container')}>
      <div className={cx('cart-items')}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button type="button" onClick={() => navigate('checkout')}>
        checkout
      </Button>
    </div>
  );
}
