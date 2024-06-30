// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "fw-blogs.firebaseapp.com",
  projectId: "fw-blogs",
  storageBucket: "fw-blogs.appspot.com",
  messagingSenderId: "490458083081",
  appId: "1:490458083081:web:9fd9a6dc53f5093875edd8",
  measurementId: "G-S04HER7WSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
