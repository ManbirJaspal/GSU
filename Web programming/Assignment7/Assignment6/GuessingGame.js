GuessOutcomes = {
    HIGHER: 1,
    LOWER: -1,
    CORRECT: 0,
    NEWGAME: 2,
    ERROR: 500
}

function GuessingGame(max) {
    this.Maximum = max>1000?1000:(max<2?2:max);
    this.Minimum = 1;
    this.GuessAttempts = [];
    this.State = GuessOutcomes.NEWGAME;
    this.Value = this.generateAnswer();
}
GuessingGame.prototype.generateAnswer = function() {
    var d = new Date(Date.now());
    return 1 + (d.getMilliseconds() % (this.Maximum-1));
}

GuessingGame.prototype.guess = function(num) {
    try {
        num = parseInt(num);
    }
    catch(ex) { return GuessOutcomes.ERROR; }
    if (num==this.Value) {
        this.GuessAttempts.push(num);
        return GuessOutcomes.CORRECT;
    } else if(num<this.Value) {
        this.GuessAttempts.push(num);
        return GuessOutcomes.LOWER;
    } else if(num>this.Value) {
        this.GuessAttempts.push(num);
        return GuessOutcomes.HIGHER;
    } else {
        return GuessOutcomes.ERROR;
    }
}

var game = new GuessingGame(100);
window.addEventListener('load', function() {
    var tboxGuess = document.getElementById('tboxGuess');
    var playerMessage = document.getElementById('playerMessage');
    var btnChangeMaxValue = document.getElementById('btnChangeMaxValue');
    var btnGuess = document.getElementById('btnGuess');
	var btnCheat = document.getElementById('btnCheat');
    btnGuess.addEventListener('click', function() {
        var outcome = game.guess(tboxGuess.value);
        if (outcome==GuessOutcomes.CORRECT) {
            var guessOrder = [];
            while(game.GuessAttempts.length>0) {
                guessOrder.push(game.GuessAttempts.pop());
            }
            guessOrder.reverse();
            playerMessage.innerHTML = "You Got It! Your guesses were: " + guessOrder.join(", ") + "<br>A new game has been started. Start Guessing!";
            game = new GuessingGame(game.Maximum);
            btnCheat.style.display = 'none';
        } else if (outcome==GuessOutcomes.ERROR) {
            playerMessage.innerHTML = "Something didn't work, you're input was not evaluated. Try Another Guess.";
        } else {
            if(game.GuessAttempts.length>2) {
                btnCheat.style.display = 'inline-block';
            }
            if(outcome==GuessOutcomes.HIGHER) {
                playerMessage.innerHTML = "You guessed too high. Try a smaller number.";
            } else if(outcome==GuessOutcomes.LOWER) {
                playerMessage.innerHTML = "You guessed too low. Try a larger number.";
            }
        }
    });
    btnChangeMaxValue.addEventListener('click', function() {
        var max = window.prompt('What maximum value would you like to use?\n(Only 2-1000 are valid).', game.Maximum);
        if (max != undefined && max != '') {
            try{
                max = parseInt(max);
            } catch(ex) {

            } finally {
                game = new GuessingGame(max);         
                btnCheat.style.display = 'none';
                playerMessage.innerHTML = 'New Game. Pick A Number between 1 and ' + game.Maximum;
            }
        }
    });
    btnCheat.addEventListener('click', function() {
        if(confirm("Do you want to cheat and disgrace your family")) {
            alert("The value is: " + game.Value);
        }
    });
});