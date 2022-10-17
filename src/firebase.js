import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWoWROoOsYOYrESI4G2ROP3UA7vlJbEr4",
    authDomain: "contact-book-d03c8.firebaseapp.com",
    projectId: "contact-book-d03c8",
    storageBucket: "contact-book-d03c8.appspot.com",
    messagingSenderId: "89550667862",
    appId: "1:89550667862:web:a573794ac8d3ce1aadbbf7"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Google Auth Provider
const googleAuthProvider = new firebase.auth.googleAuthProvider();
const facebookAuthProvider = new firebase.auth.facebookAuthProvider();


export { auth, googleAuthProvider, facebookAuthProvider };

