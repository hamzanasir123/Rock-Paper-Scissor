var userScore = document.querySelector("#User-Score");
var compScore = document.querySelector("#Comp-score");
var choices = document.querySelectorAll(".choice");
var msg = document.querySelector(".msg");
var showMsg = document.querySelector(".show-msg");
var showWinner = function (userWin) {
    if (userWin) {
        msg.innerHTML = "You Win!";
        userScore.innerHTML++;
    }
    else {
        msg.innerHTML = "You Lose!";
        compScore.innerHTML++;
    }
};
var drawGame = function () {
    msg.innerHTML = "Game Draw";
};
var play = function (userChoice) {
    console.log("User Choice =", userChoice);
    var comChoice = genCompChoice();
    console.log("Comp Choice =", comChoice);
    if (userChoice === comChoice) {
        drawGame();
    }
    else {
        var userWin = true;
        if (userChoice === "Rock") {
            userWin = comChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = comChoice === "Scissors" ? false : true;
        }
        else if (userChoice === "Scissors") {
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
};
var genCompChoice = function () {
    var options = ["Rock", "Paper", "Scissors"];
    var randomnum = Math.floor(Math.random() * 3);
    if (options[randomnum] === "Rock") {
        showMsg.innerHTML = "Computer Chose Rock";
    }
    else if (options[randomnum] === "Paper") {
        showMsg.innerHTML = "Computer Chose Paper";
    }
    else if (options[randomnum] === "Scissors") {
        showMsg.innerHTML = "Computer Chose Scissor";
    }
    else {
        showMsg.innerHTML = "Hello Gamers";
    }
    return options[randomnum];
};
choices.forEach(function (ch) {
    ch.addEventListener("click", function () {
        var choiceId = ch.getAttribute("id");
        // console.log("User Click =", choiceId);
        play(choiceId);
    });
});
