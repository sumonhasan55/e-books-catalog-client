import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState } from "react";
import { updateBook } from "../redux/features/book/booksSlice";


const UpdateBook = () => {
    const { id } = useParams()
    const books = useAppSelector((state) => state.books);
    const existingBook = books.filter(book => book?.id == id);
    const { title, author, genre, publicationDate, reviews } = existingBook[0]
    const [utitle, setTitle] = useState(title)
    const [uauthor, setAuthor] = useState(author)
    const [ugenre, setGenre] = useState(genre)
    const [upublicationDate, setPublicatioDate] = useState(publicationDate)
    const [ureviews, setReviews] = useState(reviews)

    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const handleUpdate = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(updateBook({
            id: id,
            title: utitle,
            author: uauthor,
            genre: ugenre,
            publicationDate: upublicationDate,
            reviews: ureviews
        }))
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className="w-1/3 p-10 mx-auto my-20 border-2 border-black rounded-xl ">
                <h1 className="text-3xl font-bold text-center">Update Book</h1>
                <form onSubmit={handleUpdate}>

                    <div className="my-2">
                        <p className="font-bold ">Title:</p>
                        <input placeholder="Title" name="title" className="form-control"
                            value={utitle} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <p className="font-bold ">Author:</p>
                        <input placeholder="Author" name="author" className="form-control"
                            value={uauthor} onChange={e => setAuthor(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <p className="font-bold ">Genre:</p>
                        <input placeholder="Genre" type="text" name="genre" className="form-control"
                            value={ugenre} onChange={e => setGenre(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <p className="font-bold ">PublicationsDate:</p>
                        <input placeholder="publicationsDate" type="date" name="publicationDate" className="form-control" value={upublicationDate} onChange={e => setPublicatioDate(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <p className="font-bold ">Reviews:</p>
                        <input placeholder="Review" type="text" name="reviews" className="form-control" value={ureviews} onChange={e => setReviews(e.target.value)} />
                    </div>
                    <button className="btn btn-info">Update Book</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default UpdateBook;