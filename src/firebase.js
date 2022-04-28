import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL1UXbrBao8PG9spJm9c8PvmC-xMktP3A",
  authDomain: "npm-webpack.firebaseapp.com",
  projectId: "npm-webpack",
  storageBucket: "npm-webpack.appspot.com",
  messagingSenderId: "1020260992722",
  appId: "1:1020260992722:web:c28126c54207dc303ecf0b",
  measurementId: "G-3YFBPJDEQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;