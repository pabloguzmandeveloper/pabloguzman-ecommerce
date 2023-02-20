// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFI6OwCbtM4y6k7KNiUB7zVP9gN2UbcAo",
  authDomain: "pabloguzam-ecommerce.firebaseapp.com",
  projectId: "pabloguzam-ecommerce",
  storageBucket: "pabloguzam-ecommerce.appspot.com",
  messagingSenderId: "5004127876",
  appId: "1:5004127876:web:febf3da39048f0fff09cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbComosano = getFirestore(app)