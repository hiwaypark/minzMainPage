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
    login: (req, res) => {
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};