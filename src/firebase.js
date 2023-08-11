import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCytkfiWd1XxwDr18DHJPHBNhzjwAcJfG0",
  authDomain: "presionpose-demo.firebaseapp.com",
  projectId: "presionpose-demo",
  storageBucket: "presionpose-demo.appspot.com",
  messagingSenderId: "328989816741",
  appId: "1:328989816741:web:e1ad6ff361ddfc31e7da4c",
  measurementId: "G-635TRM2FR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()

export default  app;