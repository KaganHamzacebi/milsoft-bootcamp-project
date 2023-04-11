import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../common/components/ProductCard';
import type { Product } from '../common/types/Types';
import { CategoryService } from '../common/service/CategoryService';
import Box from '@mui/material/Box';
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

const Products = () => {
  const categoryService = new CategoryService();
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getProducts() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const res = await categoryService.getProductsByCategoryId(id!);
      setProducts(res);
    }

    getProducts().catch(e => console.log(e));
    // eslint-disable-next-line
  }, []);

  return (
    <Container sx={{
      height: '80vh',
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <Typography variant="h3">
        Products
        <Divider/>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        {
          products.map((product: Product) => {
            return <ProductCard key={product.productId} product={product}/>;
          })
        }
      </Box>
    </Container>
  );
};

export default Products;