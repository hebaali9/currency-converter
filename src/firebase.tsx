import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9TwYOlGC-i61SDmRdYMTnBlhQkGWKt84",
  authDomain: "currencyproject-2f7ff.firebaseapp.com",
  databaseURL: "https://currencyproject-2f7ff-default-rtdb.firebaseio.com/",
  projectId: "currencyproject-2f7ff",
  storageBucket: "currencyproject-2f7ff.appspot.com",
  messagingSenderId: "627025741672",
  appId: "1:627025741672:web:a7f06c8725e1a66f4d78dd",
  measurementId: "G-R46CJPS3MZ",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const auth = getAuth();

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const dbData = {
  users: {
    id: {
      firstName: "",
      lastName: "",
    },
  },
};
