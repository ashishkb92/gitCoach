import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAMQIUQfjB6J58EylSnt6C3hqGv8F47lWE",
    authDomain: "goalcoach-8137f.firebaseapp.com",
    databaseURL: "https://goalcoach-8137f.firebaseio.com",
    projectId: "goalcoach-8137f",
    storageBucket: "goalcoach-8137f.appspot.com",
    messagingSenderId: "589108494465"
  };

export const firebaseApp = firebase.initializeApp(config);
