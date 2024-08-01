// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Th9M-IaXU84bo2RJcFFl7Ev65uqxaPs",
  authDomain: "netflixgpt2-4d48c.firebaseapp.com",
  projectId: "netflixgpt2-4d48c",
  storageBucket: "netflixgpt2-4d48c.appspot.com",
  messagingSenderId: "959362674656",
  appId: "1:959362674656:web:3691d06087cf26c7990585",
  measurementId: "G-3N4K51KN8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 