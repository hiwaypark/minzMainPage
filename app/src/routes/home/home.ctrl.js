"use strict"

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
        firebaseApp.auth().signInWithEmailAndPassword(req.body.userID, req.body.userPassword)
        .then(function(firebaseUser){
            res.redirect("main");
        });
    },
};

module.exports = {
    output,
    process,
};