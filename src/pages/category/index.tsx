import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './category.module.scss';

import ProductCard from '@/components/product-card';
import { type Product } from '@/interfaces/product.interface';
import { useProductStore } from '@/stores/product.store';

const cx = classNames.bind(styles);

export default function Category() {
  const { category } = useParams();
  const { categoryMap } = useProductStore();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(categoryMap[category!]);
  }, [categoryMap, category]);

  return (
    <>
      <h2 className={cx('category-title')}>{category?.toUpperCase()}</h2>
      <div className={cx('category-container')}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
