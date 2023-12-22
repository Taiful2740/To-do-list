// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9jaxGWshjqN3ctgBygKeVp8ebP-t4z9Q",
  authDomain: "job-task-4edf4.firebaseapp.com",
  projectId: "job-task-4edf4",
  storageBucket: "job-task-4edf4.appspot.com",
  messagingSenderId: "956676967477",
  appId: "1:956676967477:web:30c353d51114e02e33357c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
