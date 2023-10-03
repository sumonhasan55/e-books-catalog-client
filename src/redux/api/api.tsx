//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&pageToken=${pageToken}' }),
//   endpoints: (builder) => ({
//     getBooks: builder.query ({
//       query: (name) => "/",
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetBooksQuery} = apiSlice;



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
