// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGQqDtDxcm06tDqCFpUHfn2AGnyE0hKU",
  authDomain: "your-home-n.firebaseapp.com",
  projectId: "your-home-n",
  storageBucket: "your-home-n.appspot.com",
  messagingSenderId: "658217262991",
  appId: "1:658217262991:web:c8cb5334ddd03af3a1b5fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;