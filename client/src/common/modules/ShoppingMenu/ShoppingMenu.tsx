import styles from './ShoppingMenu.module.scss';
import { useEffect, useState } from 'react';
import type { Category } from '../../types/Types';
import { CategoryService } from '../../service/CategoryService';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { useNavigate } from 'react-router-dom';
import CartMenu from '../../components/CartMenu/CartMenu';

const ShoppingMenu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryService = new CategoryService();

  useEffect(() => {
    async function getCategories() {
      const res = await categoryService.listCategories();
      setCategories(res);
    }

    getCategories().catch(e => console.log(e));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CartMenu/>
      <div className={styles.main}>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <h1>Categories</h1>
            <div className={styles.itemGrid}>
              {
                categories.map((category: Category) => {
                  return (
                    <div key={category.categoryId} onClick={() => navigate('/category/' + category.categoryId)}>
                      <CategoryCard category={category}/>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingMenu;