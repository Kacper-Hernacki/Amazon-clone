import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn2PT3it3lG3Wr7Pt-y568sk-D2-oqzkI",
  authDomain: "clone-467bd.firebaseapp.com",
  databaseURL: "https://clone-467bd.firebaseio.com",
  projectId: "clone-467bd",
  storageBucket: "clone-467bd.appspot.com",
  messagingSenderId: "582976978538",
  appId: "1:582976978538:web:ec348818fec669da9c9413",
  measurementId: "G-HC5E8L4RTZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
