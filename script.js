


// boxes selectors
var topLeft = document.getElementById("top-left");
var topMiddle = document.getElementById("top-middle");
var topRight = document.getElementById("top-right");
var middleLeft = document.getElementById("middle-left");
var middleMiddle = document.getElementById("middle-middle");
var middleRight = document.getElementById("middle-right");
var bottomLeft = document.getElementById("bottom-left");
var bottomMiddle = document.getElementById("bottom-middle");
var bottomRight = document.getElementById("bottom-right");

// Reset button selector
var resetButton = document.querySelector("#reset");

// reset button functionality
resetButton.addEventListener("click", function() {
	location.reload();
});


// on load, alert user of the rules of game
$(document).ready(function() {
	alert("A simple game of tic-tac-toe. When a player wins, if you want to play again, hit the reset button at the top right of the page.");
	});


// array of boxes
var boxes = [topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight];
for (var i = 0; i < boxes.length; i++) {
	boxes[i].innerHTML = "";
}

// counter for x or o
var counter = 0;

// adding event listener to all boxes in array
for (var i = 0; i < boxes.length; i++) {
	(function(index) {
		boxes[i].addEventListener("click", function() {

			// if box has been clicked already
			if (boxes[index].innerHTML === "x" || boxes[index].innerHTML === "o") {
				alert("box has already been clicked");
				return;
			}
			// add one to counter
			counter++;

			// if counter is even, first player's move
			if (counter % 2 === 0) {
				boxes[index].innerHTML = "x";
			} else { // if counter is odd, second player's move
				boxes[index].innerHTML = "o";
			}




			// winning the game


			// Code for X winning the game
			if (boxes[0].innerHTML === "x" && boxes[1].innerHTML === "x" && boxes[2].innerHTML === "x") {
			alert("x is the winner!");
			} else if (boxes[3].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[5].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[6].innerHTML === "x" && boxes[7].innerHTML === "x" && boxes[8].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[0].innerHTML === "x" && boxes[3].innerHTML === "x" && boxes[6].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[1].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[7].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[2].innerHTML === "x" && boxes[5].innerHTML === "x" && boxes[8].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[0].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[8].innerHTML === "x") {
				alert("x is the winner!");
			} else if (boxes[2].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[6].innerHTML === "x") {
				alert("x is the winner!");
			};	
		});
	})(i)};




