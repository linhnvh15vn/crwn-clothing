import React from 'react';

import classNames from 'classnames/bind';

import styles from './button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  google?: boolean;
  inverted?: boolean;
}

const cx = classNames.bind(styles);

export default function Button({
  children,
  google,
  inverted,
  ...props
}: Props) {
  return (
    <button
      className={cx('button-container', {
        google,
        inverted,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
