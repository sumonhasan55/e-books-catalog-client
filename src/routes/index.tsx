
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
import NewBooks from "../page/NewBooks";
import UpdateBook from "../page/UpdateBook";
import BookDetails from "../page/BookDetails";
import ContactUs from "../page/ContactUs";

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
    path: "/newBooks",
    element: <NewBooks/>
  },
  {
    path: "/bookDetails/:id",
    element: <BookDetails/>
  },
  {
    path: "/updateBook/:id",
    element: <UpdateBook/>
  },
  {
    path: "/contactus",
    element: <ContactUs/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
export default routes;