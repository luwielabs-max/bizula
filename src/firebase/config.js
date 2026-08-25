import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqiurjFxP8tSae-dHVdKd-fTcWYlziopE",
  authDomain: "bizula.firebaseapp.com",
  projectId: "bizula",
  storageBucket: "bizula.firebasestorage.app",
  messagingSenderId: "683095173745",
  appId: "1:683095173745:web:647e06ece1c35c55da89d0",
  measurementId: "G-9Q59SD3DP3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);