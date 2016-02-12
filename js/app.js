$(document).ready(function () {

    var secretNumber = secretNum(1, 100);
    console.log("Secret Number: " + secretNumber);

    var oldGuess = 0;
    var counter = 25;
    $('#count').text(counter);




    function secretNum(min, max) {
        var secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return secretNumber;
    }

    function validation(guessedNumber) {
        console.log('Guessed Number: ' + guessedNumber);
        if (isNaN(guessedNumber)) {
            alert('You must enter a number!');
            $('#userGuess').val('');
            return false;
        } else if (guessedNumber < 1 || guessedNumber > 100) {
            alert('You must enter a number between 1 and 100!');
            $('userGuess').val('');
            return false;
        } else {
            guessFeedback(secretNumber, guessedNumber);
            counter--;
            guessHistory();
            guessCounter(counter);
            $('#userGuess').val('');

            if (counter <= 0) {
                $('#feedback').text('Game Over!');
                document.getElementById("userGuess").disabled = true;
                document.getElementById("guessButton").disabled = true;
                alert('The Secret number was ' + secretNumber + ' ! Better luck next time !!');
            }
        }
    }

    function guessFeedback(secretNumber, guessedNumber) {
        var difference = Math.abs(secretNumber - guessedNumber);
        if (difference >= 50) {
            $('#feedback').text('Ice COLD!');
            $('#userGuess').val('');
        } else if ((difference >= 30) && (difference <= 49)) {
            $('#feedback').text('Cold');
            $('#userGuess').val('');
        } else if ((difference >= 20) && (difference <= 29)) {
            $('#feedback').text('Warm');
            $('#userGuess').val('');
        } else if ((difference >= 10) && (difference <= 19)) {
            $('#feedback').text('Hot');
            $('#userGuess').val('');
        } else if ((difference >= 1) && (difference <= 9)) {
            $('#feedback').text('Very HOT!');
            $('#userGuess').val('');
        } else {
            $('#feedback').text("You WON!");
        }
    }
    $('#guessButton').on('click', function () {
        var guessedNumber = $('#userGuess').val();
        var newGuess = guessedNumber;
        validation(guessedNumber);
        if (oldGuess !== 0 && guessedNumber >= 1 && guessedNumber <= 100) {
            //relativeFeedback(secretNumber, oldGuess, newGuess);
        }
        oldGuess = newGuess;
    });

    $('#userGuess').on('keypress', function (e) {
        if (e.which === 13) {
            var guessedNumber = $('#userGuess').val();
            var newGuess = guessedNumber;
            validation(guessedNumber);
            if (oldGuess !== 0 && guessedNumber >= 1 && guessedNumber <= 100) {
                relativeFeedback(secretNumber, oldGuess, newGuess);
            }
            oldGuess = newGuess;
        }
    });

    function guessCounter(counter) {
        $('#count').text(counter);
    }

    function guessHistory() {
        $('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
    }
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });



});
