import styles from './Products.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../common/components/ProductCard/ProductCard';
import type { Product } from '../../common/types/Types';
import { CategoryService } from '../../common/service/CategoryService';
import CartMenu from '../../common/components/CartMenu/CartMenu';

const Products = () => {
  const categoryService = new CategoryService();
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getProducts() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const res = await categoryService.getProductsByCategoryId(id!);
      setProducts(res);
    }

    getProducts().catch(e => console.log(e));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CartMenu/>
      <div className={styles.main}>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <h1>Products</h1>
            <div className={styles.itemGrid}>
              {
                products.map((product: Product) => {
                  return <ProductCard key={product.productId} product={product}/>;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;