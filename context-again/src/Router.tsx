import { createBrowserRouter } from "react-router";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <TodoApp />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);
