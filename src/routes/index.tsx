
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import AllBooks from "../page/AllBooks";
import NotFound from "../page/NotFound";
import Registration from "../page/Registration";
import AddNewBook from "../page/AddNewBook";

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
    path: "/registration",
    element: <Registration/>
  },
  {
    path: "/allBooks",
    element: <AllBooks/>
  },
  {
    path: "/addNewBook",
    element: <AddNewBook/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
export default routes;