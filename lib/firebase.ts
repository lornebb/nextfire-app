import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA9muxJqfl4xlRSrN81-EVsTAeRYEI-Hzk",
  authDomain: "nextfire-app-1d1bb.firebaseapp.com",
  projectId: "nextfire-app-1d1bb",
  storageBucket: "nextfire-app-1d1bb.appspot.com",
  messagingSenderId: "330542459463",
  appId: "1:330542459463:web:202bd5bb96a243091c9f62",
  measurementId: "G-QNKK7J1YQG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
