import { initializeApp, getApps } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE-rfG7RsZp2aXg0PQQKPgInRV_fOYZys",
  authDomain: "next-firebase-cce41.firebaseapp.com",
  projectId: "next-firebase-cce41",
  storageBucket: "next-firebase-cce41.appspot.com",
  messagingSenderId: "477754611078",
  appId: "1:477754611078:web:f51f50d4cf1f365fb84807",
};

const firebase_app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { db, auth, provider };
