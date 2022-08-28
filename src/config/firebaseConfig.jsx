// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu83Jh5tn1le-UqtMYftMhSSMb-UOKY9E",
    authDomain: "woishop-8b855.firebaseapp.com",
    projectId: "woishop-8b855",
    storageBucket: "woishop-8b855.appspot.com",
    messagingSenderId: "1032195570899",
    appId: "1:1032195570899:web:5ac9acace2c7dad3f42826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
