// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "process.env.FIREBASE_API_KEY",
    authDomain: "shopping-app1-b686e.firebaseapp.com",
    projectId: "shopping-app1-b686e",
    storageBucket: "shopping-app1-b686e.appspot.com",
    messagingSenderId: "976720044389",
    appId: "process.env.FIREBASE_API_ID",
    measurementId: "G-GH1415LYBG"
};
const firebase1 = firebase.initializeApp(firebaseConfig)
const FieldValue = firebase.firestore.FieldValue
const EmailAuthProvider = firebase.auth.EmailAuthProvider
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
// Initialize Firebase
export {firebase1 as firebase, FieldValue, EmailAuthProvider, GoogleAuthProvider}

