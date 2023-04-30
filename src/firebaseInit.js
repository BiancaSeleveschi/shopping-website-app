// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain: "shopping-app-b485c.firebaseapp.com",
    projectId: "shopping-app-b485c",
    storageBucket: "shopping-app-b485c.appspot.com",
    messagingSenderId: "852141117874",
    appId: process.env.FIREBASE_API_ID,
    measurementId: "G-63CTT3YLR7"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)

