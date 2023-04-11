import { useAppDispatch, useAppSelector } from '../common/app/hooks';
import { cartDetails, clearCart, setCartActivity } from '../common/slices/CartControllerSlice';
import type { ChangeEvent, FocusEvent } from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useForm } from 'react-hook-form';
import type { CartProduct } from '../common/types/Types';
import { useNavigate } from 'react-router-dom';
import { CartService } from '../common/service/CartService';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Divider, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CheckoutItem from '../common/components/CheckoutItem';

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
    <Box sx={{
      height: '80vh',
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <Typography variant="h3">
        Checkout
        <Divider/>
      </Typography>
      <form onSubmit={onSubmit}>
        <Box sx={{ display: 'flex' }}>
          <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
            <TextField
              id="customer-name"
              label="Customer Name"
              variant="outlined"
              {...register('customerName')}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <TextField
              id="customer-name"
              type="number"
              label="Card Number"
              variant="outlined"
              {...register('cardNumber')}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Button type="submit" variant="contained">Checkout</Button>
          </Container>
          <Container>
            <Cards
              number={cardState.cardNumber}
              expiry={cardState.expiry}
              cvc={cardState.cvc}
              name={cardState.customerName}
              focused={undefined}
            />
          </Container>
        </Box>
      </form>
      <Box>
        <Typography variant="h5" align="center">
          Products
          <Divider/>
        </Typography>
        <Container sx={{ marginTop: 4, display: 'flex', columnGap: '1rem' }}>
          {
            cartProducts.map((cartProduct: CartProduct, id) => {
              return <CheckoutItem key={id} cartProduct={cartProduct}/>;
            })
          }
        </Container>
      </Box>
    </Box>
  );
};

export default Checkout;