import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";
import { moviesLoader } from "./loaders/moviesLoader";
import { Suspense } from "react";
import { Movie } from "./pages/Movie";
import { movieLoader } from "./loaders/movieLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movies",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <Movies />
          </Suspense>
        ),
        loader: moviesLoader,
      },
      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <Movie />
          </Suspense>
        ),
        loader: movieLoader,
      },
    ],
  },
]);
