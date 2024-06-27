// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { analytics };