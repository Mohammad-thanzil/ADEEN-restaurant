
var modal = document.getElementById("myModal");
var reservationButton = document.getElementById("reservationButton");

var Body = document.querySelector("body")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
reservationButton.onclick = function() {
  modal.style.display = "block";
// Body.style.overflowY = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  Body.style.overflowY = "scroll";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
