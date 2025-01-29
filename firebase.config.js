import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1uKMx_OMsewp6sarz-CYexejrEF0TJcM",
  authDomain: "auth-moha-milon-73453.firebaseapp.com",
  projectId: "auth-moha-milon-73453",
  storageBucket: "auth-moha-milon-73453.firebasestorage.app",
  messagingSenderId: "68250469780",
  appId: "1:68250469780:web:de346514e636b3422dfb81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
