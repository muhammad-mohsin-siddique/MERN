// creating array name quizdata
const quizData = [
  {
    question: "What is the answer of 2 + 2?",
    options: ["4", "5", "3", "6"],
    answer: "4",
  },
  {
    question: "What is the answer of 5 + 6?",
    options: ["24", "11", "30", "32"],
    answer: "11",
  },
  {
    question: "What is the answer of 12 + 3?",
    options: ["10", "8", "15", "9"],
    answer: "15",
  },
  {
    question: "What is the answer of 8 + 5?",
    options: ["10", "15", "9", "13"],
    answer: "13",
  },
  {
    question: "Which is the answer of  9 + 3?",
    options: ["10", "12", "11", "13"],
    answer: "12",
  },
];

const quizDataSubtract = [
  {
    question: "What is the answer of 2 - 2?",
    options: ["0", "1", "5", "4"],
    answer: "0",
  },
  {
    question: "What is the answer of 5 - 6?",
    options: ["-1", "0", "2", "4"],
    answer: "-1",
  },
  {
    question: "What is the answer of 12 - 3?",
    options: ["10", "8", "11", "9"],
    answer: "9",
  },
  {
    question: "What is the answer of 8 - 2?",
    options: ["2", "6", "-6", "3"],
    answer: "6",
  },
  {
    question: "Which is the answer of  15 - 2?",
    options: ["-13", "12", "-11", "13"],
    answer: "13",
  },
];

const quizDataMultily = [
  {
    question: "What is the answer of 2 * 2?",
    options: ["4", "5", "3", "6"],
    answer: "4",
  },
  {
    question: "What is the answer of 5 * 6?",
    options: ["24", "20", "30", "32"],
    answer: "30",
  },
  {
    question: "What is the answer of 12 * 3?",
    options: ["30", "36", "24", "25"],
    answer: "36",
  },
  {
    question: "What is the answer of -8 * 2?",
    options: ["-16", "16", "13", "15"],
    answer: "-16",
  },
  {
    question: "Which is the answer of  3 * 2?",
    options: ["-6", "5", "6", "3"],
    answer: "6",
  },
];

const quizDataDivide = [
  {
    question: "What is the answer of 2 / 2?",
    options: ["0", "1", "4", "6"],
    answer: "1",
  },
  {
    question: "What is the answer of 15 * 3?",
    options: ["1", "5", "10", "15"],
    answer: "5",
  },
  {
    question: "What is the answer of  - 12 / 4?",
    options: ["-3", "8", "12", "4"],
    answer: "-3",
  },
  {
    question: "What is the answer of 8 / 2?",
    options: ["2", "4", "3", "5"],
    answer: "4",
  },
  {
    question: "Which is the answer of  81 / 9?",
    options: ["9", "1", "-1", "-9"],
    answer: "9",
  },
];
// DOM manipulation using js
const quizContainer = document.getElementById("quiz");
const optionsContainer = document.getElementById("optionsDisplay");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const closeButton = document.getElementById("close");
const skipButton = document.getElementById("skip");
const getResultButton = document.getElementById("getResult");
const retryButton = document.getElementById("retry");
const selectElement = document.getElementById("operators");

let selectedOperator = ".";

let currentQuestion = 0;
let add = false,
  sub = false,
  mul = false,
  divide = false;
let score = 0,
  scoreSubstraction = 0,
  scoreMultiply = 0,
  scoreDivide = 0;
let incorrectAnswers = [];
// function responsible for displaying question
function displayQuestion() {
  let questionData;
  if (selectedOperator == "+") {
    questionData = quizData[currentQuestion];
  } else if (selectedOperator == "-") {
    questionData = quizDataSubtract[currentQuestion];
  } else if (selectedOperator == "x") {
    questionData = quizDataMultily[currentQuestion];
  } else {
    questionData = quizDataDivide[currentQuestion];
  }
  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  questionData.options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = option;

    const optionText = document.createTextNode(option);

    label.appendChild(radio);
    label.appendChild(optionText);
    optionsElement.appendChild(label);
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

// function responsible for checking answer
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    let questionData;
    if (selectedOperator == "+") {
      questionData = quizData;
    } else if (selectedOperator == "-") {
      questionData = quizDataSubtract;
    } else if (selectedOperator == "x") {
      questionData = quizDataMultily;
    } else {
      questionData = quizDataDivide;
    }

    const answer = selectedOption.value;
    const correctAnswer = questionData[currentQuestion].answer;
    const isCorrect = answer === correctAnswer;
    if (isCorrect) {
      if (selectedOperator == "+") {
        score++;
        add = true;
      } else if (selectedOperator == "-") {
        scoreSubstraction++;
        sub = true;
      } else if (selectedOperator == "x") {
        scoreMultiply++;
        mul = true;
      } else {
        scoreDivide++;
        divide = true;
      }
    } else {
      incorrectAnswers.push({
        question: questionData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: correctAnswer,
      });
    }
    resultContainer.innerHTML = isCorrect ? "Correct!" : "Incorrect!";
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < questionData.length) {
      setTimeout(() => {
        displayQuestion();
        resultContainer.innerHTML = "";
      }, 1000); // Wait for 1 second before displaying the next question
    } else {
      quizContainer.style.display = "none";
      submitButton.style.display = "none";
      skipButton.style.display = "none";
      getResultButton.style.display = "inline-block";
      selectElement.selectedIndex = 0;
      closeButton.style.display = "none";
      resultContainer.innerHTML = "";
      currentQuestion = 0;
    }
  }
}
// function responsible for displaying result
function displayResult() {
  quizContainer.style.display = "none";
  optionsContainer.style.display = "none";
  submitButton.style.display = "none";
  skipButton.style.display = "none";
  closeButton.style.display = "none";
  getResultButton.style.display = "none";

  resultContainer.innerHTML = `You scored in + Quize =  ${score} out of ${quizData.length}!<br />
  You scored in - Quiz =  ${scoreSubstraction} out of ${quizData.length}!<br />
  You scored in x Quiz =  ${scoreMultiply} out of ${quizData.length}!<br />
  You scored in ÷ Quiz =  ${scoreDivide} out of ${quizData.length}!<br />`;

  retryButton.style.display = "inline-block";
  

  scoreSubstraction = 0;
  scoreMultiply = 0;
  scoreDivide = 0;
  score = 0;

  add = false;
  sub = false;
  mul = false;
  divide = false;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreSubstraction = 0;
  scoreMultiply = 0;
  scoreDivide = 0;
  incorrectAnswers = [];
  quizContainer.style.display = "none";
  optionsContainer.style.display = "block";
  submitButton.style.display = "none";
  closeButton.style.display = "none";
  retryButton.style.display = "none";
  resultContainer.innerHTML = "";
  selectElement.selectedIndex = 0;
  add = false;
  sub = false;
  mul = false;
  divide = false;
}

