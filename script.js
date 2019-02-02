


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


// scoreboard selectors
var xWon = document.querySelector("#x-score");
var ties = document.querySelector("#ties");
var oWon = document.querySelector("#o-score");

// scoreboard counters
var xCount = 0;
var tiesCount = 0;
var oCount = 0;

// ties true or false for function ties() 
var tieTrueOrFalse = false;


// button selectors
// Reset button selector
var resetButton = document.querySelector("#reset");
// newgame button selectors
var newButton = document.querySelector("#new");


// Button functionality
// reset button functionality
resetButton.addEventListener("click", function() {
	location.reload();
});
// newgame button functionality
newButton.addEventListener("click", function() {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = "";
		tieTrueOrFalse = false;
	}
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

			// function checking for ties

			// !!!
			// UNCOMMENT THIS FOR TIES TESTING
			// !!!
			
			// function ties() {
			// 	for (var i = 0; i < boxes.length; i++) {
			// 		if (boxes[i].textContent === "x" || boxes[i].textContent === "o" && boxes[i].textContent != "") {
			// 			console.log("ties is true");
			// 			tieTrueOrFalse = true;
			// 			tiesCount++;
			// 			ties.innerHTML = tiesCount;
			// 		} else {
			// 			console.log("ties is not true");
			// 		}
			// 	}
			// };


			// if box has been clicked already
			if (boxes[index].innerHTML === "x" || boxes[index].innerHTML === "o") {
				alert("box has already been clicked");
				return;
			}
			// add one to counter for checking who's turn it is
			counter++;

			// if counter is even, first player's move
			if (counter % 2 === 0) {
				boxes[index].innerHTML = "o";
			} else { // if counter is odd, second player's move
				boxes[index].innerHTML = "x";
			}




			// winning the game
			// Code for X winning the game
			if (boxes[0].innerHTML === "x" && boxes[1].innerHTML === "x" && boxes[2].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
			alert("x is the winner!");
			} else if (boxes[3].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[5].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[6].innerHTML === "x" && boxes[7].innerHTML === "x" && boxes[8].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[0].innerHTML === "x" && boxes[3].innerHTML === "x" && boxes[6].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[1].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[7].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[2].innerHTML === "x" && boxes[5].innerHTML === "x" && boxes[8].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[0].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[8].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			} else if (boxes[2].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[6].innerHTML === "x") {
				xCount++;
				xWon.innerHTML = xCount;
				alert("x is the winner!");
			};	

			// code for O winning the game
			if (boxes[0].innerHTML === "o" && boxes[1].innerHTML === "o" && boxes[2].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
			alert("O is the winner!");
			} else if (boxes[3].innerHTML === "o" && boxes[4].innerHTML === "o" && boxes[5].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[6].innerHTML === "o" && boxes[7].innerHTML === "o" && boxes[8].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[0].innerHTML === "o" && boxes[3].innerHTML === "o" && boxes[6].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[1].innerHTML === "o" && boxes[4].innerHTML === "o" && boxes[7].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[2].innerHTML === "o" && boxes[5].innerHTML === "o" && boxes[8].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[0].innerHTML === "o" && boxes[4].innerHTML === "o" && boxes[8].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			} else if (boxes[2].innerHTML === "o" && boxes[4].innerHTML === "o" && boxes[6].innerHTML === "o") {
				oCount++;
				oWon.innerHTML = oCount;
				alert("O is the winner!");
			};
			// End winning the game code


			// UNCOMMENT THIS FOR TIES TESTING
			// ties();
		});
	})(i)};




