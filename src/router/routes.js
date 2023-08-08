import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './paths';
import { H1 } from '../components/Typography';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductPage } from '../pages/ProductPage';
import { EditProductPage } from '../pages/EditProductPage';
import { CreateProductPage } from '../pages/CreateProductsPage';
import { Login } from '../components/Login';
import { SignUp } from '../components/SignUp';

export const routes = [
  {
    index: true,
    element: <H1>Welcome </H1>,
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: PATHS.SIGNUP,
    element: <SignUp />,
  },
  {
    path: PATHS.PRODUCTS.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: PATHS.PRODUCTS.VIEW,
        element: <ProductPage />,
      },
      {
        path: PATHS.PRODUCTS.EDIT,
        element: <EditProductPage />,
      },
      {
        path: PATHS.PRODUCTS.CREATE,
        element: <CreateProductPage />,
      },
    ],
  },
  {
    path: PATHS.ADMIN.ROOT,
    element: <H1>Welcome in Admin Page</H1>,
  },

  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <H1>Page not found 404</H1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
