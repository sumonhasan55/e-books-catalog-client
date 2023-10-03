import { Book } from '../types/types';

interface Props {
    books: Book[];
  }

const BookList: React.FC<Props>  = ({ books }) => {
  console.log(books)
  return (
    <div>
     

      <h1 className='my-10 text-5xl font-bold text-center '>Top 10 Recently Added Books </h1>
        <div className="grid items-center w-full grid-cols-1 gap-4 mx-auto my-5 md:grid-cols-3">
        {books.map((book) => (
          
          <>
          <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={book?.image} alt="Books" className='h-64 w-60 rounded-xl' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {book?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
   
  </div>
</div>
          </>
        ))}

</div>
      
    </div>
    
  );
};

export default BookList;
