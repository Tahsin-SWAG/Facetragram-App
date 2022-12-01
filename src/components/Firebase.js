import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCzfzISJ1peqqbV7NyJFFfxU2AVBbhw20s",
  authDomain: "facetragram.firebaseapp.com",
  projectId: "facetragram",
  storageBucket: "facetragram.appspot.com",
  messagingSenderId: "1030128475784",
  appId: "1:1030128475784:web:bbf38dcfa306bce15c493d",
  measurementId: "G-D7BCVCMGQM"
};
const firebase = initializeApp(firebaseConfig);

export default firebase;

const auth = getAuth();

export function signup(email, passoword) {
  return createUserWithEmailAndPassword(auth, email, passoword);
}

export  function Google() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
  .catch((error) => {
    console.log(error);
  }) 
}

export function login(email, passoword) {
  return signInWithEmailAndPassword(auth, email, passoword);
}

export function logout() {
  return signOut(auth);
}


export function useAuth() {
  const [currentuser, setcurrentuser] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setcurrentuser(user));
    return unsub;
  });

  return currentuser;
}
