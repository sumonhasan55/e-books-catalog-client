import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BookList from './components/BookList'
import { Book } from './types/types'





const App: React.FC = () => {


  const top10Books: Book[] = [
    { id: 1, title: 'Book 1', image: "https://i.ibb.co/RbdtXRc/top-Books-1.jpg" },
    { id: 2, title: 'Book 2', image: "https://i.ibb.co/C683LQf/top-Books-1.png" },
    { id: 3, title: 'Book 3', image: "https://i.ibb.co/mb6tHNb/top-Books-1.webp" },
    { id: 4, title: 'Book 4', image: "https://i.ibb.co/GRZswrq/top-Books-2.jpg" },
    { id: 5, title: 'Book 5', image: "https://i.ibb.co/HdBymyV/top-Books-3.jpg" },
    { id: 6, title: 'Book 6', image: "https://i.ibb.co/qNVcBFQ/top-Books-4.jpg" },
    { id: 7, title: 'Book 7', image: "https://i.ibb.co/VTR9mRH/top-Books-5.jpg" },
    { id: 8, title: 'Book 8', image: "https://i.ibb.co/PxpfXy0/top-Books-6.jpg" },
    { id: 9, title: 'Book 9', image: "https://i.ibb.co/PmVqL4X/top-Books-7.jpg" },
    { id: 10, title:'Book 10', image: "https://i.ibb.co/PmVqL4X/top-Books-7.jpg" },
  ];



  return (
    <div>
      <Header />

      <BookList books={top10Books} />

      <Footer />
    </div>
  )
}

export default App
