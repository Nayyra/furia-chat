
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzaLd_dplEZM1rxuyBBLxBDWYJNw0dSUM",
  authDomain: "chat-furia-1ded5.firebaseapp.com",
  projectId: "chat-furia-1ded5",
  storageBucket: "chat-furia-1ded5.firebasestorage.app",
  messagingSenderId: "25578664578",
  appId: "1:25578664578:web:9f6b6c5a1fc40c8bf33a9b",
  measurementId: "G-8RBRMEHEX7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);