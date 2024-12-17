// js/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAUu6e3u5Ry6Sr3q5Hla_RAj4SLGcnfGM",
  authDomain: "prepquest-app-8e1ea.firebaseapp.com",
  projectId: "prepquest-app-8e1ea",
  storageBucket: "prepquest-app-8e1ea.firebasestorage.app",
  messagingSenderId: "1005477415161",
  appId: "1:1005477415161:web:1a4d86a3d19576dc93fa28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Firestore instance
const db = getFirestore(app);

export default db;
