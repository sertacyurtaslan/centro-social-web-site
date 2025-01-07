import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from 'firebase/functions';
import {Credentials} from "../../assets/features/Credentials";

const firebaseConfig = {
    apiKey: Credentials.FIREBASE_API_KEY,
    authDomain: Credentials.FIREBASE_AUTH_DOMAIN,
    projectId: Credentials.FIREBASE_PROJECT_ID,
    storageBucket: Credentials.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Credentials.FIREBASE_MESSAGING_SENDER_ID,
    appId: Credentials.FIREBASE_APP_ID,
    measurementId: Credentials.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

export { app, auth, firestore, googleProvider, getStorage };