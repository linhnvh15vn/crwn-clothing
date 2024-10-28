import classNames from 'classnames/bind';

import styles from './product-card.module.scss';

import Button from '@/components/button';
import { type Product } from '@/interfaces/product.interface';

interface Props {
  product: Product;
}

const cx = classNames.bind(styles);

export default function ProductCard({ product }: Props) {
  const { name, imageUrl, price } = product;

  return (
    <div className={cx('product-card-container')}>
      <img src={imageUrl} alt={name} />
      <div className={cx('footer')}>
        <span className={cx('name')}>{name}</span>
        <span className={cx('price')}>{price}</span>
      </div>
      <Button type="button" inverted>
        Add to cart
      </Button>
    </div>
  );
}
