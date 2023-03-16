// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4tHkG-Yg_PA6q3UriohmoiTq279jyKYA",
    authDomain: "ecommerce-guzman.firebaseapp.com",
    projectId: "ecommerce-guzman",
    storageBucket: "ecommerce-guzman.appspot.com",
    messagingSenderId: "761522343645",
    appId: "1:761522343645:web:c6066d9c435b72e1435534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbComosano = getFirestore(app)