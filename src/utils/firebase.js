import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: "https://club-react-intro.firebaseio.com",
  projectId: "club-react-intro",
  storageBucket: "club-react-intro.appspot.com",
  messagingSenderId: "204005349416",
  appId: "1:204005349416:web:c244752f0d195c33c37d1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const fb = {
  db,
  users: db.collection('users'),
};