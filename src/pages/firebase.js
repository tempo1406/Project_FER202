
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDGA5zPhUMFZSyONvW_XZkfQ-TAHtUQeIg",
  authDomain: "social-login-f29fe.firebaseapp.com",
  projectId: "social-login-f29fe",
  storageBucket: "social-login-f29fe.appspot.com",
  messagingSenderId: "179626241835",
  appId: "1:179626241835:web:87ed5cb9a837c80faf9f6e",
  measurementId: "G-99CRFNXY5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
