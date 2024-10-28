import classNames from 'classnames/bind';

import styles from './cart-dropdown.module.scss';

import Button from '@/components/button';

const cx = classNames.bind(styles);

export default function CartDropdown() {
  return (
    <div className={cx('cart-dropdown-container')}>
      <div className={cx('cart-items')}></div>
      <Button type="button">checkout</Button>
    </div>
  );
}
