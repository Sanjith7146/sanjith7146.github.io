"use strict";

$("main").fitVids();

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = "Today's date: " + formatDate;

function myOtherFunction() {
  var x = document.getElementById("Yes");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
function myFunction(x) {
  x.classList.toggle("change");
  theFunction();
}

function theFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "w3-bar w3-black w3-card w3-top topnav") {
    x.className += " responsive";
    x.style = "position:fixed;top:0;";

  } else {
    x.className = "w3-bar w3-black w3-card w3-top topnav";
    x.style =
      "position:fixed;top:0; display:flex; align-items:center; overflow:hidden;";

  }
  
  function toggleMenu() {
    y = document.querySelector(".header__hamburger");
    y.classList.toggle("click");
  }
}