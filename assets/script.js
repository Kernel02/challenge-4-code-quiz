var header = document.getElementById("header");
var startButton = document.getElementById("startbutton");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var response = document.getElementById("response");
var initials = document.getElementById("initials");
var timeLeft = 60;
var questionOn = 0;
var answerChosen = "";
var score;
var highscores = {
  userInitials: [],
  userScore: [],
};
var quiz = {
  questions: [
    "Which is a Boolean value?",
    "Which symbol is used to compare strict equality?",
    "Which value is not considered falsy?",
    "Which shortcut is used to add one to a number type variable?",
    "Which is the only value that is not equal to itself?",
    "A function held within an object is known as a what?",
    "Select the data type that is not considered to be primitive.",
    "The first item in an array would have an index of what?",
    "What is refered to as the order in which a computer executes code?",
    "How would you start a single line comment in JavaScript?",
  ],
  answersA: [
    "1,250",
    "!=",
    "1",
    "+",
    "undefined",
    "method",
    "number",
    "1",
    "code order",
    "//",
  ],
  answersB: [
    "True",
    "==",
    "false",
    "+=",
    "null",
    "handler",
    "string",
    "0",
    "execute order",
    "/*",
  ],
  answersC: [
    "Apple",
    "=",
    "0",
    "++",
    "NaN",
    "object function",
    "boolean",
    "first",
    "code flow",
    "/",
  ],
  answersD: [
    "NaN",
    "===",
    "undefined",
    "-",
    "-0",
    "array",
    "object",
    "-1",
    "control flow",
    "*/",
  ],
  answerKey: ["", "B", "D", "A", "C", "C", "A", "D", "B", "D", "A"],
};

function timerGo() {
  timer.textContent = timeLeft;
  var timerRun = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0 || timeLeft < 0) {
      clearInterval(timerRun);
    } else if (score > timeLeft) {
      clearInterval(timerRun);
    }
  }, 1000);
}

function waitDisappear() {
  var waitTime = 1;
  var wait = setInterval(function () {
    waitTime--;
    if (waitTime === 0) {
      clearInterval(wait);
      response.textContent = "";
    }
  }, 1000);
}

function stopQuiz() {
  answers.setAttribute("style", "display: none;");
  question.setAttribute("style", "display: none;");
  timer.setAttribute("style", "display: none;");
  if (timeLeft < 0) {
    timeLeft = 0;
  }
  score = timeLeft;
  header.children[0].textContent = "Score: " + score;
  initials.setAttribute("style", "display: block;");
}

function nextQuestion(questionNum) {
  if (questionOn === 10) {
    stopQuiz();
    return;
  }
  questionOn++;
  if (answerChosen === quiz.answerKey[questionNum]) {
    response.textContent = "Correct!";
    waitDisappear();
  } else {
    timeLeft = timeLeft - 5;
    timer.textContent = timeLeft;
    if (timeLeft < 0) {
      stopQuiz();
      return;
    }
    response.textContent = "Wrong!";
    waitDisappear();
  }
  question.textContent = quiz.questions[questionNum];
  A.textContent = quiz.answersA[questionNum];
  B.textContent = quiz.answersB[questionNum];
  C.textContent = quiz.answersC[questionNum];
  D.textContent = quiz.answersD[questionNum];
}

startButton.addEventListener("click", function () {
  startButton.setAttribute("style", "display: none;");
  timerGo();
  answers.setAttribute("style", "display: block;");
  nextQuestion(questionOn);
  response.textContent = "";
});

answers.addEventListener("click", function (event) {
  answerChosen = event.target.id;
  nextQuestion(questionOn);
});

initials.children[2].addEventListener("click", function (event) {
  event.preventDefault();
  highscores.userInitials = highscores.userInitials.push(initials.children[1].value);
  highscores.userScore = highscores.userScore.push(score);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  initials.setAttribute("style", "display: none;");
});
