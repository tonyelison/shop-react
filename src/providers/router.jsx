import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import ErrorPage from '@/components/ErrorPage';
import Home from '@/components/Home';
import Products from '@/components/Products';
import Login from '@/components/Login';
import Register from '@/components/Register/index';
import EmailSent from '@/components/Register/EmailSent';
import VerifyToken from '@/components/Register/VerifyToken';

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
        element: <Outlet />,
        children: [
          { index: true, element: <Register /> },
          {
            path: 'email-sent',
            element: <EmailSent />,
          },
          {
            path: 'verify',
            element: <VerifyToken />,
          },
        ],
      },
    ],
  },
]);

const AppRouterProvider = () => <RouterProvider router={router} />;

export default AppRouterProvider;
