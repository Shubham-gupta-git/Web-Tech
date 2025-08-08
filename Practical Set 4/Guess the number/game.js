let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuesses = [];
let guessInput = document.getElementById('guessInput');
let submit=document.getElementById('submitGuess')
let hint = document.getElementById('hint');
let previousGuessesDisplay = document.getElementById('previousGuesses');

submit.onclick=function() {
	let userGuess = parseInt(guessInput.value);
	if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		hint.textContent = 'Read the instruction its between 1-100.';
		hint.style.color = 'yellow';
		return;
	}
	previousGuesses.push(userGuess);
	previousGuessesDisplay.textContent = 'Previous guesses: ' + previousGuesses.join(', ');
	
	if (userGuess === randomNumber) {
		hint.textContent = 'Congratulations! You guessed the correct number.';
		hint.style.color = 'green';
		endGame();
	} else if (userGuess < randomNumber) {
		hint.textContent = 'Too low!! Try something big.';
		hint.style.color = 'orange';
	} else {
		hint.textContent = 'Too big!! Try something small.';
		hint.style.color = 'orange';
	}
	
	guessInput.value = ' ';
	guessInput.focus();
}
document.getElementById('submitGuess').addEventListener('click', function() {

});

function endGame() {
    guessInput.disabled = true;
    document.getElementById('submitGuess').disabled = true;
}
