import styles from './CartMenu.module.scss';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cartDetails, setCartActivity } from '../../slices/CartControllerSlice';
import type { CartProduct } from '../../types/Types';
import CartMenuItem from '../CartMenuItem/CartMenuItem';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const CartMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { open, cartProducts } = useAppSelector(cartDetails);

  return (
    <div className={`${styles.main} ${open && styles.open}`}>
      <div className={styles.cartWrapper}
        onClick={() => {
          dispatch(setCartActivity(!open));
        }}
      >
        <div className={styles.itemNumber}>
          <span>{cartProducts.length}</span>
        </div>
        <RiShoppingCartFill className={styles.cartIcon}/>
      </div>
      <div className={styles.cartContent}>
        {
          cartProducts.map((cartProduct: CartProduct, id: number) => {
            return <CartMenuItem key={id} cartProduct={cartProduct}/>;
          })
        }
      </div>
      {
        <button
          className={styles.checkoutButton}
          type='button'
          onClick={() => navigate('/checkout')}
        >
          <div className={styles.checkoutWrapper}>
            <span>Checkout</span>
            <NumericFormat
              value={cartProducts.reduce((a: number, b: CartProduct) => a + (b.salesQuantity! * b.product.salesPrice), 0)}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="Total: "
              suffix=" ₺"
            />
          </div>
        </button>
      }
    </div>
  );
};

export default CartMenu;