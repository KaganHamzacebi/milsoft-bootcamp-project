import styles from './CartMenuItem.module.scss';
import type { CartProduct } from '../../types/Types';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { NumericFormat } from 'react-number-format';
import { useAppDispatch } from '../../app/hooks';
import { addCartProduct, removeCartProduct } from '../../slices/CartControllerSlice';

const CartMenuItem = ({ cartProduct }: { cartProduct: CartProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <span>{cartProduct.product.productName}</span>
        <NumericFormat
          value={cartProduct.product.salesPrice}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix="Price: "
          suffix=" ₺"
        />
      </div>
      <div className={styles.quantity}>
        <div className={styles.directionButton}
          onClick={() => {
            dispatch(addCartProduct(cartProduct));
          }}
        >
          <BiChevronUp className={styles.directionIcon}/>
        </div>
        <span>{cartProduct.salesQuantity}</span>
        <div className={styles.directionButton}
          onClick={() => {
            dispatch(removeCartProduct(cartProduct));
          }}
        >
          <BiChevronDown className={styles.directionIcon}/>
        </div>
      </div>
    </div>
  );
};

export default CartMenuItem;