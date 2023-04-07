import styles from './Checkout.module.scss';
import { useAppDispatch, useAppSelector } from '../../common/app/hooks';
import { cartDetails, clearCart, setCartActivity } from '../../common/slices/CartControllerSlice';
import type { ChangeEvent, FocusEvent } from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useForm } from 'react-hook-form';
import type { CartProduct } from '../../common/types/Types';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { CartService } from '../../common/service/CartService';
import { RiShoppingCartFill } from 'react-icons/ri';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartService = new CartService();
  const { cartProducts } = useAppSelector(cartDetails);
  const { register, handleSubmit } = useForm<{ customerName: string, cardNumber: number }>();
  const onSubmit = handleSubmit(data => {
    const checkoutDto = {
      customerName: data.customerName,
      cardNumber: data.cardNumber,
      productList: cartProducts
    };

    cartService.checkout(checkoutDto)
      .then(res => {
        if (res.cartStatus === 'COMPLETED') {
          navigate('/');
          dispatch(clearCart());
          dispatch(setCartActivity(false));
        }
        else
          console.log('An error occurred!');

      })
      .catch(err => console.log(err));
  });

  const [cardState, setCardState] = useState({
    cardNumber: '',
    customerName: '',
    focus: '',
    expiry: '',
    cvc: ''
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setCardState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    setCardState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className={styles.main}>
      <div className={styles.checkoutWrapper}>
        <h1>Checkout</h1>
        <div className={styles.divider}/>
        <div id="PaymentForm" className={styles.form}>
          <form className={styles.formGroup} onSubmit={onSubmit}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Customer Name"
              {...register('customerName')}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              className={styles.inputField}
              type="number"
              placeholder="Card Number"
              {...register('cardNumber')}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <button className={styles.checkoutButton} type="submit">CHECKOUT</button>
          </form>
          <Cards
            number={cardState.cardNumber}
            expiry={cardState.expiry}
            cvc={cardState.cvc}
            name={cardState.customerName}
            focused={undefined}
          />
        </div>
      </div>
      <div className={styles.cartHeader}>
        <h1>Cart</h1>
        <RiShoppingCartFill className={styles.cartIcon}/>
      </div>
      <div className={styles.productList}>
        {
          cartProducts.map((cartProduct: CartProduct) => {
            return (
              <div key={cartProduct.product.productId} className={styles.product}>
                <span>{cartProduct.product.productName}</span><br/>
                <NumericFormat
                  value={cartProduct.product.salesPrice}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Price: "
                  suffix=" ₺"
                /><br/>
                <span>{`Quantity: ${cartProduct.salesQuantity}`}</span>
              </div>
            );
          })
        }
      </div>
      <NumericFormat
        className={styles.totalPrice}
        value={cartProducts.reduce((a: number, b: CartProduct) => a + (b.salesQuantity! * b.product.salesPrice), 0)}
        displayType="text"
        thousandSeparator="."
        decimalSeparator=","
        prefix="Total Price: "
        suffix=" ₺"
      />
    </div>
  );
};

export default Checkout;