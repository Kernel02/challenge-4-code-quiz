var startButton = document.getElementById("startbutton");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");

startButton.addEventListener("click", function() {
    startButton.setAttribute("style", "display: none;");
    timer.textContent="TIME LEFT";
    }
);
