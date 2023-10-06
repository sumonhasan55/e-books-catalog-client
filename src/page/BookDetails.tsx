import { Link,  useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSingleBook, deleteBook } from "../redux/features/book/booksSlice";


const UpdateBook = () => {
  const { id } = useParams()
  const books = useAppSelector((state) => state.books);
  const selectedBook = books.filter(book => book.id === id);
  const { title, author, genre, publicationDate, reviews } = selectedBook[0] 



  const dispatch = useAppDispatch()

  const handleDeleteBook =(id: number)=>{

    dispatch(deleteBook({selectedBook}))
    console.log(id)
    
}



  dispatch(getSingleBook({
    id: id,
    title: title,
    author: author,
    genre: genre,
    publicationDate: publicationDate,
    reviews: reviews
  }))

  return (
    <>
      <Header />
      <div className="h-screen ">
        <div className="w-1/2 mx-auto my-10 card bg-neutral text-neutral-content py-9">
          <div className="items-center text-center card-body">
            <h2 className="card-title">Title:{title}</h2>
            <p><span className="font-bold ">Author:</span>  {author}</p>
            <p> <span className="font-bold ">Genre:</span>{genre}</p>
            <p> <span className="font-bold ">Publicationdate:</span>{publicationDate}</p>
            <h1> <span className="font-bold ">Revies:</span>{reviews}</h1>
            <div className="justify-end card-actions">
            <Link to={`/updateBook/${id}`}><button className="btn btn-sm btn-primary">Edit</button></Link>
            <button onClick={()=>handleDeleteBook((selectedBook?.id))} className="btn btn-sm btn-warning ms-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateBook;


                               