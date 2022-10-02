"use strict"

const firebase = require("firebase/app");
const firebaseui = require("firebaseui")

const firebaseConfig = {
  apiKey: "AIzaSyDQCcjfc3hOhfps6fDrfZX1Rt_Prt_jFD0",
  authDomain: "minzselfcheck.firebaseapp.com",
  databaseURL: "https://minzselfcheck-default-rtdb.firebaseio.com",
  projectId: "minzselfcheck",
  storageBucket: "minzselfcheck.appspot.com",
  messagingSenderId: "414911030930",
  appId: "1:414911030930:web:145e1f6b58321d50e1e84b",
  measurementId: "G-HX20VVH7N5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth);

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});

module.exports = firebaseApp;