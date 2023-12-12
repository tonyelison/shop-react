import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/ErrorPage';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Products from '@/components/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

const AppRouterProvider = () => <RouterProvider router={router} />;

export default AppRouterProvider;
