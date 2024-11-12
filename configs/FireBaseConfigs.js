// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE8H6SoJkzukAsp7bCxPOILc88AliQujc",
  authDomain: "planejador-de-viagens-com-ia.firebaseapp.com",
  projectId: "planejador-de-viagens-com-ia",
  storageBucket: "planejador-de-viagens-com-ia.firebasestorage.app",
  messagingSenderId: "637171284761",
  appId: "1:637171284761:web:14585bdef37718261ce388",
  measurementId: "G-4YZ8EMKYFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
