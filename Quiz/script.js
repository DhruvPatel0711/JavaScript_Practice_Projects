// script.js

let questions = [
    {
        prompt: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>",
    },
    {
        prompt: "How do you call a function named myFunction?",
        options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction"],
        answer: "myFunction()",
    },
    {
        prompt: "How does a for loop start?",
        options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", " for (i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)",
    },
    {
        prompt: "In JavaScript, which of the following is a logical operator?",
        options: ["|", "&&", "%", "/"],
        answer: "&&",
    },
    {
        prompt: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
        options: ["method", "assignment operator", "letiable", "string"],
        answer: "letiable",
    },
];


// Get Dom Elements
//mine
let start = document.querySelector(".starting");
let startBtn = document.querySelector(".start");
let divQ = document.querySelector(".questions");
let Q = document.querySelector(".questionWords");
let fourOptions = document.querySelector(".options");
let options = document.querySelectorAll(".option");
let end = document.querySelector(".end");
let submitbtn = document.querySelector("submit-score");
let name = document.getElementById("name");
let finalScore = document.querySelector(".finalScore");
let time = document.getElementById("timeScore");
let marks = document.querySelector(".Score");

let Score = questions.length * 15;
let mark = 0;
time.textContent = `Time: ${Score}`;

startBtn.addEventListener("click", () => {
    start.style.display = "none";
    divQ.style.display = "block";
    let currentQuestion = 0;

    const intervalId = setInterval(() => {
        if (Score > 0) {
            Score--;
            time.textContent = `Time: ${Score}`;
        } else {
            clearInterval(intervalId);
            console.log("Time's up!");
            divQ.style.display = "none";
            end.style.display = "block";
            finalScore.textContent = 0;
            marks.textContent = mark;
        }
    }, 1000);

    // Display the first question and options
    Q.textContent = questions[currentQuestion].prompt;
    for (let i = 0; i < 4; i++) {
        options[i].textContent = questions[currentQuestion].options[i];
    }

    options.forEach((q, index) => {
        q.addEventListener("click", (event) => {
            let clickedbtn = event.target;
            
            // Check if the answer is correct
            if (clickedbtn.textContent === questions[currentQuestion].answer) {
                mark++; // Increase mark if the answer is correct
            }
            
            currentQuestion++;

            if (currentQuestion < questions.length) {
                // Load the next question and options
                Q.textContent = questions[currentQuestion].prompt;
                for (let i = 0; i < 4; i++) {
                    options[i].textContent = questions[currentQuestion].options[i];
                }
            } else {
                // If no more questions, end the quiz
                finalScore.textContent = Score;
                clearInterval(intervalId);
                divQ.style.display = "none";
                end.style.display = "block";
                marks.textContent = mark;
            }
        });
    });
});




// //gfg
// let questionsEl =
//     document.querySelector(
//         "#questions"
//     );
// let timerEl =
//     document.querySelector("#timer");
// let choicesEl =
//     document.querySelector("#options");
// let submitBtn = document.querySelector(
//     "#submit-score"
// );
// let nameEl =
//     document.querySelector("#name");
// let feedbackEl = document.querySelector(
//     "#feedback"
// );
// let reStartBtn =
//     document.querySelector("#restart");

// // Quiz's initial state
// let currentQuestionIndex = 0;
// let time = questions.length * 15;
// let timerId;

// // Start quiz and hide frontpage

// function quizStart() {
//     timerId = setInterval(
//         clockTick,
//         1000
//     );
//     timerEl.textContent = time;
//     let landingScreenEl =
//         document.getElementById(
//             "start-screen"
//         );
//     landingScreenEl.setAttribute(
//         "class",
//         "hide"
//     );
//     questionsEl.removeAttribute(
//         "class"
//     );
//     getQuestion();
// }

// // Loop through array of questions and
// // Answers and create list with buttons
// function getQuestion() {
//     let currentQuestion =
//         questions[currentQuestionIndex];
//     let promptEl =
//         document.getElementById(
//             "question-words"
//         );
//     promptEl.textContent =
//         currentQuestion.prompt;
//     choicesEl.innerHTML = "";
//     currentQuestion.options.forEach(
//         function (choice, i) {
//             let choiceBtn =
//                 document.createElement(
//                     "button"
//                 );
//             choiceBtn.setAttribute(
//                 "value",
//                 choice
//             );
//             choiceBtn.textContent =
//                 i + 1 + ". " + choice;
//             choiceBtn.onclick =
//                 questionClick;
//             choicesEl.appendChild(
//                 choiceBtn
//             );
//         }
//     );
// }

// // Check for right answers and deduct
// // Time for wrong answer, go to next question

// function questionClick() {
//     if (
//         this.value !==
//         questions[currentQuestionIndex]
//             .answer
//     ) {
//         time -= 10;
//         if (time < 0) {
//             time = 0;
//         }
//         timerEl.textContent = time;
//         feedbackEl.textContent = `Wrong! The correct answer was 
//         ${questions[currentQuestionIndex].answer}.`;
//         feedbackEl.style.color = "red";
//     } else {
//         feedbackEl.textContent =
//             "Correct!";
//         feedbackEl.style.color =
//             "green";
//     }
//     feedbackEl.setAttribute(
//         "class",
//         "feedback"
//     );
//     setTimeout(function () {
//         feedbackEl.setAttribute(
//             "class",
//             "feedback hide"
//         );
//     }, 2000);
//     currentQuestionIndex++;
//     if (
//         currentQuestionIndex ===
//         questions.length
//     ) {
//         quizEnd();
//     } else {
//         getQuestion();
//     }
// }

// // End quiz by hiding questions,
// // Stop timer and show final score

// function quizEnd() {
//     clearInterval(timerId);
//     let endScreenEl =
//         document.getElementById(
//             "quiz-end"
//         );
//     endScreenEl.removeAttribute(
//         "class"
//     );
//     let finalScoreEl =
//         document.getElementById(
//             "score-final"
//         );
//     finalScoreEl.textContent = time;
//     questionsEl.setAttribute(
//         "class",
//         "hide"
//     );
// }

// // End quiz if timer reaches 0

// function clockTick() {
//     time--;
//     timerEl.textContent = time;
//     if (time <= 0) {
//         quizEnd();
//     }
// }

// // Save score in local storage
// // Along with users' name

// function saveHighscore() {
//     let name = nameEl.value.trim();
//     if (name !== "") {
//         let highscores =
//             JSON.parse(
//                 window.localStorage.getItem(
//                     "highscores"
//                 )
//             ) || [];
//         let newScore = {
//             score: time,
//             name: name,
//         };
//         highscores.push(newScore);
//         window.localStorage.setItem(
//             "highscores",
//             JSON.stringify(highscores)
//         );
//         alert(
//             "Your Score has been Submitted"
//         );
//     }
// }

// // Save users' score after pressing enter

// function checkForEnter(event) {
//     if (event.key === "Enter") {
//         saveHighscore();
//         alert(
//             "Your Score has been Submitted"
//         );
//     }
// }
// nameEl.onkeyup = checkForEnter;

// // Save users' score after clicking submit

// submitBtn.onclick = saveHighscore;

// // Start quiz after clicking start quiz

// startBtn.onclick = quizStart;