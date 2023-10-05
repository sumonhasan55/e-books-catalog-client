import { createSlice } from "@reduxjs/toolkit";
import { bookDataList } from "../../../components/Data";

const bookSlice = createSlice({
  name:"books",
  initialState:bookDataList,
  reducers:{
    addBook:(state,action)=>{
      state.push(action.payload)
      console.log(action)
    }

  }
})

export const {addBook} =bookSlice.actions;
export default bookSlice.reducer;