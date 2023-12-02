import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  // {
  //   path: "authenticated",
  //   element: <Authenticated />,
  //   children: [
  //     { index: true, element: <Home /> },
  //     { path: "cart", element: <Cart /> },
  //     { path: "search", element: <Search /> },
  //     { path: "user/:id", element: <UserProfile /> },
  //   ],
  // },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
