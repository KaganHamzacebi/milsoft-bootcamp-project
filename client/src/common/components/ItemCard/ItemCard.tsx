import styles from './ItemCard.module.scss';
import type { Product } from '../../types/Types';
import { useAppDispatch } from '../../app/hooks';
import { RiShoppingCartFill } from 'react-icons/ri';
import { NumericFormat } from 'react-number-format';
import { addCartProduct } from '../../slices/CartControllerSlice';

const ItemCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.main}>
      <span>{product.productName}</span>
      <NumericFormat
        value={product.salesPrice}
        displayType="text"
        thousandSeparator="."
        decimalSeparator=","
        prefix="Price: "
        suffix=" ₺"
      />
      <button className={styles.addButton}
        type="button"
        onClick={() =>
          dispatch(addCartProduct({ product: product }))
        }
      >
        <div className={styles.buttonWrapper}>
          <span>Add to </span>
          <RiShoppingCartFill className={styles.cartIcon}/>
        </div>
      </button>
    </div>
  );
};

export default ItemCard;