selectElement.addEventListener("change", function () {
  let selectedOption = selectElement.value;

  if (selectedOption === ".") {
    selectedOperator = ".";
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    skipButton.style.display = "none";
  } else {
    if (selectedOption === "+" && add === false) {
      if (currentQuestion == 0) {
        selectedOperator = selectedOption;
        quizContainer.style.display = "block";
        displayQuestion();
        submitButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        closeButton.style.display = "inline-block";
        getResultButton.style.display = "none";
      } else
        var confirmReset = confirm(
          "Are you sure you want to cancel the current quiz?"
        );
      if (confirmReset) {
        // Reset the selection to "Select Your Choice"
        selectElement.selectedIndex = 0;
        selectedOperator = ".";
        quizContainer.style.display = "none";
      }
    }
    else if (selectedOption === "-" && sub === false) {
      if (currentQuestion == 0) {
        selectedOperator = selectedOption;
        quizContainer.style.display = "block";
        displayQuestion();
        submitButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        closeButton.style.display = "inline-block";
        getResultButton.style.display = "none";
      } else
        var confirmReset = confirm(
          "Are you sure you want to cancel the current quiz?"
        );
      if (confirmReset) {
        // Reset the selection to "Select Your Choice"
        selectElement.selectedIndex = 0;
        selectedOperator = ".";
        quizContainer.style.display = "none";
      }
    }
    else  if (selectedOption === "x" && mul === false) {
      if (currentQuestion == 0) {
        selectedOperator = selectedOption;
        quizContainer.style.display = "block";
        displayQuestion();
        submitButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        closeButton.style.display = "inline-block";
        getResultButton.style.display = "none";
      } else
        var confirmReset = confirm(
          "Are you sure you want to cancel the current quiz?"
        );
      if (confirmReset) {
        // Reset the selection to "Select Your Choice"
        selectElement.selectedIndex = 0;
        selectedOperator = ".";
        quizContainer.style.display = "none";
      }
    }
    else if (selectedOption === "÷" && divide === false) {
      if (currentQuestion == 0) {
        selectedOperator = selectedOption;
        quizContainer.style.display = "block";
        displayQuestion();
        submitButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        closeButton.style.display = "inline-block";
        getResultButton.style.display = "none";
      } else
        var confirmReset = confirm(
          "Are you sure you want to cancel the current quiz?"
        );
      if (confirmReset) {
        // Reset the selection to "Select Your Choice"
        selectElement.selectedIndex = 0;
        selectedOperator = ".";
        quizContainer.style.display = "none";
      }
    }
    else{
      alert("Already Attempted");
      currentQuestion=0;
      selectElement.selectedIndex = 0;
    }
  }
});

function closeQuiz() {
  currentQuestion = quizData.length;
  displayResult();
  selectElement.selectedIndex = 0;
  
}

function skipQuestion() {
  currentQuestion++;
  if (currentQuestion == quizData.length) {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    skipButton.style.display = "none";
    getResultButton.style.display = "inline-block";
    selectElement.selectedIndex = 0;
    currentQuestion = 0;
    closeButton.style.display = "none";
  } else {
    displayQuestion();
  }
}

submitButton.addEventListener("click", checkAnswer);
closeButton.addEventListener("click", closeQuiz);
retryButton.addEventListener("click", retryQuiz);
skipButton.addEventListener("click", skipQuestion);
getResultButton.addEventListener("click", closeQuiz);

