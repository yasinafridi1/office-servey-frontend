// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2nvpIcWbv_6IsAYhCY1DU-9G_5oJhdic",
  authDomain: "ms-offices-survey.firebaseapp.com",
  projectId: "ms-offices-survey",
  storageBucket: "ms-offices-survey.appspot.com",
  messagingSenderId: "236180208192",
  appId: "1:236180208192:web:3bfcf5c514708744b27da5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
