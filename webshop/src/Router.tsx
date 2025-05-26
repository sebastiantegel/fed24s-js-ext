import { createBrowserRouter } from "react-router";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { CustomError } from "./pages/CustomError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <CustomError />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
