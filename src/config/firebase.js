// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLfMUu66NsTXYXufAZS3qO2HbrDwEaYbE",
    authDomain: "sup-de-recette.firebaseapp.com",
    projectId: "sup-de-recette",
    storageBucket: "sup-de-recette.appspot.com",
    messagingSenderId: "1081977866605",
    appId: "1:1081977866605:web:1f21b67ce6fde9c9ee7264"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)





