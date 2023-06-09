import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import Products from '../../pages/Products/Products';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/category/:id',
      element: <Products/>
    },
    {
      path: '/checkout',
      element: <Checkout/>
    }
  ]);

  return <RouterProvider router={router}/>;
};

export default Router;