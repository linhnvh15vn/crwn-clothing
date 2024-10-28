import CategoryPreview from '@/components/category-preview';
import { useProductStore } from '@/stores/product.store';

export default function Preview() {
  const { categoryMap } = useProductStore();

  return (
    <>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
