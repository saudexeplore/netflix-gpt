// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtGWM2G2vt4_X__V9PO79QyVoQnRb0CPc",
  authDomain: "netflixgpt-91cd7.firebaseapp.com",
  projectId: "netflixgpt-91cd7",
  storageBucket: "netflixgpt-91cd7.appspot.com",
  messagingSenderId: "458407883952",
  appId: "1:458407883952:web:7f8459302f501feeb6b775",
  measurementId: "G-LL9ZDV4RY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);