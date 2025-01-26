// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH5zq2woMZK9nsBuMPZTMGQ_eQ4-SuzNM",
  authDomain: "cheppylaundry.firebaseapp.com",
  projectId: "cheppylaundry",
  storageBucket: "cheppylaundry.firebasestorage.app",
  messagingSenderId: "251845250104",
  appId: "1:251845250104:web:249ff2b4d325cd7a31aacd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db = getFirestore();
export { auth, db };