import type { CartProduct } from '../types/Types';

import { useAppDispatch } from '../app/hooks';
import { getProductImage } from '../utils/Images';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { addCartProduct, removeCartProduct } from '../slices/CartControllerSlice';
import { NumericFormat } from 'react-number-format';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

const CartMenuItem = ({ cartProduct }: { cartProduct: CartProduct }) => {
  const dispatch = useAppDispatch();

  function increaseQuantity() {
    dispatch(addCartProduct(cartProduct));
  }

  function decreaseQuantity() {
    dispatch(removeCartProduct(cartProduct));
  }

  return (
    <Card raised sx={{ width: '100%', height: 150, display: 'flex', alignItems: 'center', margin: '0 auto' }}>
      <CardMedia
        sx={{ height: 150, width: 400, objectFit: 'contain' }}
        image={getProductImage(cartProduct.product.imagePath)}
        title="category card"
      />
      <CardContent sx={{ width: '100%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {cartProduct.product.productName}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          <NumericFormat
            value={cartProduct.product.salesPrice}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Price: "
            suffix=" ₺"
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton onClick={() => increaseQuantity()} aria-label="cart-up">
            <ExpandLessIcon/>
          </IconButton>
          <Typography variant="h5">
            {cartProduct.salesQuantity}
          </Typography>
          <IconButton onClick={() => decreaseQuantity()} aria-label="cart-down">
            <ExpandMoreIcon/>
          </IconButton>
        </Container>
      </CardActions>
    </Card>
  );
};

export default CartMenuItem;