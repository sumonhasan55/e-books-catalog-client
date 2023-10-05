import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Header from "../components/Header";



const NewBooks = () => {
    const books =useAppSelector((state)=>state.books);
    console.log(books)
    return (
        <div>
              <Header/>
              <h1 className=" text-center my-5 font-bold text-3xl">New Book List!</h1>
            
            <table className="table my-6 w-full">
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>PublicationDate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,id)=> (
                        <tr key={id}>
                            <td>{book?.id}</td>
                            <td>{book?.title}</td>
                            <td>{book?.author}</td>
                            <td>{book?.genre}</td>
                            <td>{book?.publicationDate}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-warning ms-2">Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
            <Link to= "/addNewBook" className="my-3 btn btn-success">AddNew +</Link>
            

        </div>
    );
};

export default NewBooks;