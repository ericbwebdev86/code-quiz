//initial timer/score 75
//declare variables
let header = document.querySelector("header");
let introContainer = document.getElementById("introContainer");
let quizContainer = document.getElementById("quizContainer");
let endContainer = document.getElementById("endContainer");
let startQuizBtn = document.getElementById("startQuizBtn");
let question = document.getElementById("qTitle");
let resultDiv = document.getElementById("resultDiv");
let resultP = document.getElementById("resultP");
let btnAnswer1 = document.getElementById("answer1");
let btnAnswer2 = document.getElementById("answer2");
let btnAnswer3 = document.getElementById("answer3");
let btnAnswer4 = document.getElementById("answer4");
let finalScore = document.getElementById("fScore");
let score = 0;
let time = document.getElementById("time");
let initialsBtn = document.getElementById("initialsBtn");
let countDown = 75;
let answer = document.querySelectorAll(".answer-btn");
let answerValue = answer.value;
let clear = document.querySelector("#clear");
let highScores = document.getElementById("highScores");
let endScore = 0;


// questions array
let quizQuestions = [
    {
        q: 'placeholder',
        answer1: 'placeholder',
        answer2: 'placeholder',
        answer3: 'placeholder',
        answer4: 'placeholder',
        cAnswer: 'placeholder'
    },
    {
        q: 'Commonly used data types do NOT include:',
        answer1: '1. strings',
        answer2: '2. booleans',
        answer3: '3. numbers',
        answer4: '4. alerts',
        cAnswer: 'answer4'
    },
    {
        q: 'The condition in an if / else statement is enclosed with ____.',
        answer1: '1. quotes',
        answer2: '2. curly brackets',
        answer3: '3. square brackets',
        answer4: '4. parenthesis',
        cAnswer: 'answer4'
    },
    {
        q: 'Arrays in JavaScript can be used to store ____.',
        answer1: '1. numbers and strings',
        answer2: '2. other arrays',
        answer3: '3. booleans',
        answer4: '4. all of the above',
        cAnswer: 'answer4'
    },
    {
        q: 'String values must be enclosed within ____ when being assigned to variables.',
        answer1: '1. commas',
        answer2: '2. curly brackets',
        answer3: '3. parenthesis',
        answer4: '4. quotes',
        cAnswer: 'answer4',
    },
    {
        q: 'A very useful tool used during develpment and debugging for printing content to the debugger',
        answer1: '1. JavaScript',
        answer2: '2. terminal/bash',
        answer3: '3. for loops',
        answer4: '4. console.log',
        cAnswer: 'answer4'
    }
];

let qIndex = 0;

//display just the intro

introContainer.style.display = 'block';
quizContainer.style.display = 'none';
endContainer.style.display = 'none';
resultDiv.style.display = 'none';



startQuizBtn.addEventListener("click", function () {

    quizInterval = setInterval(function () {
        countDown--;
        time.textContent = "Time: " + countDown;
        if (countDown <= 0 || qIndex === undefined) {
            clearInterval(quizInterval);
            endQuiz();
        }
    }, 1000);
    showQuestion();
});

// questions
function quizEnd() {
    if (quizQuestions.length === undefined) {
        endQuiz();
    }
}

function showQuestion() {
    if (quizQuestions.length > 1) {
        quizQuestions.shift();
    } else {
        console.log("test");
        endQuiz();
        return;
    }

    introContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    endContainer.style.display = 'none';

    if (quizQuestions !== []) {
        question.textContent = quizQuestions[qIndex].q;
        btnAnswer1.textContent = quizQuestions[qIndex].answer1;
        btnAnswer2.textContent = quizQuestions[qIndex].answer2;
        btnAnswer3.textContent = quizQuestions[qIndex].answer3;
        btnAnswer4.textContent = quizQuestions[qIndex].answer4;
    } else {
        endQuiz();
    }

};

btnAnswer1.addEventListener("click", function () {

    if (answer.value == quizQuestions[qIndex].cAnswer) {
        resultDiv.style.display = 'block';
        resultP.textContent = "Correct";
    } else {
        resultDiv.style.display = 'block';
        resultP.textContent = "Wrong";
        countDown -= 10;

    }
    showQuestion();
});
btnAnswer2.addEventListener("click", function () {
    if (answerValue === quizQuestions[qIndex].cAnswer) {
        resultDiv.style.display = 'block';
        resultP.textContent = "Correct";
        // quizQuestions.shift();
        // qIndex++;
    } else {
        resultDiv.style.display = 'block';
        resultP.textContent = "Wrong";
        countDown -= 10;
        // quizQuestions.shift();
        // qIndex++
    }
    showQuestion();
});
btnAnswer3.addEventListener("click", function () {
    if (answerValue === quizQuestions[qIndex].cAnswer) {
        resultDiv.style.display = 'block';
        resultP.textContent = "Correct";
        // quizQuestions.shift();
        // qIndex++;
    } else {
        resultDiv.style.display = 'block';
        resultP.textContent = "Wrong";
        countDown -= 10;
        // quizQuestions.shift();
        // qIndex++
    }
    showQuestion();
});
btnAnswer4.addEventListener("click", function () {
    if (answerValue !== quizQuestions[qIndex].cAnswer) {
        resultDiv.style.display = 'block';
        resultP.textContent = "Correct";

    } else {
        resultDiv.style.display = 'block';
        resultP.textContent = "Wrong";
        countDown -= 10;
    }
    showQuestion();
});

//answer validation


//end of quiz scoring
function endQuiz() {
    clearInterval(quizInterval);
    introContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
    resultDiv.style.display = 'none';
    finalScore.textContent = countDown;
    endScore = countDown;

};

let localS = window.localStorage;
let scoreInitials = document.getElementById("scoreInitials");

//initials and score storage
initialsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let initials = scoreInitials.value.trim();
    let highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];
    let playerScore = {
        initials: initials,
        score: endScore
    };
    highScore.push(playerScore);
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
    location.replace("high-scores.html")
});