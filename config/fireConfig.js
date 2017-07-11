import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC1lpBAYSVOQJalTMjDb9lPRdq2sJX82eg",
  authDomain: "randompairs-b2705.firebaseapp.com",
  databaseURL: "https://randompairs-b2705.firebaseio.com",
  projectId: "randompairs-b2705",
  storageBucket: "randompairs-b2705.appspot.com",
  messagingSenderId: "998678564552"
};
const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export const storageKey = 'brew-login-randomlypaired';
