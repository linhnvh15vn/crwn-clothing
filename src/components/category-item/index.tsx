import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './category-item.module.scss';

import { type Category } from '@/interfaces/category.interface';

interface Props {
  category: Category;
}

const cx = classNames.bind(styles);

export default function CategoryItem({ category }: Props) {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  return (
    <div
      className={cx('container')}
      onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
    >
      <div
        className={cx('bg-image')}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={cx('body-container')}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
