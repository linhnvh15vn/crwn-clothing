import React, { useId } from 'react';

import classNames from 'classnames/bind';

import styles from './input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const cx = classNames.bind(styles);

export default function Input({ label, ...props }: Props) {
  const id = useId();

  return (
    <div className={cx('group')}>
      <input id={id} className={cx('form-input')} {...props} />
      <label
        htmlFor={id}
        className={cx('form-input-label', {
          shrink: !!props.value,
        })}
      >
        {label}
      </label>
    </div>
  );
}
