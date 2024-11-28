import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "iseowo-fe043.firebaseapp.com",
  projectId: "iseowo-fe043",
  storageBucket: "iseowo-fe043.firebasestorage.app",
  messagingSenderId: "470767899870",
  appId: "1:470767899870:web:ace69801b50ecb6a465e4f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
