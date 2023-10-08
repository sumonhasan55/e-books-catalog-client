import { Link, useParams} from "react-router-dom"; 
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSingleBook } from "../redux/features/book/booksSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.auth";

const UpdateBook = () => {
  const { id } = useParams();
  const books = useAppSelector((state) => state.books);
  const selectedBook = books.find((book) => book?.id === Number(id));
  const { title, author, genre, publicationDate, reviews } = selectedBook || {}; 
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth); 


  dispatch(
    getSingleBook({
      id: id,
      title: title,
      author: author,
      genre: genre,
      publicationDate: publicationDate,
      reviews: reviews,
    })
  );

  return (
    <>
      <Header />
      <div className="h-screen ">
        <h1 className="my-5 text-2xl font-extrabold text-center">Book Details!</h1>
        <div className="w-1/2 mx-auto my-10 card bg-neutral text-neutral-content py-9">
          <div className="items-center text-center card-body">
            <h2 className="card-title">Title:{title}</h2>
            <p>
              <span className="font-bold">Author:</span> {author}
            </p>
            <p>
              <span className="font-bold">Genre:</span> {genre}
            </p>
            <p>
              <span className="font-bold">Publicationdate:</span>{" "}
              {publicationDate}
            </p>
            <h1>
              <span className="font-bold">Revies:</span>
              {reviews}
            </h1>
            <div className="justify-end card-actions">
            {
              user?.email ?  <Link to={`/updateBook/${id}`}>
              <button className="btn btn-sm btn-primary">Edit</button>
            </Link> :
              <Link to="/login">
              <button className="btn btn-sm btn-primary">Edit</button>
            </Link>
            }
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateBook;
