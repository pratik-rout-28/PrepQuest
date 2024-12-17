// Quiz data: Array of questions, options, and correct answers
const quizData = [{
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
},
{
    question: "What is the square root of 16?",
    options: ["2", "3", "4", "5"],
    answer: "4"
}];

// Global variables
    
let currentQuestion = 0; // Tracks current question index
let score = 0; // Tracks user's score
let timerInterval; // To manage timer
let timeLeft = 30; // 30 seconds per question
    
// Function to load a question dynamically
    
function loadQuestion(index) {
const quizContainer = document.getElementById("quiz-container");
    
// Inject the current question and its options into the container
    
quizContainer.innerHTML = `
    <h4>${quizData[index].question}</h4>
    ${quizData[index].options
        .map(
        (option, i) => 
            `<div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${i}" value="${option}">
                <label class="form-check-label" for="option${i}">
                    ${option}
                </label>
            </div>`
        )
    .join("")}
    `;
    
    // Reset and start the timer for the current question
    resetTimer();
    }
    // Function to check the selected answer
    function checkAnswer() {
    const options = document.getElementsByName("option");
    let selectedOption;
    // Find the selected radio button
    for (let option of options) {
    if (option.checked) {
    selectedOption = option.value;
    break;
    }
    }
    // If the selected option matches the correct answer, increment the score
    if (selectedOption === quizData[currentQuestion].answer) {
    score++;
    }
    }
    // Timer logic
    function startTimer() {
    const timerElement = document.getElementById("time-left");
    timeLeft = 30; // Reset time to 30 seconds
    // Countdown logic
    timerInterval = setInterval(() => {
    if (timeLeft > 0) {
    timeLeft--;
    timerElement.innerText = timeLeft;
    } else {
    clearInterval(timerInterval); // Stop the timer when time is up
    alert("Time's up for this question!");
    nextQuestion(); // Automatically move to the next question
    }
    }, 1000);
    }
    // Function to reset the timer
    function resetTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    startTimer(); // Start a new timer
    }
    // Function to move to the next question
    function nextQuestion() {
    checkAnswer(); // Check the user's answer for the current question
    currentQuestion++; // Move to the next question
    if (currentQuestion < quizData.length) {
    loadQuestion(currentQuestion); // Load the next question
    } else {
    showScore(); // End the quiz and show the score
    }
    }
    // Function to move to the previous question
    function prevQuestion() {
    if (currentQuestion > 0) {
    currentQuestion--; // Move to the previous question
    loadQuestion(currentQuestion); // Load the previous question
    }
    }
    // Function to display the final score
    function showScore() {
    clearInterval(timerInterval); // Stop the timer
    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");
    // Clear the quiz container and display the score
    quizContainer.innerHTML = "";
    scoreContainer.innerHTML = `
    <h4>Your Final Score: ${score}/${quizData.length}</h4>
    <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
    `;
    }
    // Function to restart the quiz
    function restartQuiz() {
    currentQuestion = 0; // Reset the question index
    score = 0; // Reset the score
    loadQuestion(currentQuestion); // Load the first question
    document.getElementById("score-container").innerHTML = ""; // Clear the score display
    }
    // Event listeners for navigation buttons
    document.getElementById("next-btn").addEventListener("click", nextQuestion);
    document.getElementById("prev-btn").addEventListener("click", prevQuestion);
    // Load the first question and start the timer when the page loads
    window.onload = () => {
    loadQuestion(currentQuestion);
    startTimer();
    };