import React from 'react';

import classNames from 'classnames/bind';

import styles from './category-item.module.scss';

interface Props {
  category: any;
}

const cx = classNames.bind(styles);

export default function CategoryItem({ category: { name, imageUrl } }: Props) {
  return (
    <div className={cx('container')}>
      <div
        className={cx('bg-image')}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={cx('body-container')}>
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
