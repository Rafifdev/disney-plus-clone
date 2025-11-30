import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import TVSeries from "./pages/TVSeries";
import TVSeriesDetail from "./pages/TVSeriesDetail";
import Login from "./pages/Login";
import SingUp from "./pages/SignUp";

const WebRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/tvseries",
        element: <TVSeries />,
      },
      {
        path: "/tvseries/:id",
        element: <TVSeriesDetail />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
    ],
  },
]);

export default WebRouter;
