import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUCvrka8DFisUiIimtbW_cFzCDONqg-Ls",
  authDomain: "clone-a33df.firebaseapp.com",
  projectId: "clone-a33df",
  storageBucket: "clone-a33df.appspot.com",
  messagingSenderId: "90185314451",
  appId: "1:90185314451:web:4803bfee28bb07da2bdd66",
  measurementId: "G-G9TV9Y3PWF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get authentication and Firestore instances
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
