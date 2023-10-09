
import {  useAppSelector } from "../redux/hooks";
import Header from "../components/Header";





const NewBooks = () => {
    const books =useAppSelector((state)=>state.books);

        
   
    console.log(books)
    return (
        <div>
              <Header/>
              <h1 className="my-5 text-3xl font-bold text-center ">New Book List!</h1>
            
            <table className="table w-full my-6">
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>PublicationDate</th>
                        
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
                          

                        </tr>
                    ))}
                </tbody>

            </table>
          

        </div>
    );
};

export default NewBooks;