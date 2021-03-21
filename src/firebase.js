import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrUpPWWUf5OGOaRPWIWi3tRZIzXTTCw0",
  authDomain: "linkedin-clone-4ca57.firebaseapp.com",
  projectId: "linkedin-clone-4ca57",
  storageBucket: "linkedin-clone-4ca57.appspot.com",
  messagingSenderId: "1007842410172",
  appId: "1:1007842410172:web:765b9f029cfc0733061ab9",
  measurementId: "G-3QW1LGKNVL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
