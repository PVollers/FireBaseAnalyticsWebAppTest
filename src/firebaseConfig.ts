// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6vsLmCnQHQFMqXocUYhUMxoCadKBpH6k",
    authDomain: "analyticstest-afdd4.firebaseapp.com",
    projectId: "analyticstest-afdd4",
    storageBucket: "analyticstest-afdd4.appspot.com",
    messagingSenderId: "699604272816",
    appId: "1:699604272816:web:3ae0dca249d466a6aedd75",
    measurementId: "G-K9W14TR97V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Enable debug mode for Firebase Analytics
localStorage.setItem('debug', 'firebase:analytics');

// Initialize Firestore with Offline Persistence
const firestoreSettings = {
    localCache: persistentLocalCache()
};

const db = initializeFirestore(app, firestoreSettings);

export { analytics };
