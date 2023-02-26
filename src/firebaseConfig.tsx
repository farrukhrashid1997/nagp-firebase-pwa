import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB35PIV8BhOO6dPgwIuyNO72tPUIt_-yJU",
  authDomain: "nagp-pwa.firebaseapp.com",
  databaseURL: "https://nagp-pwa-default-rtdb.firebaseio.com",
  projectId: "nagp-pwa",
  storageBucket: "nagp-pwa.appspot.com",
  messagingSenderId: "424808725415",
  appId: "1:424808725415:web:1b7f40f360281dec0b1482",
  measurementId: "G-X4PEWF1Q2V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
