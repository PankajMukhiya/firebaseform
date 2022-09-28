// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import database
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSGwhuzfoeY4NOqyUovDKFduHMTw0AIws",
  authDomain: "contact-form-c6c94.firebaseapp.com",
  databaseURL: "https://contact-form-c6c94-default-rtdb.firebaseio.com",
  projectId: "contact-form-c6c94",
  storageBucket: "contact-form-c6c94.appspot.com",
  messagingSenderId: "840474384050",
  appId: "1:840474384050:web:dfb3342d2f2a116cf19bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
