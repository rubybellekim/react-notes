// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJs7GiKWmnG0c4-JqEeljY7CjviWz9iVI",
  authDomain: "react-notes-5491d.firebaseapp.com",
  projectId: "react-notes-5491d",
  storageBucket: "react-notes-5491d.appspot.com",
  messagingSenderId: "914979721400",
  appId: "1:914979721400:web:db6e9b1ebf75278648a44d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
