// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyAgD8577h0-1LvOzxXBmXTJROE5HBo84eM",
  authDomain:"seller-auth.firebaseapp.com",
  projectId: "seller-auth",
  storageBucket:"seller-auth.appspot.com",
  messagingSenderId:"27317857552",
  appId:"1:27317857552:web:08d94c6718c4dab7db4995",
  measurementId:"G-LQ5Y6KG1GX"
};


// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const auth = getAuth(app)
