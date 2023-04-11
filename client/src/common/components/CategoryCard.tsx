import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getCategoryImage } from '../utils/Images';
import type { Category } from '../types/Types';
import { Skeleton } from '@mui/material';

export default function CategoryCard({ category, loading }:
                                       { category: Category, loading: boolean | undefined }) {
  const navigate = useNavigate();

  return (
    <Card raised sx={{ maxWidth: 345 }}>
      {
        loading ?
          <Skeleton sx={{ width: 250, height: 200 }} animation="wave"/>
          :
          <CardMedia
            sx={{ height: 200, width: 250, objectFit: 'contain' }}
            image={getCategoryImage(category.imagePath)}
            title="category card"
          />
      }
      <CardContent>
        <Typography align="center" variant="h5" component="div">
          {loading ? <Skeleton/> : category.categoryName}
        </Typography>
      </CardContent>
      <CardActions>
        {
          loading ?
            <Skeleton sx={{ width: '100%', height: 30 }}/>
            :
            <Button onClick={() => navigate('/category/' + category.categoryId)} variant="contained"
              sx={{ width: '100%' }}>Products</Button>
        }
      </CardActions>
    </Card>
  );
}