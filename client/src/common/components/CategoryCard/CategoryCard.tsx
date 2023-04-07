import styles from './CategoryCard.module.scss';
import type { Category } from '../../types/Types';

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className={styles.main}>
      <span>{category.categoryName}</span>
    </div>
  );
};

export default CategoryCard;