import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7CR1x7CJ0zpzqufCfh5IvPxExQUPmOxc",
  authDomain: "linkedin-clone-7feda.firebaseapp.com",
  projectId: "linkedin-clone-7feda",
  storageBucket: "linkedin-clone-7feda.appspot.com",
  messagingSenderId: "453825363113",
  appId: "1:453825363113:web:ca0e8c490b54f54961bdb8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };

export default db;
