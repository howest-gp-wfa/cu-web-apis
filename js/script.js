"use strict";

window.addEventListener("load", initialize);

function initialize() {

    addGoogleEvent();
    addThemeEvent();

    if (localStorage.getItem("theme-color") !== null) {
        const body = window.document.body;
        const savedTheme = JSON.parse(localStorage.getItem("theme-color"));
        body.setAttribute("style", `background-color: ${savedTheme.background}; color: ${savedTheme.foreground};`);
    }

}

//Location API
function addGoogleEvent() {
        const btnGoToGoogle = document.getElementById("google");
        btnGoToGoogle.addEventListener("click", function() {            
            location.assign("https://www.google.com");
        });
}

function addThemeEvent() {
    const btnTheme = document.getElementById("set-theme");
    btnTheme.addEventListener("click", setTheme);
}

//Storage API - localStorage
function setTheme() {

    const defaultTheme = {
        background: "darkgray",
        foreground: "white"
    };
    
    localStorage.setItem("theme-color", JSON.stringify(defaultTheme));

}