var myTimer = document.querySelector("#timer");
var questionBox = document.querySelector("#questionBox");
var secondsLeft = 60;
var currentQuestion = 0;
var score = "";
var scoresArray = JSON.parse(localStorage.getItem("highscores")) || []


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        myTimer.textContent = "Time Remaining: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
}

var questionIndex = [
    {
        question: "What does a ! mean if it is placed before a vairable",
        answers: {
            optionA: "Skip this variable",
            optionB: "If the variable is true",
            optionC: "If the variable is false",
            optionD: "Repeat variable",
        },

        correctAnswer: "optionC"
    },

    {
        question: "What is the default unit of time used in Java script",
        answers: {
            optionA: "Milliseconds",
            optionB: "Seconds",
            optionC: "Minutes",
            optionD: "Hours",
        },

        correctAnswer: "optionA"
    },

    {
        question: "What syblols do you use to define an array?",
        answers: {
            optionA: "{  }",
            optionB: "(   )",
            optionC: "[   ]",
            optionD: "<  >",
        },

        correctAnswer: "optionC"
    },
    {
        question: "How do you link a java script page to an html file>",
        answers: {
            optionA: "scr= 'filename' ",
            optionB: "href= 'filename' ",
            optionC: "a= 'filename' ",
            optionD: "It is linked automatically",
        },

        correctAnswer: "optionA"
    },

];




function startQuiz() {
    // define html elements
    var questionBox = document.getElementById("questionBox");
    var startBox = document.getElementById("startpage");
    var questionText = document.getElementById("questionText");

    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    var optionC = document.getElementById("optionC");
    var optionD = document.getElementById("optionD");

    questionText.textContent = questionIndex[currentQuestion].question;
    optionA.textContent = questionIndex[currentQuestion].answers.optionA;
    optionB.textContent = questionIndex[currentQuestion].answers.optionB;
    optionC.textContent = questionIndex[currentQuestion].answers.optionC;
    optionD.textContent = questionIndex[currentQuestion].answers.optionD;

    // display/hide elements
    questionBox.style.display = "block";
    startBox.style.display = "none";
    setTime();
}

function nextQuestion() {
    // go to next question
    currentQuestion++;
    // var questionBox = document.getElementById("questionBox");
    // var startBox = document.getElementById("startpage");
    var questionText = document.getElementById("questionText");

    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    var optionC = document.getElementById("optionC");
    var optionD = document.getElementById("optionD");


    questionText.textContent = questionIndex[currentQuestion].question;

    optionA.textContent = questionIndex[currentQuestion].answers.optionA;
    optionB.textContent = questionIndex[currentQuestion].answers.optionB;
    optionC.textContent = questionIndex[currentQuestion].answers.optionC;
    optionD.textContent = questionIndex[currentQuestion].answers.optionD;


}


questionBox.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        var userAnswer = event.target.getAttribute("id")
        console.log(currentQuestion)
        if (userAnswer != questionIndex[currentQuestion - 1].correctAnswer) {
            secondsLeft -= 10
        }
        if (currentQuestion === questionIndex.length) {
            score = secondsLeft
            localStorage.setItem("highscores", JSON.stringify(score))
            location.href="highscores.html"
        }
    }
});


