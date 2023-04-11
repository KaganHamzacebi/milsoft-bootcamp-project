import CardMedia from '@mui/material/CardMedia';
import { getProductImage } from '../utils/Images';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NumericFormat } from 'react-number-format';
import Card from '@mui/material/Card';
import * as React from 'react';
import type { CartProduct } from '../types/Types';

const CheckoutItem = ({ cartProduct }: { cartProduct: CartProduct }) => {
  return (
    <Card sx={{ width: 150 }} raised>
      <CardMedia
        sx={{ height: 100, objectFit: 'contain' }}
        image={getProductImage(cartProduct.product.imagePath)}
        title="product card"
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography align="center" variant="caption" component="div" sx={{ fontWeight: 600 }}>
          {cartProduct.product.productName}
        </Typography>
        <Typography align="center" variant="caption" component="div">
          <NumericFormat
            value={cartProduct.product.salesPrice}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Price: "
            suffix=" ₺"
          />
        </Typography>
        <Typography variant="caption">
          Quantity: {cartProduct.salesQuantity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CheckoutItem;