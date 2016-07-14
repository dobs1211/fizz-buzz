$(document).ready(function () {

    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    validateInput(limit);
});

function validateInput(inputNumber) {

    var userInputCorrectFlag = true;

    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number. Set it again.");
        userInputCorrectFlag = false;
    }


    if (userInputCorrectFlag = true) {
        playFizzBuzz(inputNumber);
    }
}


function checkFizzAndBuzz(currentNumber) {

    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if ((currentNumber % 3 == 0) && (currentNumber % 5 == 0)) {
        msg = "<li>FizzBuzz</li>";
    }
    return msg;
}

function playFizzBuzz(limit) {

    for (var counter = 1; counter <= limit; counter++) {

        $('#showResults').append(checkFizzAndBuzz(counter));
    }
}
