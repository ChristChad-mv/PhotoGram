// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYpbZZn-ZMdQQCK_wRIF77Zq0XNyGJJio",
  authDomain: "photogram-d4b18.firebaseapp.com",
  projectId: "photogram-d4b18",
  storageBucket: "photogram-d4b18.appspot.com",
  messagingSenderId: "893508735126",
  appId: "1:893508735126:web:eaad28ef37040fee6cb2b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;