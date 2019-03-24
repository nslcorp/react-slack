import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyA4-GRXHyUmkV-0M6k4yK13HYn3YUx0aOE",
  authDomain: "react-slack-dfcbb.firebaseapp.com",
  databaseURL: "https://react-slack-dfcbb.firebaseio.com",
  projectId: "react-slack-dfcbb",
  storageBucket: "react-slack-dfcbb.appspot.com",
  messagingSenderId: "836425913553"
};

firebase.initializeApp(config);

export default firebase
