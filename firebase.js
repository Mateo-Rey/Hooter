import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCh79A2jjsfwru7wb1pu-h07FvnENYtdEs",
  authDomain: "hooter-8e882.firebaseapp.com",
  projectId: "hooter-8e882",
  storageBucket: "hooter-8e882.appspot.com",
  messagingSenderId: "101989011392",
  appId: "1:101989011392:web:538d4d453253e4e9ab8225",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
