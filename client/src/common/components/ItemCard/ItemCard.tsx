import styles from './ItemCard.module.scss';
import type { Product } from '../../types/Types';
import { useAppDispatch } from '../../app/hooks';
import { RiShoppingCartFill } from 'react-icons/ri';
import { NumericFormat } from 'react-number-format';
import { addCartProduct } from '../../slices/CartControllerSlice';
import { getProductImage } from '../../utils/Images';

const ItemCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.main}>
      <img className={styles.productImage} alt='product_image' src={getProductImage(product.imagePath)} />
      <div className={styles.productInfo}>
        <span className={styles.productName}>{product.productName}</span>
        <NumericFormat
          value={product.salesPrice}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix="Price: "
          suffix=" ₺"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.addButton}
          type="button"
          onClick={() =>
            dispatch(addCartProduct({ product: product }))
          }
        >
          <div className={styles.buttonInfoWrapper}>
            <span>Add to </span>
            <RiShoppingCartFill className={styles.cartIcon}/>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;