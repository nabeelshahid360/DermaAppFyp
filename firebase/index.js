import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbAiLfrhs2e1cg6BDroN_5jeSVfn5DEds",
  authDomain: "dr-derma-2c831.firebaseapp.com",
  projectId: "dr-derma-2c831",
  storageBucket: "dr-derma-2c831.appspot.com",
  messagingSenderId: "441661919166",
  appId: "1:441661919166:web:37c62895504da024eff3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };