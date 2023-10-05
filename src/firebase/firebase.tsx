
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwvinEZPx6QIslcQw0eCJhtkpUbu1HwZQ",
  authDomain: "e-books-catalog.firebaseapp.com",
  projectId: "e-books-catalog",
  storageBucket: "e-books-catalog.appspot.com",
  messagingSenderId: "711172367118",
  appId: "1:711172367118:web:b086e7c880ada9284c2d5f",
  measurementId: "G-XPP4550M3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;