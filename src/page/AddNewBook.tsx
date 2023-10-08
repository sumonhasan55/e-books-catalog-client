import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addBook } from "../redux/features/book/booksSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"


export default function AddNewBook() {

  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [publicationDate, setPublicatioDate] = useState('')
  const [reviews, setReviews] = useState('')
  const books = useAppSelector((state) => state.books);
  const navigate =useNavigate()
  

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addBook({ id: books[books?.length - 1]?.id + 1, title, author, genre, publicationDate, reviews }))
  
    navigate( "/")

  }


  return (
    <>
    <Header/>
    <div className="p-10 m-20 mx-auto my-20 border-2 border-black w-96 rounded-xl ">
      <h1 className="text-3xl font-bold text-center">Add A New Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <p className="font-bold ">Title:</p>
          <input   placeholder="Title" name="title" className="form-control" onChange={e => setTitle(e.target.value)}  required/>
        </div>
        <div className="my-2">
          <p className="font-bold ">Author:</p>
          <input placeholder="Author" name="author" className="form-control" onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div className="my-2">
          <p className="font-bold ">Genre:</p>
          <input placeholder="Genre" type="text" name="genre" className="form-control" onChange={e => setGenre(e.target.value)} required/>
        </div>
        <div className="my-2">
          <p className="font-bold ">PublicationsDate:</p>
          <input placeholder="publicationsDate" type="date" name="publicationDate" className="form-control" onChange={e => setPublicatioDate(e.target.value)} />
        </div>
        <div className="my-2">
          <p className="font-bold ">Reviews:</p>
          <input placeholder="Review" type="text" name="reviews" className="form-control" onChange={e => setReviews(e.target.value)} required />
        </div>
        <button className="btn btn-neutral"><input type="submit" /></button>
      </form>
    </div>
    </>
  )
}