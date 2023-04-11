import type { Product } from '../types/Types';
import { useAppDispatch } from '../app/hooks';
import { NumericFormat } from 'react-number-format';
import { addCartProduct } from '../slices/CartControllerSlice';
import { getProductImage } from '../utils/Images';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import * as React from 'react';

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  function addItemToCart(productData: Product) {
    dispatch(addCartProduct({ product: productData }));
  }

  return (
    <Card raised sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, width: 250, objectFit: 'contain' }}
        image={getProductImage(product.imagePath)}
        title="product card"
      />
      <CardContent>
        <Typography align="center" variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography align="center" variant="subtitle2" sx={{ fontWeight: 600 }} component="div">
          <NumericFormat
            value={product.salesPrice}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="Price: "
            suffix=" ₺"
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => addItemToCart(product)}
          variant="contained"
          sx={{ width: '100%' }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

// <div className={styles.main}>
//   <img className={styles.productImage} alt='product_image' src={getProductImage(product.imagePath)} />
//   <div className={styles.productInfo}>
//     <span className={styles.productName}>{product.productName}</span>
//     <NumericFormat
//       value={product.salesPrice}
//       displayType="text"
//       thousandSeparator="."
//       decimalSeparator=","
//       prefix="Price: "
//       suffix=" ₺"
//     />
//   </div>
//   <div className={styles.buttonWrapper}>
//     <button className={styles.addButton}
//             type="button"
//             onClick={() =>
//               dispatch(addCartProduct({ product: product }))
//             }
//     >
//       <div className={styles.buttonInfoWrapper}>
//         <span>Add to </span>
//         <RiShoppingCartFill className={styles.cartIcon}/>
//       </div>
//     </button>
//   </div>
// </div>

export default ProductCard;