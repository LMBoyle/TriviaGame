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

// Question 
var question = document.getElementById("question");

// Answers
var ansA = document.getElementById("answer1");
var ansB = document.getElementById("answer2");
var ansC = document.getElementById("answer3");
var ansD = document.getElementById("answer4");

// Start Card
var start = document.getElementById("startCard");

// Game Card
var game = document.getElementById("gameCard");

// Triva Card inside of Game Card
var trivaCard = document.getElementById("triva");

// Timer Div
var timerDiv = document.getElementById("timer");

// Gifs
var gifStart = document.getElementById("startGif");
var gif = document.getElementById("gif");
var gifCard = document.getElementById("gifs");



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
  //! If all the questions have been answered, go to the end
  if (triva.length <= q) {
    endGame();
  }
  else {
    // Show the question, answers and timer
    game.style.display = "grid";
    trivaCard.style.display = "grid";
    timer.style.display = "block";

    // Hide any gifs on screen
    gif.src = "#";
    gifCard.style.display = "none";

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
}

// Once a answer has been selected
function answer(answer) {
  // Stop and reset the timer
  stopTimer();

  // If answer is wrong, show wrong answer screen
  if (answer.target.value != triva[q].correctAnswer) {
    console.log("Wrong");
    // If answer is wrong, add to wrong answers
    wrong++;
    unanswered--;
    q++;
    
    trivaCard.style.display = "none";   // Hide question & answers
    timer.style.display = "none"        // Hide timer
    gif.src = "assets/images/wrong.gif" // Set gif src to the needed gif
    gifCard.style.display = "block";    // Show the gif

    // Show next question after 5 seconds
    setTimeout(displayQuestion, 5000);
  }

  // If answer is right, show right answer screen
  else if (answer.target.value === triva[q].correctAnswer) {
    console.log("Correct!");
    // If answer is right, add to wrong answers
    correct++;
    unanswered--;
    q++;

    trivaCard.style.display = "none";     // Hide question & answers
    timer.style.display = "none"          // Hide timer
    gif.src = "assets/images/correct.gif" // Set gif src to the needed gif
    gifCard.style.display = "block";      // Show the gif

    // Show next question after 5 seconds
    setTimeout(displayQuestion, 5000);
  }
}

function endGame() {
// TODO At end of all questions, show end screen and # of right/wrong
// TODO If time up, show end screen and # of right/wrong/unanswered
console.log("All answered");
}

// CALL FUNCTIONS ======================
window.addEventListener("keydown", startGame);
