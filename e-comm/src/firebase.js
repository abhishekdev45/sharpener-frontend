// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbOOj6q1hu2HK_ZWPeBmhuM-1aNs1jDPE",
  authDomain: "movie-a7a01.firebaseapp.com",
  databaseURL: "https://movie-a7a01-default-rtdb.firebaseio.com",
  projectId: "movie-a7a01",
  storageBucket: "movie-a7a01.appspot.com",
  messagingSenderId: "719163316661",
  appId: "1:719163316661:web:07e57f7ab06e036900e1fc",
  measurementId: "G-CPWWL3TLY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };