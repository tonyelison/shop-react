import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/ErrorPage';
import Home from '@/components/Home';
import Products from '@/components/Products';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Verify from '@/components/Verify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'verify',
    element: <Verify />,
  },
]);

const AppRouterProvider = () => <RouterProvider router={router} />;

export default AppRouterProvider;
