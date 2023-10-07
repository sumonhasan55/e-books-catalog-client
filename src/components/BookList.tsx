import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteBook } from "../redux/features/book/booksSlice";


const NewBooks = () => {
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch()

  const handleDeleteBook = (id: number) => {

    dispatch(deleteBook({ id: id }))
    console.log("delete book")

  }
  console.log(books)
  return (
    <div className="mx-auto " >

      <h1 className='my-10 font-mono text-3xl font-extrabold text-center md:font-bold font md:text-5xl'>Top 10 Recently Added Books List </h1>
      <div className="grid items-center w-full grid-cols-1 mx-auto my-8 ml-12 md:gap-4 md:grid-cols-3">

        {books.map((book, id) => (

          <div key={id} className="my-10 border border-b-8 border-r-8 shadow-xl card w-96 bg-base-100 hover:bg-neutral-900 hover:text-white border-neutral-900 hover:border-teal-700 hover:border-b-8 hover:border-r-8 ">

            <div className="card-body">
              <Link to={`/bookDetails/${book?.id}`}><h1 className="text-2xl font-bold">{book?.title}</h1></Link>
              <p className="py-2"><span className="font-bold ">Author:</span>{book?.author}</p>
              <p className="py-2"> <span className="font-bold ">Genre:</span>{book?.genre}</p>
              <p className="py-2"><span className="font-bold ">PublicationDate:</span>{book?.publicationDate}</p>

              <Link to={`/updateBook/${book?.id}`}><button className="w-full btn btn-outline btn-info">Edit</button></Link>


              <button onClick={() => handleDeleteBook(book?.id)} className="w-full btn btn-outline btn-error">Delete</button>


            </div>
          </div>

        ))}
      </div>

      <Link to="/allbooks" className="w-full bg-black btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg" >AllBooks </Link>

    </div>
  );
};

export default NewBooks;


