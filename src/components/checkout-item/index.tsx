import classNames from 'classnames/bind';

import styles from './checkout-item.module.scss';

import { type CartItem } from '@/interfaces/cart.interface';
import { useCartStore } from '@/stores/cart.store';

interface Props {
  cartItem: CartItem;
}

const cx = classNames.bind(styles);

export default function CheckoutItem({ cartItem }: Props) {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { addToCart, reduceItemFromCart, removeItemFromCart } = useCartStore();

  return (
    <div className={cx('checkout-item-container')}>
      <div className={cx('image-container')}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={cx('name')}> {name} </span>
      <span className={cx('quantity')}>
        <div className={cx('arrow')} onClick={() => reduceItemFromCart(id)}>
          &#10094;
        </div>
        <span className={cx('value')}>{quantity}</span>
        <div className={cx('arrow')} onClick={() => addToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={cx('price')}>${price}</span>
      <div
        className={cx('remove-button')}
        onClick={() => removeItemFromCart(id)}
      >
        &#10005;
      </div>
    </div>
  );
}
