// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzYXeb6z1aAHJ9-tk9CZxEDns3XjQOUEU",
    authDomain: "instagram-e60f4.firebaseapp.com",
    projectId: "instagram-e60f4",
    storageBucket: "instagram-e60f4.appspot.com",
    messagingSenderId: "591591940342",
    appId: "1:591591940342:web:cf6d9f956c8a78b07cccd7",
    measurementId: "G-X6Q41JQVT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
