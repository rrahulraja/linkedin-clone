import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDM9mZPxZ4SuJ5BCVUZhXgIeQUoR58dDoc",
  authDomain: "linkedin-clone-7d80c.firebaseapp.com",
  projectId: "linkedin-clone-7d80c",
  storageBucket: "linkedin-clone-7d80c.appspot.com",
  messagingSenderId: "969267043869",
  appId: "1:969267043869:web:d79638141e87f2080930f4",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
