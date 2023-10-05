import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BookList from './components/BookList'
import { Book } from './types/types'



const App:React.FC=()=> {


  const top10Books:Book[] = [
    { id:1,title: 'Book 1',image:'../public/Images/topBooks (1).avif'},
    { id:2,title: 'Book 2',image:'../public/Images/topBooks (1).jpg'},
    { id:3,title: 'Book 3',image:'../public/Images/topBooks (1).png'},
    { id:4,title: 'Book 4',image:'../public/Images/topBooks (1).webp'},
    { id:5,title: 'Book 5',image:'../public/Images/topBooks (2).jpg'},
    { id:6,title: 'Book 6',image:'../public/Images/topBooks (3).jpg'},
    { id:7,title: 'Book 7',image:'../public/Images/topBooks (4).jpg'},
    { id:8,title: 'Book 8',image:'../public/Images/topBooks (5).jpg'},
    { id:9,title: 'Book 9',image:'../public/Images/topBooks (6).jpg'},
    { id:10,title: 'Book 10',image:'../public/Images/topBooks (7).jpg'}, 
  ];

 

  return (
    <div>
      <Header/>

<BookList books={top10Books}/>
    
      <Footer/>
    </div>
  )
}

export default App
