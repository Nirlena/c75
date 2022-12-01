import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA4yP1hi1r8ecnXl4S8mMWoiARGTYFjp0c",
  authDomain: "bicycles-f3075.firebaseapp.com",
  projectId: "bicycles-f3075",
  storageBucket: "bicycles-f3075.appspot.com",
  messagingSenderId: "98023474287",
  appId: "1:98023474287:web:0b9ce7c814c6ff5d16b99a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
