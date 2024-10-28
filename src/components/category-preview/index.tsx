import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './category-preview.module.scss';

import ProductCard from '@/components/product-card';
import { type Product } from '@/interfaces/product.interface';

interface Props {
  title: string;
  products: Product[];
}

const cx = classNames.bind(styles);

export default function CategoryPreview({ title, products }: Props) {
  return (
    <div className={cx('category-preview-container')}>
      <h2>
        <Link className={cx('title')} to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className={cx('preview')}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
