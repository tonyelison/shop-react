import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>404 page goes here</>,
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
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