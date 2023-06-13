// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCInTHf_nEyWMF9SvzON1U3iasBbkEwP08",
  authDomain: "proyectofinalcoder-d9ec5.firebaseapp.com",
  projectId: "proyectofinalcoder-d9ec5",
  storageBucket: "proyectofinalcoder-d9ec5.appspot.com",
  messagingSenderId: "934041645390",
  appId: "1:934041645390:web:ee90ccd3bec41b58892e1f",
  measurementId: "G-L5FGTCD83Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);