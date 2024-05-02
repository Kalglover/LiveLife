// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjpq7132SOwWk3QXk0ZjDmoYgyxrUTb3M",
  authDomain: "mindmasters-5a3fc.firebaseapp.com",
  projectId: "mindmasters-5a3fc",
  storageBucket: "mindmasters-5a3fc.appspot.com",
  messagingSenderId: "302138358416",
  appId: "1:302138358416:web:24bd5947d284c68ec73615",
  measurementId: "G-QJQQEP9F0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
