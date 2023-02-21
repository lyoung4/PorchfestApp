// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAiEnWTmZiL3U5Wg0VEylUMiIrVPPrr5A",
  authDomain: "porchfestapp.firebaseapp.com",
  databaseURL: "https://porchfestapp-default-rtdb.firebaseio.com",
  projectId: "porchfestapp",
  storageBucket: "porchfestapp.appspot.com",
  messagingSenderId: "451755019298",
  appId: "1:451755019298:web:2391411eb7064a6d9a4e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);