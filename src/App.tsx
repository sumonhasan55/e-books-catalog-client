import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BookList from './components/BookList'


const App:React.FC=()=> {


  const top10Books = [
    { title: 'Book 1' },
    { title: 'Book 2' },
    { title: 'Book 3' },
    { title: 'Book 4' },
    { title: 'Book 5' },
    { title: 'Book 6' },
    { title: 'Book 7' },
    { title: 'Book 8' },
    { title: 'Book 9' },
    { title: 'Book 10' },
    // Add more books here
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
