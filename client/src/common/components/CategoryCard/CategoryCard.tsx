import styles from './CategoryCard.module.scss';
import type { Category } from '../../types/Types';
import { getCategoryImage } from '../../utils/Images';

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className={styles.main}>
      <img className={styles.categoryImage} src={getCategoryImage(category.imagePath)} alt="category_image" />
      <div className={styles.categoryNameWrapper}>
        <span className={styles.categoryName}>{category.categoryName}</span>
      </div>
    </div>
  );
};

export default CategoryCard;