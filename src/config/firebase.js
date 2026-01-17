// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqwFaHSI1KmvGmzuBFl0ss6-svZ5vGhwQ",
    authDomain: "chill-thrive-a384c.firebaseapp.com",
    projectId: "chill-thrive-a384c",
    storageBucket: "chill-thrive-a384c.firebasestorage.app",
    messagingSenderId: "136012873510",
    appId: "1:136012873510:web:d1873cafbb08fcfc764be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
