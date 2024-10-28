import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './category-item.module.scss';

interface Props {
  category: any;
}

const cx = classNames.bind(styles);

export default function CategoryItem({ category: { title, imageUrl } }: Props) {
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
