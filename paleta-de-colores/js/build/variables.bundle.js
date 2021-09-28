"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida");
var lista = document.querySelector("#list");
var number = document.querySelector("#colors");
var storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";
var colorList = JSON.parse(localStorage.getItem("colorList")) || [];