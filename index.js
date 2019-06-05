'use strict';

const TEST = [

];

function startQuiz() {
    //This allows the users to click a start button to begin the quiz
    console.log('Quiz is starting');
    $('.quiz-block').html(`
        <p class="start-heading">How well do you know Spider-Man?</p>
        <button class="button js-start-button">
            <span class="button-label">Start!</span>
        </button>
        `);
}

function generateNextQuestion() {
    return `
    <fieldset>
        <legend>This is a test</legend>
        <input type="radio">
        <label for=""></label>
        <br>
        <input type="radio">
        <label for=""></label>
        <br>
        <input type="radio">
        <label for=""></label>
        <br>
        <input type="radio">
        <label for=""></label>
    </fieldset>
    <button class="js-button">
        <span class="button js-submit-button">Submit</span>
    </button>
    `;
}

function renderQuestion() {
    //This will make all of the questions appear one at a time
    $('.js-start-button').click(function(event) {
        console.log('A new question is being rendered');
        const quest = generateNextQuestion();
        $('.quiz-block').html(quest);
    })
}

function evaluateQuestion() {
    //This will create a pop up to tell the user if their answer was correct
}

function trackQuestionStatus() {
    //Log the question the user is currently on in a status bar
}

function trackUserScore() {
    //Keep track of the user score depending on the questions they get right
}

function evaluateUserScore() {
    //Take the final score and provide a range of grades at the end
}

function restartQuiz() {
    //Runs the startQuiz function again and zeros out values for question and score
}

function handlePage() {
    startQuiz();
    renderQuestion();
}

$(handlePage);