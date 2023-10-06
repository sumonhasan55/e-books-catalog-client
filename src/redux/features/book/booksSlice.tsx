import { createSlice } from "@reduxjs/toolkit";
import { bookDataList } from "../../../components/Data";

const bookSlice = createSlice({
  name:"books",
  initialState:bookDataList,
  reducers:{
    addBook:(state,action)=>{
      state.push(action.payload)
      console.log(action)
    },
    updateBook:(state,action)=>{
     const {id,title,author,genre,publicationDate,reviews} =action.payload;
     const ub=state.find(book=>book.id == id);
     if(ub){
      ub.title=title;
      ub.author=author;
      ub.genre=genre;
      ub.publicationDate=publicationDate;
      ub.reviews=reviews
     }

      console.log(action)
    },
    deleteBook:(state,action)=>{
      const {id}= action.payload;
      const ub=state.find(book=>book.id == id);
      if(ub){
        return state.filter(f=>f.id !== id);
      }

    },
    getSingleBook: (state, action) => {
      const { id } = action.payload;
      // You can set the selected book in your application state
      // Here, you can log it for demonstration purposes
      const selectedBook = state.find((book) => book.id === id);
      console.log(selectedBook);
    },


   

  }
})

export const {addBook,updateBook,deleteBook,getSingleBook} =bookSlice.actions;
export default bookSlice.reducer;