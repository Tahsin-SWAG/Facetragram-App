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
  apiKey: "AIzaSyC-RvjDhDKe3E6yrzRDnolGtWIfK4GBszs",
  authDomain: "fb-clone-dev-68669.firebaseapp.com",
  projectId: "fb-clone-dev-68669",
  storageBucket: "fb-clone-dev-68669.appspot.com",
  messagingSenderId: "537964779094",
  appId: "1:537964779094:web:ac8f4d4c16178e8f80cdf7",
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
