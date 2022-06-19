// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBxrQfGxEjv6TGruNISwbpvAnWK-6zQpxQ",
  authDomain: "bookingsystem-59f0e.firebaseapp.com",
  projectId: "bookingsystem-59f0e",
  storageBucket: "bookingsystem-59f0e.appspot.com",
  messagingSenderId: "192518105452",
  appId: "1:192518105452:web:abf3147c90d90705402b49",
  measurementId: "G-S16VDR5XY4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

