// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz6Q9JZv53E5C3K3_GgkuOqkq2k-8mGVA",
  authDomain: "nextjs-muebles.firebaseapp.com",
  projectId: "nextjs-muebles",
  storageBucket: "nextjs-muebles.appspot.com",
  messagingSenderId: "440422010035",
  appId: "1:440422010035:web:17a5e8512a971a9114f4c6",
  measurementId: "G-3NZSZXCMBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);