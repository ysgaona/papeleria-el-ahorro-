// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs8W9i9-w5UO3k4Tf3U4GG2sdTzs9o-Nc",
  authDomain: "electrocredits-app.firebaseapp.com",
  projectId: "electrocredits-app",
  storageBucket: "electrocredits-app.appspot.com",
  messagingSenderId: "926904465940",
  appId: "1:926904465940:web:bb78d6adb02b82bc9f0501"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp