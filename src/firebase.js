import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA7TaHRmQ7qYMm_hdsOG2Hakl3ZTkmwvKg",
  authDomain: "laaps-42d1f.firebaseapp.com",
  databaseURL: "https://laaps-42d1f.firebaseio.com",
  projectId: "laaps-42d1f",
  storageBucket: "laaps-42d1f.appspot.com",
  messagingSenderId: "1061804532343",
  appId: "1:1061804532343:web:9e232d55b11cd777a65c72",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();

export { db, auth, firebase, functions };
