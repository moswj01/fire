// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeBB8ncMDVh3qjY-le8fgx4SVbg_HKRyw",
  authDomain: "resume-cv-267b8.firebaseapp.com",
  projectId: "resume-cv-267b8",
  storageBucket: "resume-cv-267b8.appspot.com",
  messagingSenderId: "816157678554",
  appId: "1:816157678554:web:a5a6fe6ecde7e9af30bee3",
  measurementId: "G-699K5MY2FJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
