import classNames from 'classnames/bind';

import styles from './authentication.module.scss';

import SignIn from '@/components/sign-in';
import SignUp from '@/components/sign-up';

const cx = classNames.bind(styles);

export default function Authentication() {
  return (
    <main className={cx('authentication-container')}>
      <SignIn />
      <SignUp />
    </main>
  );
}
