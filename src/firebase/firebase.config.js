// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLfRx9X_Vamh9SCnsK4fAlrGryrM0Jv_I",
    authDomain: "bistro-boss-9f72d.firebaseapp.com",
    projectId: "bistro-boss-9f72d",
    storageBucket: "bistro-boss-9f72d.appspot.com",
    messagingSenderId: "540581798856",
    appId: "1:540581798856:web:5165c19216ee93196116fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;