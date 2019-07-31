// VARIABLES ===========================
const triva = [
  {
    question: "The Simpsons originally appeared as a short on what TV show?",
    answers: {
      a: "Married With Children",
      b: "Matt Groening's American Family",
      c: "The Tracey Ullman Show",
      d: "A Different World"
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
var timeLeft = 60;
var countDown;

// Question 
var question = document.getElementById("question");

// Answers
var ansA = document.getElementById("answer1");
var ansB = document.getElementById("answer2");
var ansC = document.getElementById("answer3");
var ansD = document.getElementById("answer4");
var corrAns = triva[q].correctAnswer;

// Start Card
var start = document.getElementById("startCard");

// Game Card
var game = document.getElementById("gameCard");

// Score Card
var end = document.getElementById("scoreCard");
var numCorrect = document.getElementById("numCorrect");
var numWrong = document.getElementById("numWrong");
var numUnans = document.getElementById("numUnans");

// Triva Card inside of Game Card
var trivaCard = document.getElementById("triva");

// Timer Div
var timerDiv = document.getElementById("timer");

// Gifs
var gifStart = document.getElementById("startGif");
var gif = document.getElementById("gif");
var gifCard = document.getElementById("gifs");
var ifWrong = document.getElementById("giveCorrect")



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
  timeleft = 60;

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
    // If time is up, show time up screen
    console.log("Time Up!");
    stopTimer();
    q++;
    
    trivaCard.style.display = "none";   // Hide question & answers
    timer.style.display = "none"        // Hide timer
    gif.src = "assets/images/timeUp.gif" // Set gif src to the needed gif
    gifCard.style.display = "block";    // Show the gif

    // Show next question after 5 seconds
    setTimeout(displayQuestion, 5000);
  }
}

function showCorrect() {

}

function displayQuestion() {
  //If all the questions have been answered, go to the end
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

    // Hide the answer if user answered wrong
    ifWrong.style.display = "none";

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
    
    
    trivaCard.style.display = "none";   // Hide question & answers
    timer.style.display = "none"        // Hide timer
    gif.src = "assets/images/wrong.gif" // Set gif src to the needed gif
    gifCard.style.display = "block";    // Show the gif
    
    // Show the right answer
    switch (triva[q].correctAnswer) {
      case "a":
        ifWrong.textContent = "The Correct Answer Was '" + triva[q].answers.a + "'";
        ifWrong.style.display= "block";
        break;
      case "b":
        ifWrong.textContent = "The Correct Answer Was '" + triva[q].answers.b + "'";
        ifWrong.style.display = "block";
        break;
      case "c":
        ifWrong.textContent = "The Correct Answer Was '" + triva[q].answers.c + "'";
        ifWrong.style.display = "block";
        break;
      case "d":
        ifWrong.textContent = "The Correct Answer Was '" + triva[q].answers.d + "'";
        ifWrong.style.display = "block";
        break;
    }

    q++;
    // Show next question after 5 seconds
    setTimeout(displayQuestion, 5000);
  }

  // If answer is right, show right answer screen
  else if (answer.target.value === triva[q].correctAnswer) {
    console.log("Correct!");
    // If answer is right, add to wrong answers
    correct++;
    unanswered--;

    trivaCard.style.display = "none";     // Hide question & answers
    timer.style.display = "none"          // Hide timer


    switch (q) {
      case 0:
        gif.src = "assets/images/tvshowCorrect.gif" // Set gif src to the needed gif
        gifCard.style.display = "block";            // Show the gif
        break;
      case 1:
        gif.src = "assets/images/springfieldCorrect.gif" // Set gif src to the needed gif
        gifCard.style.display = "block";            // Show the gif
        break;
      case 2:
        gif.src = "assets/images/moesCorrect.gif" // Set gif src to the needed gif
        gifCard.style.display = "block";            // Show the gif
        break;
      case 3:
        gif.src = "assets/images/herbertCorrect.gif" // Set gif src to the needed gif
        gifCard.style.display = "block";            // Show the gif
        break;
      case 4:
        gif.src = "assets/images/firstepCorrect.gif" // Set gif src to the needed gif
        gifCard.style.display = "block";            // Show the gif
        break;
    }
    
    q++;
    // Show next question after 5 seconds
    setTimeout(displayQuestion, 5000);
  }
}

function endGame() {
  console.log("All answered");
  // At end of all questions, show end screen and # of right/wrong
  game.style.display = "none";   // Hide question & answers
  end.style.display = "grid";    // Show the score

  numCorrect.textContent = "Correct : " + correct;
  numWrong.textContent = "Wrong : " + wrong;
  numUnans.textContent = "Unanswered : " + unanswered;
  document.getElementById("reset").addEventListener("click", restart);
}

function restart() {
  correct = 0;
  wrong = 0;
  unanswered = triva.length;
  q = 0;

  // Timer Vars
  timerRunning = false;
  timeLeft = 60;
  countDown;

  start.style.display = "grid";  // Show Start Screen
  end.style.display = "none";    // Hide the score
}

// CALL FUNCTIONS ======================
window.addEventListener("keydown", startGame);
