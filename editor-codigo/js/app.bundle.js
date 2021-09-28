"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var update = function update() {
  _newArrowCheck(this, _this);

  var text = document.querySelector("#text");
  var view = document.querySelector("#view");
  view.srcdoc = text.value;
}.bind(void 0);