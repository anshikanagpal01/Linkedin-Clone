import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDsKfkaZZwRsA46QY__jkHVOI0n8trkT7A",
  authDomain: "linkedin-clone-d077f.firebaseapp.com",
  projectId: "linkedin-clone-d077f",
  storageBucket: "linkedin-clone-d077f.appspot.com",
  messagingSenderId: "406814493628",
  appId: "1:406814493628:web:813a5c005054943f41b9b9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };