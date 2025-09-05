import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8cIzwhkG9Hz6jhGq2KhvbT4jGT5HKscw",
    authDomain: "chatgroup-8d9f0.firebaseapp.com",
    projectId: "chatgroup-8d9f0",
    storageBucket: "chatgroup-8d9f0.firebasestorage.app",
    messagingSenderId: "60317582546",
    appId: "1:60317582546:web:3c3a378d9d19a67b9e990b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);