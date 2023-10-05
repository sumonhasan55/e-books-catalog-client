import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { apiSlice } from '../redux/api/api'
import  BookReducer  from '../redux/features/book/booksSlice'





export const store = configureStore({
  reducer: {
    counter:counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    books:BookReducer
 
    
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),


  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch