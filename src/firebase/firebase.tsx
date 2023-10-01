// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = app.auth();

export { auth };