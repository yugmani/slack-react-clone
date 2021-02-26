import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkrN1WN5aTwSbMTs38G3AWNRx7Y6VOjdY",
  authDomain: "slack-clone-yoog.firebaseapp.com",
  projectId: "slack-clone-yoog",
  storageBucket: "slack-clone-yoog.appspot.com",
  messagingSenderId: "675672896287",
  appId: "1:675672896287:web:500e2ce05ce3976baff62a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
