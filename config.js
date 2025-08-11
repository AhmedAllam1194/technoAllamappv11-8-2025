// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJdGS3ZQ4-ZWsR-_m_B45uifzVKP3kXFY",
  authDomain: "allamtechnoapp.firebaseapp.com",
  projectId: "allamtechnoapp",
  storageBucket: "allamtechnoapp.firebasestorage.app",
  messagingSenderId: "213007674911",
  appId: "1:213007674911:web:27caf05761648b82876f2a",
  measurementId: "G-TZD0ESHYE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);
ٍ
