// selects buttons "Player One" and "Player Two"
var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
// Sets the initial score to 0
var p1Score = 0;
var p2Score = 0;
// Selects Sdisplayed numbers on the page
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
// Sets the initial value of winning score to 5
var winningScore = 5;
var gameOver = false;
// Selects reset button
var resetButton = document.getElementById('resetButton')
// Selects the input element 
var input = document.querySelector("input")
// Selects limit-number in paragraph
var limitNumber = document.querySelector("#number-limit")

// ===============================================================
// ADDING SCORES BY BUTTONS

// Add 1 point every time when button is clicked to player's one score
p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			// Changes number's color when won
			p1ScoreDisplay.classList.add("winner")
		}
		p1ScoreDisplay.textContent = p1Score;
	}
});

// Add 1 point every time when button is clicked to player's two score
p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			// Changes number's color when won
			p2ScoreDisplay.classList.add("winner")
		}
		p2ScoreDisplay.textContent = p2Score;
	}
});

// =============================================================
// RESET BUTTON

resetButton.addEventListener("click", function() {
	reset();
})

// ===============================================================
// CHANGING LIMIT IS WORKING (INPUT)

input.addEventListener("change", function() {
	limitNumber.textContent = input.value;
	winningScore = Number(input.value);
	// Resets the game when limit number is changed
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	p1ScoreDisplay.classList.remove("winner")
	p2ScoreDisplay.classList.remove("winner")
	gameOver = false;
}