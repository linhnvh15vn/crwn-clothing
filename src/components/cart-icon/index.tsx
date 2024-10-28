import classNames from 'classnames/bind';

import styles from './cart-icon.module.scss';

import shoppingBag from '@/assets/shopping-bag.svg';
import { useCartStore } from '@/stores/cart.store';

const cx = classNames.bind(styles);

export default function CartIcon() {
  const { getCartCount, toggleCartDropdown } = useCartStore();

  return (
    <div className={cx('cart-icon-container')} onClick={toggleCartDropdown}>
      <img
        src={shoppingBag}
        alt="shopping-bag-icon"
        className={cx('shopping-icon')}
      />
      <span className={cx('item-count')}>{getCartCount()}</span>
    </div>
  );
}
