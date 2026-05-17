import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAj8wMNW7EyxiwbiPNyFAXEDcHdK1j80c",
  authDomain: "first-thought-initiative.firebaseapp.com",
  databaseURL: "https://first-thought-initiative-default-rtdb.firebaseio.com",
  projectId: "first-thought-initiative",
  storageBucket: "first-thought-initiative.firebasestorage.app",
  messagingSenderId: "1027947972972",
  appId: "1:1027947972972:web:482bd6a731da0fc0238b49",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);