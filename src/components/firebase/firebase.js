// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhaf_BYNRS9vp9bXWa8rLsT_weDoqSCsc",
  authDomain: "babycare-e4ce2.firebaseapp.com",
  projectId: "babycare-e4ce2",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "220919218391",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };
