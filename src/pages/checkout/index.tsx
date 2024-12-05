import classNames from 'classnames/bind';

import styles from './checkout.module.scss';

import CheckoutItem from '@/components/checkout-item';
import PaymentForm from '@/components/payment-form';
import { useCartStore } from '@/stores/cart.store';

const cx = classNames.bind(styles);

export default function Checkout() {
  const { cartItems, getCartTotal } = useCartStore();

  return (
    <div className={cx('checkout-container')}>
      <div className={cx('checkout-header')}>
        <div className={cx('header-block')}>
          <span>Product</span>
        </div>
        <div className={cx('header-block')}>
          <span>Description</span>
        </div>
        <div className={cx('header-block')}>
          <span>Quantity</span>
        </div>
        <div className={cx('header-block')}>
          <span>Price</span>
        </div>
        <div className={cx('header-block')}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={cx('total')}>TOTAL: ${getCartTotal()}</div>
      <PaymentForm />
    </div>
  );
}
