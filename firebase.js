import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAm_5cXV_W2AQk__Sussqm7zgxtkkbMwdU",
    authDomain: "socialmediahostapi.firebaseapp.com",
    projectId: "socialmediahostapi",
    storageBucket: "socialmediahostapi.appspot.com",
    messagingSenderId: "548470860637",
    appId: "1:548470860637:web:a775f61125bd451b7096b4",
  } 

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app
export { db, storage }