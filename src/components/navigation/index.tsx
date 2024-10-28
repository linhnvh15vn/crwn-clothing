import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './navigation.module.scss';

import CartDropdown from '@/components/cart-dropdown';
import CartIcon from '@/components/cart-icon';
import { useCartStore } from '@/stores/cart.store';
import { useUserStore } from '@/stores/user.store';

const cx = classNames.bind(styles);

export default function Navigation() {
  const { user } = useUserStore();
  const { isCartOpen } = useCartStore();

  return (
    <div className={cx('navigation')}>
      <Link className={cx('logo-container')} to="/">
        <img src="/crown.svg" alt="Logo" />
      </Link>
      <div className={cx('nav-links-container')}>
        <Link className={cx('nav-link')} to="/shop">
          SHOP
        </Link>
        <Link className={cx('nav-link')} to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className={cx('nav-link')}>
            <span>{user.displayName?.toUpperCase()}</span>
          </div>
        ) : (
          <Link className={cx('nav-link')} to="/authentication">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>

      {isCartOpen && <CartDropdown />}
    </div>
  );
}
