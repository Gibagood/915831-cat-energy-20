"use strict";

var range = document.querySelector(".example__scale-input");
var before = document.querySelector(".example__image--before");
var after = document.querySelector(".example__image--after");

function setValue(value) {
  before.style.width = value + "%";
  after.style.width = 102.5 - value + "%";
}

range.addEventListener("input", function (event) {
  setValue(event.target.value);
});
setValue(range.value);