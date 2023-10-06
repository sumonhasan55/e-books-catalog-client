import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BookList from './components/BookList'
import Marquee from 'react-fast-marquee'
import Carousel from './components/Carousel'



const App: React.FC = () => {

  return (
    <div>
      <Header />
      <Marquee pauseOnClick>
        <h1 className='font-extrabold '>E-BOOKS-CATALOG THE BEST BOOKS CATALOG HERE
         EDIT,DELETE
         & AUTHENTIC USER ONLY ADD BOOKS EDIT & DELETE HER BOOKS E-BOOKS-CATALOG
         THE BEST BOOKS CATALOG HERE EDIT,DELETE & AUTHENTIC USER ONLY ADD BOOKS
          EDIT & DELETE HER BOOKS --</h1>
      </Marquee>
      <Carousel />
      <BookList />
      <Footer />
    </div>
  )
}

export default App
