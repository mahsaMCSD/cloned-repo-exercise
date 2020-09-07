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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error message", error);
    }
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
