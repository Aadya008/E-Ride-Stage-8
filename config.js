import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB4ls6xo2FarqiNOJY3lWR0n2uwEA_L0WE",
  authDomain: "e-ride-stage-4-e7a33.firebaseapp.com",
  projectId: "e-ride-stage-4-e7a33",
  storageBucket: "e-ride-stage-4-e7a33.appspot.com",
  messagingSenderId: "246365931575",
  appId: "1:246365931575:web:486b3916fdb22c0b7757b2"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
