// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUZeP7iRuioAV0URZoXeLaXetienmtu-w",
    authDomain: "medium-clone-9e78e.firebaseapp.com",
    projectId: "medium-clone-9e78e",
    storageBucket: "medium-clone-9e78e.appspot.com",
    messagingSenderId: "746785311795",
    appId: "1:746785311795:web:499cf323903fb1ad806746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)


export { auth, provider, db }