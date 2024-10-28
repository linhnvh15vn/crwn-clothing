import classNames from 'classnames/bind';

import styles from './cart-item.module.scss';

import { type CartItem } from '@/interfaces/cart.interface';

interface Props {
  cartItem: CartItem;
}

const cx = classNames.bind(styles);

export default function CartItem({ cartItem }: Props) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={cx('cart-item-container')}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={cx('item-details')}>
        <span className={cx('name')}>{name}</span>
        <span className={cx('price')}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
