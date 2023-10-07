


// Define the book data type
export interface Book {
  id: string | number | undefined;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string;
}

// Define the review data type
export interface Review {
  ReviewId: number;
  Rating: number;
  Comment: string;
}

// Define the Redux state
export interface AppState {
  book: Book | null; // The selected book or null if not selected
}

// Define route props
export interface RouteParams {
  id: string;
}
