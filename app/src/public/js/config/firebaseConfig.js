"use strict"

const { getApp } = require("firebase/app");
const firebase = require("firebase/app");

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

// Initialize Firebase
firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const minzDB = getApp(firebase);
