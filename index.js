'use strict'

console.log('Here\'s a hidden message');

// This is a single-line comment.

/* Here's a
multi-line
comment. */

// console.log('This code is no longer active')

// <!-- This is an HTML comment. -->

/* CSS comments are just like multi-line JavaScript ones.*/

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = "Today's date: "+formatDate;

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
 // var y = document.getElementById("menuIcon");
  if (x.className === "w3-bar w3-black w3-card w3-top topnav") {
    x.className += " responsive";
    x.style = "position:fixed;top:0;"
    // y.style.transform = "translateY(-12px) rotate(-135deg);"
  } else {
    x.className = "w3-bar w3-black w3-card w3-top topnav";
    x.style = "position:fixed;top:0; display:flex; align-items:center; overflow:hidden;"
    // y.style.transform = "translateY(-12px) rotate(-135deg);"
  }
  // const menuBtn = document.querySelector('.nav-icon');
  // let menuOpen = false;
  // menuBtn.addEventListener('click', () => {
  //   if(!menuOpen) {
  //     menuBtn.classList.add('open');
  //     menuOpen = true;
  //   } else {
  //     menuBtn.classList.remove('open');
  //     menuOpen = false;
  //   }
  // });
  function toggleMenu() {
    y = document.querySelector(".header__hamburger");
    y.classList.toggle("click");
  }
}
// var $elem = $('.signature');
// // var element = document.getElementById('signature');
// var in_view = new Waypoint.Inview({
//     element: $elem[0],
//     enter: function() {
//         $elem.addClass('start');
//     },
//     exit: function() {  // optionally
//         $elem.removeClass('start');
//     }
// });