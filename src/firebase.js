import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAUZo6nkovH49i-JpqgsBkMo9Oy3Vc30WQ",
  authDomain: "app-wp-ffefb.firebaseapp.com",
  databaseURL: "https://app-wp-ffefb.firebaseio.com",
  projectId: "app-wp-ffefb",
  storageBucket: "app-wp-ffefb.appspot.com",
  messagingSenderId: "290039335467",
  appId: "1:290039335467:web:8cdafa20152e875ee5786e"
};
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();