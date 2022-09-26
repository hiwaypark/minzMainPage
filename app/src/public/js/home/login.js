"use strict"

const userID = document.querySelector("#userID");
const userPassword = document.querySelector("#userPassword");
const loginBtn = document.querySelector("button"); 

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        userID: userID.value,
        userPassword: userPassword.value
    };  

    console.log(req);
}