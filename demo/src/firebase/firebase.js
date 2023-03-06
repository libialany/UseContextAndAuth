
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkVgur0QnVfxx6BOik94NIPDvshqInmA",
  authDomain: "testdemo-9213c.firebaseapp.com",
  projectId: "testdemo-9213c",
  storageBucket: "testdemo-9213c.appspot.com",
  messagingSenderId: "747210001311",
  appId: "1:747210001311:web:9866a18fb447a465a68baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
