"use strict"

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

const main = (req, res) => {
    res.render("home/main");
};

module.exports = {
    home,
    login,
    main
};