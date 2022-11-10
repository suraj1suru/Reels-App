// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRzirTuwk4ENUu8WJJOLKdvwbQE58SJ8",
  authDomain: "reels-3695d.firebaseapp.com",
  projectId: "reels-3695d",
  storageBucket: "reels-3695d.appspot.com",
  messagingSenderId: "1012165868655",
  appId: "1:1012165868655:web:13120847199d54d573e19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}