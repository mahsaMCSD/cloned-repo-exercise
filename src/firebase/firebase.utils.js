import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAoheVFb1scH4MUn0Udb8tWMPx1gG4_lOQ",
  authDomain: "crown-db-3f8fb.firebaseapp.com",
  databaseURL: "https://crown-db-3f8fb.firebaseio.com",
  projectId: "crown-db-3f8fb",
  storageBucket: "crown-db-3f8fb.appspot.com",
  messagingSenderId: "412581378702",
  appId: "1:412581378702:web:5a215e9568ad17541027df",
};
firebase.initializeApp(config)

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;