"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var saveColor = function saveColor(value) {
  _newArrowCheck(this, _this);

  colorList.push(value);
  localStorage.setItem("colorValue", JSON.stringify(value));
  localStorage.setItem("colorList", JSON.stringify(colorList));
  getColors();
}.bind(void 0);