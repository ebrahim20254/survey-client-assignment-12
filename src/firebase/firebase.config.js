// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUHP_f2deXumNLBnjtN2Jso__MOTf0zw",
  authDomain: "survey-client-assignment-12.firebaseapp.com",
  projectId: "survey-client-assignment-12",
  storageBucket: "survey-client-assignment-12.appspot.com",
  messagingSenderId: "304494111693",
  appId: "1:304494111693:web:017360d7087bb66cbe7284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;