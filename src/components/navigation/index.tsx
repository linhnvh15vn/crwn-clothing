import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './navigation.module.scss';

const cx = classNames.bind(styles);

export default function Navigation() {
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
        <Link className={cx('nav-link')} to="/authentication">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
