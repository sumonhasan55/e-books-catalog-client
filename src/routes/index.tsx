
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import AllBooks from "../page/AllBooks";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/allBooks",
    element: <AllBooks/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
export default routes;