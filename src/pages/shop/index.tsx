import classNames from 'classnames/bind';

import styles from './shop.module.scss';

import ProductCard from '@/components/product-card';
import { useProductStore } from '@/stores/product.store';

const cx = classNames.bind(styles);

export default function Shop() {
  const { products } = useProductStore();

  return (
    <div className={cx('products-container')}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
