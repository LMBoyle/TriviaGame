// VARIABLES ===========================
const triva = [
  {
    question: "The Simpsons originally appeared as a short on what TV show?",
    answers: {
      a: "Married With Children",
      b: "Matt Groening's American Family",
      c: "The Tracy Ullman Show",
      d: "Dr. N!godatu"
    },
    correctAnswer: "c"
  },
  {
    question: "What town to The Simpsons live in?",
    answers: {
      a: "Springfield",
      b: "Gotham City",
      c: "Stars Hollow",
      d: "Mayberry"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the bar Homer goes to?",
    answers: {
      a: "McLaren's Pub",
      b: "Moe's Tavern",
      c: "The Drunken Clam",
      d: "Cheers"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of Homer's brother",
    answers: {
      a: "Hank Powell",
      b: "Henry Powell",
      c: "Harry Powell",
      d: "Herbert Powell"
    },
    correctAnswer: "d"
  },
  {
    question: "What was the name of the first Simpsons episode aired in the US?",
    answers: {
      a: "Some Enchanted Evening",
      b: "Bart the Genius",
      c: "Simpsons Roasting On An Open Fire",
      d: "The Call of the Simpsons"
    },
    correctAnswer: "c"
  },
];

var correct = 0;
var wrong = 0;
var unanswered = triva.length;
var q = 0;

// Timer Vars
var timerRunning = false;
var timeLeft = 120;
var countDown;

var question = document.getElementById("question");
var ansA = document.getElementById("answer1");
var ansB = document.getElementById("answer2");
var ansC = document.getElementById("answer3");
var ansD = document.getElementById("answer4");
var start = document.getElementById("startCard");
var game = document.getElementById("gameCard");
var trivaCard = document.getElementById("triva");

// Gifs
var gifStart = document.getElementById("startGif");
var gifCorrect = document.getElementById("correctGif");
var gifWrong = document.getElementById("wrongGif");



// FUNCTIONS ===========================
//Display a start page
function startGame() {
// Hide start
  start.style.display = "none";

//  On start, display first question
  displayQuestion();
}

function startTimer() {
// Display and start timer
  timeleft = 120;

  countDown = setInterval(count, 1000);
  timerRunning = true;
}

function stopTimer() {
  timerRunning = false;
  clearInterval(countDown);
}

function count() {
  timeleft--;
  document.getElementById("timer").textContent = "Time Left: " + timeleft + " s";

  if (timeleft <= 0) {
    // TODO If time is up, show time up screen
    console.log("Time Up!");
    stopTimer();
  }
}

function displayQuestion() {
  // Show the question and answers
  game.style.display = "grid";

  // Hide any gifs on screen
  gifCorrect.style.display = "none";
  gifWrong.style.display = "none";

  // Show the next question
  question.innerHTML = triva[q].question;

  // Show the answer choices to the question
  ansA.innerHTML = triva[q].answers.a;
  ansB.innerHTML = triva[q].answers.b;
  ansC.innerHTML = triva[q].answers.c;
  ansD.innerHTML = triva[q].answers.d;

  // Run the start timer function
  startTimer();

  // Wait for one of the answer buttons to be clicked
  ansA.addEventListener("click", answer);
  ansB.addEventListener("click", answer);
  ansC.addEventListener("click", answer);
  ansD.addEventListener("click", answer);
}

// Once a answer has been selected
function answer(answer) {
  // Stop and reset the timer
  stopTimer();

  //! If all the questions have been answered, go to the end
  if (triva.length <= q) {
    endGame();
  }

  // If answer is wrong, show wrong answer screen
  else if (answer.target.value != triva[q].correctAnswer) {
    console.log("Wrong");
    // If answer is wrong, add to wrong answers
    wrong++;
    unanswered--;
    q++;
    
    // Hide questions and show gif
    trivaCard.style.display = "none";
    gifWrong.style.display = "block";

    // TODO Show next question after 5 seconds
    setTimeout(testTimer, 5000);
  }

  // If answer is right, show right answer screen
  else if (answer.target.value === triva[q].correctAnswer) {
    console.log("Correct!");
    // If answer is right, add to wrong answers
    correct++;
    unanswered--;
    q++;

    // Hide questions and show gif
    trivaCard.style.display = "none";
    gifCorrect.style.display = "block";

    // TODO Show next question after 5 seconds
    setTimeout(testTimer, 5000);
  }
}

function testTimer () {
  console.log("Timeout")
}


function endGame() {
// TODO At end of all questions, show end screen and # of right/wrong
// TODO If time up, show end screen and # of right/wrong/unanswered
console.log("All answered");
}

// CALL FUNCTIONS ======================
window.addEventListener("keydown", startGame);
