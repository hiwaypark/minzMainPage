"use strict"

// firebase
const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { initializeApp }  = require("firebase/app");

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// firebase

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },

    main: (req, res) => {
        res.render("home/main");
    },
}

const process = {
    login: (req, res, next) => {
        const userID = req.body.userID;
        const userPassword = req.body.userPasssword;
        
        signInWithEmailAndPassword(auth, userID, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user");
        })
        .catch((error) => {
            const errorCode = error.errorCode;
            const errorMessage = error.errorMessage;
            console.log("errorMessage");
        });
    },
};

module.exports = {
    output,
    process,
};