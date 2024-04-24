
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
  apiKey: "AIzaSyC4S0cwJ-1h8n5PTyr9CB0kDiYKCzF2ljk",
  authDomain: "nokart-68207.firebaseapp.com",
  projectId: "nokart-68207",
  storageBucket: "nokart-68207.appspot.com",
  messagingSenderId: "1060167504455",
  appId: "1:1060167504455:web:65fb8bb2aa1a487ad45762",
  measurementId: "G-YXP8NKSP5G"
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