// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAin70L2OkWGT47CI11FvbF2ApUUyL6Gbk",
  authDomain: "netflix-gpt-60afd.firebaseapp.com",
  projectId: "netflix-gpt-60afd",
  storageBucket: "netflix-gpt-60afd.appspot.com",
  messagingSenderId: "1087096062138",
  appId: "1:1087096062138:web:17fcc58eb70cabbd454283",
  measurementId: "G-C7N2NXTEV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();