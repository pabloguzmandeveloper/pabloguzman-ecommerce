// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // aca va tu codigo de FIREBASE




// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoxPBtDpAv8SFAnISDOfY3qx75qauQrbE",
  authDomain: "preentrega2-guzman.firebaseapp.com",
  projectId: "preentrega2-guzman",
  storageBucket: "preentrega2-guzman.appspot.com",
  messagingSenderId: "940357321068",
  appId: "1:940357321068:web:2a9be3ec49ea95b9cef349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)