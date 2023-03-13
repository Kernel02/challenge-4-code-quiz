var startButton = document.getElementById("startbutton");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var buttonA = document.getElementById("answerA");
var buttonB = document.getElementById("answerB");
var buttonC = document.getElementById("answerC");
var buttonD = document.getElementById("answerD");
var timeLeft = 60;
var questionOn = 0;
var quiz = {
  questions: [
    "Which is a Boolean value?",
    "Which symbol is used to compare strict equality?", "Which value is not considered falsy?",
  ],
  answersA: ["1,250", "!=", "1",],
  answersB: ["True", "==", "false",],
  answersC: ["Apple", "=", "0",],
  answersD: ["NaN", "===", "undefined",],
};

function timerGo() {
  timer.textContent = timeLeft;
  var timerRun = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerRun);
      timer.setAttribute("style", "display: none;");
    }
  }, 1000);
}

function nextQuestion(questionNum) {
  questionOn++;
  question.textContent = quiz.questions[questionNum];
  answers.children[0].textContent = quiz.answersA[questionNum];
  answers.children[1].textContent = quiz.answersB[questionNum];
  answers.children[2].textContent = quiz.answersC[questionNum];
  answers.children[3].textContent = quiz.answersD[questionNum];
};

startButton.addEventListener("click", function () {
  startButton.setAttribute("style", "display: none;");
  timerGo();
  answers.setAttribute("style", "display: block;");
  nextQuestion(questionOn);
});

buttonA.addEventListener("click", function() {
    nextQuestion(questionOn);
});
buttonB.addEventListener("click", function() {
    nextQuestion(questionOn);
});
buttonC.addEventListener("click", function() {
    nextQuestion(questionOn);
});
buttonD.addEventListener("click", function() {
    nextQuestion(questionOn);
});
