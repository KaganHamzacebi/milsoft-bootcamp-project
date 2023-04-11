import { useAppDispatch, useAppSelector } from '../app/hooks';
import { cartDetails, setCartActivity } from '../slices/CartControllerSlice';
import Box from '@mui/material/Box';
import { Container, Divider } from '@mui/material';
import type { CartProduct } from '../types/Types';
import CartMenuItem from './CartMenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import type { BadgeProps } from '@mui/material/Badge';
import Badge from '@mui/material/Badge';
import { NumericFormat } from 'react-number-format';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}));

const CartMenu = () => {
  const { open, cartProducts } = useAppSelector(cartDetails);
  const dispatch = useAppDispatch();

  function toggleCartModal() {
    dispatch(setCartActivity(!open));
  }

  return (
    <Box position='fixed'
      sx={{
        width: '30%',
        right: 0,
        height: '100vh',
        borderLeft: '1px solid #bdbdbd',
        zIndex: '999',
        backgroundColor: 'white',
        transition: 'transform 0.2s ease',
        padding: '1rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)'
      }}>
      <IconButton sx={{ position: 'absolute', left: -64, top: 14 }} onClick={() => toggleCartModal()} aria-label="cart">
        <StyledBadge badgeContent={cartProducts.length} color="secondary">
          <ShoppingCartIcon sx={{ width: 32, height: 32, color: 'white' }}/>
        </StyledBadge>
      </IconButton>
      <Typography variant="h3" marginLeft={2}>
        Cart
        <Divider/>
      </Typography>
      <Box sx={{
        marginTop: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        height: '80vh',
        overflowY: 'auto',
        paddingBottom: '1rem'
      }}>
        {
          cartProducts.map((cartProduct: CartProduct, id: number) => {
            return (
              <Container key={id} sx={{ height: 200 }}>
                <CartMenuItem cartProduct={cartProduct}/>
              </Container>
            );
          })
        }
        <Button
          onClick={() => {
            window.location.href = '/checkout';
            dispatch(setCartActivity(false));
          }}
          variant="outlined"
          size="large"
          sx={{
            width: '90%',
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            margin: '0 auto',
            fontWeight: 600
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Checkout {' '}
            <NumericFormat
              value={cartProducts.reduce((a: number, b: CartProduct) => a + (b.salesQuantity! * b.product.salesPrice), 0)}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="Total: "
              suffix=" ₺"
            />
          </Typography>
        </Button>
      </Box>

    </Box>
  );
};

export default CartMenu;