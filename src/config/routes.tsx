import ErrorPage from "../pages/error"
import HomePage from "../pages/home"

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/page/:page",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];