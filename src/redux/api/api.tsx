
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export  const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (builder) => ({
    getBooks: builder.query<any, string>({
      query: (query) => `?q=${query}`,
    }),
    
    
  }),
});

export const { useGetBooksQuery } =  apiSlice;
