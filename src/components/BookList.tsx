import { Book } from '../types/types';

interface Props {
    books: Book[];
  }

const BookList: React.FC<Props>  = ({ books }) => {
  return (
    <div>
     

      <h1 className='my-10 text-5xl font-bold text-center '>Top 10 Recently Added Books </h1>
        <div className="grid items-center w-full grid-cols-1 gap-4 mx-auto my-5 md:grid-cols-3">
        {books.map((book, index) => (
          
          <>
          <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {book?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
          </>
        ))}

</div>
      
    </div>
    
  );
};

export default BookList;
