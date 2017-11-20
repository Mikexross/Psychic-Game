    // array of alphabet for computer to choose fomr
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // make all variables start at correct values to start
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var letters = [];

    // create event when player presses a key
    document.onkeyup = function(event) {
        // inputs user guess as letter from ascii value
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // send user key values to already guessed.
        letters.push(userGuess);
        console.log(letters);
        // choose value from computerChoice array at random
        var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        // need to clear out guessed letters and remaining guess
        var reset = function() {
            guesses = 9;
            letters = [];
        }


        // what happens when user guesses correct?
        if (userGuess === computerGuess) {
            // add +1 to existing wins value, alert a win box and resets guesses/letters
            wins++;
            guesses = 9;
            alert("You have read my magnetic mind! Have your win! can you do it again?");


        }

        // if a user guesses incorrect?
        else {
            guesses--; // guesses left decreases, user pick is sent to 

        }
        if (guesses === 0) {
            losses++;
            guesses = 9;
            reset();
        }
        // New variables to create html. Will update and display wins, losses, guesses left, and key chosen.
        var html = " <h1> The Psychic Game </h1>" + " <p>Guess what letter I'm thinking of. Press any letter to begin.</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses remaining: " + guesses + "</p>" +
            "<p>Letters you Guessed: " + letters + "</p>";

        // invoke function to update dom and html with displays for values.
        document.getElementById("game").innerHTML = html;
    }