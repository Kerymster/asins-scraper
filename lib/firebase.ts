import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDWQWlI6M_Al0T_-4Fl3zhE9U8jwVLdVQ",
  authDomain: "asins-scraper.firebaseapp.com",
  projectId: "asins-scraper",
  storageBucket: "asins-scraper.firebasestorage.app",
  messagingSenderId: "27844051725",
  appId: "1:27844051725:web:063de40aa5b5b17370a644",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
