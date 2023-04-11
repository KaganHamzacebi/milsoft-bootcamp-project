import { useEffect, useState } from 'react';
import type { Category } from '../types/Types';
import { CategoryService } from '../service/CategoryService';
import Box from '@mui/material/Box';
import CategoryCard from '../components/CategoryCard';
import { Container, Divider, Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography';

const ShoppingMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryService = new CategoryService();

  useEffect(() => {
    async function getCategories() {
      const res = await categoryService.listCategories();
      setCategories(res);
      setLoading(false);
    }

    getCategories().catch(e => console.log(e));
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
          Categories
          <Divider/>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
          {
            categories
              ?
              categories.map((category: Category) => {
                return <CategoryCard key={category.categoryId} category={category} loading={loading}/>;
              })
              :
              <>
                <Skeleton/>
                <Skeleton animation="wave"/>
                <Skeleton animation={false}/>
              </>
          }
        </Box>
      </Container>
    </>
  );
};

export default ShoppingMenu;