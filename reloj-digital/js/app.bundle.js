"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var reloj = document.querySelector(".reloj");

var gethora = function gethora() {
  _newArrowCheck(this, _this);

  var fecha = new Date();
  var tiempo = {
    hora: fecha.getHours(),
    minuto: fecha.getMinutes(),
    segundos: fecha.getSeconds()
  };
  reloj.innerHTML = "".concat(tiempo.hora, " : ").concat(tiempo.minuto, " : ").concat(tiempo.segundos);
}.bind(void 0);

setInterval(gethora, 1000);