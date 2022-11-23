// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD4ewlwk9Joy4AHfy9DQQShXKJyZ-Lo0A",
    authDomain: "edge-learn.firebaseapp.com",
    projectId: "edge-learn",
    storageBucket: "edge-learn.appspot.com",
    messagingSenderId: "137490130725",
    appId: "1:137490130725:web:c4856063263b565f14dccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;