
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal.style.display = "none";
  }
}

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span = document.getElementsByClassName("close4")[0];
btn4.onclick = function() {
  modal4.style.display = "block";
}
span.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal.style.display = "none";
  }
}

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span = document.getElementsByClassName("close5")[0];
btn5.onclick = function() {
  modal5.style.display = "block";
}
span.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal.style.display = "none";
  }
}

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span = document.getElementsByClassName("close6")[0];
btn6.onclick = function() {
  modal6.style.display = "block";
}
span.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal.style.display = "none";
  }
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

