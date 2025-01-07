import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyB_maRKCuZ2D9ZdqGOhF4pTxMx6NrXvPuw",
    authDomain: "social-center-app.firebaseapp.com",
    projectId: "social-center-app",
    storageBucket: "social-center-app.firebasestorage.app",
    messagingSenderId: "216296616231",
    appId: "1:216296616231:web:574b52045d9c7d711bb902",
    measurementId: "G-P16T8Q8999"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

export { app, auth, firestore, googleProvider, getStorage };