
import { initializeApp, getApps } from 'firebase/app';
import {
    getAuth,
    OAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithCredential,
    onIdTokenChanged
} from 'firebase/auth';

import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCNy6Vy_M4GuwIxgS5aaj07WsWCQuKsp3o",
    authDomain: "ecom-aba24.firebaseapp.com",
    projectId: "ecom-aba24",
    storageBucket: "ecom-aba24.appspot.com",
    messagingSenderId: "25336288921",
    appId: "1:25336288921:web:8f0239f7919a00d8b28a08",
    measurementId: "G-WETDZD3GEX"
};
  

let FirebaseInstance;

if (getApps().length == 0) {
    FirebaseInstance = initializeApp(firebaseConfig)
}

const MessagingInstance = {
    getMessaging,
    getToken,
    onMessage
};

const AuthInstance = {
    Handle: getAuth(FirebaseInstance),
    onAuthStateChanged,
    onIdTokenChanged,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithCredential,
    OAuthProvider
};

export { FirebaseInstance, AuthInstance, MessagingInstance };