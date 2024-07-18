import React from 'react';

import classNames from 'classnames/bind';

import CategoryItem from '../category-item';

import styles from './category-container.module.scss';

const cx = classNames.bind(styles);

interface Props {
  categories: any[];
}

export default function CategoryContainer({ categories }: Props) {
  return (
    <div className={cx('container')}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
