import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/api";
import { useState } from 'react';
import Header from "../components/Header";
import auth from "../firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";


const AllBooks = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, isLoading, isError, error } = useGetBooksQuery(searchQuery);

  

    const [user] = useAuthState(auth);  
    console.log(data,error,isError,isLoading)
    return (
        <div>
              <Header/>
            <h1 className="my-8 text-5xl font-bold text-center">This is all books Pages</h1>

            <div className="">
                <div className="">


                    <div className="items-center form-control">
                        <input

                            type="text"
                            placeholder="Search books by title, author, or genre"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-1/2 my-5 input input-bordered md:" />


                        {
                            user?.email ? <Link to={"/addNewBook"}><button  id="myButton" className="my-3 btn btn-neutral">Add A New Book</button></Link> :
                            <Link to={"/login"}><button  id="myButton" className="my-3 btn btn-neutral">Add A New Book</button></Link>
                        }
                    </div>
                </div>

            </div>

            <div className="grid items-center w-full grid-cols-1 gap-4 mx-auto my-5 md:grid-cols-3">

                {data?.items.map((book: any) => (
                    <>


                        <div key={book.id} className="shadow-xl card w-96 bg-base-100">
                            <figure><img src={book?.volumeInfo?.imageLinks?.thumbnail} className='h-64 w-60 rounded-xl' alt="Books" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">

                                    {book.volumeInfo.title}

                                </h2>
                                <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
                                <div className="badge badge-outline">Genre: {book.volumeInfo.categories?.join(', ')}</div>
                                <div className="badge badge-outline">Publication Date: {book.volumeInfo.publishedDate}</div>

                            </div>
                        </div>

                    </>
                ))}
            </div>

        </div>

    );
};

export default AllBooks;