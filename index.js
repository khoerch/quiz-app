'use strict';

//Establishing these as global variables so multiple functions have access. Not sure if its a good idea or not. Does this go against best practice
let questionCount = 0;
let userScore = 0;

const TEST = [
    {
        qst: "Who was Peter Parker's first girlfriend?",
        options: [
            'Mary Jane Watson',
            'Gwen Stacy',
            'Betty Brant',
            'Liz Allen'
        ],
        answer: 'Betty Brant'
    },
    {
        qst: 'In what issue did the Green Goblin first appear?',
        options: [
            'Amazing Fantasy #15',
            'Amazing Spider-Man #14',
            'Amazing Spider-Man #47',
            'Amazing Spider-Man Annual #3'
        ],
        answer: 'Amazing Spider-Man #14'
    },
    {
        qst: "What are the names of Peter's parents?",
        options: [
            'Richard and Mary',
            'May and Ben',
            'Peter and Liz',
            'Stan and Joan'
        ],
        answer: 'Richard and Mary'
    },
    {
        qst: 'What was the first super-hero team that Spider-Man attempted to join?',
        options: [
            'Fantastic Four',
            'Avengers',
            'Justice League of America',
            'Defenders'
        ],
        answer: 'Fantastic Four'
    },
    {
        qst: 'Who is often credited with creating the fan-favorite villian, Venom?',
        options: [
            'Stan Lee',
            'Jack Kirby',
            'Brian Michael Bendis',
            'Todd McFarlane'
        ],
        answer: 'Todd McFarlane'
    },
    {
        qst: 'Which of these is not a traditional power of Spider-Man?',
        options: [
            'Spider-sense',
            'Sticking to walls',
            'Venom stings',
            'Inhuman strength'
        ],
        answer: 'Venom stings'
    },
    {
        qst: `Fill in the blank for this classic Spider-Man story: "_____'s Last Hunt."`,
        options: [
            'The Sandman',
            'Kraven',
            'Electro',
            'The Vulture'
        ],
        answer: 'Kraven'
    },
    {
        qst: "Which actor played Dr. Octopus in Sam Raimi's Spider-Man 2?",
        options: [
            'Willem Dafoe',
            'Andrew Garfield',
            'Alfred Molina',
            'Stan Lee (cameo)'
        ],
        answer: 'Alfred Molina'
    },
    {
        qst: "Which artist picked up the series after Steve Ditko's acclaimed start?",
        options: [
            'Marc Bagely',
            'Jack Kirby',
            'Jim Steranko',
            'John Romita Sr.'
        ],
        answer: 'John Romita Sr.'
    },
    {
        qst: 'Where in NYC did Peter Parker grow up?',
        options: [
            'Forest Hills',
            'Brooklyn',
            'Bronx',
            'Yancy Street'
        ],
        answer: 'Forest Hills'
    },
];

function renderStatusBar() {
    //Upon start, create a status bar at the top of the window to monitor the status and score of the test taker
    $('.quiz-form').on('click', '.js-start-button', function(event) {
        $('.track-score').html(`
            <p>Question ${questionCount +1} of 10</p>
            <p>Your Score: ${userScore}</p>
        `);
    });
}

function trackQuestionCount() {
    //Track the current question count and render a new question or final screen depending on the value
    $('.quiz-form').on('click', '.js-start-button', function(event) {
        if (questionCount < 10) {
            renderQuestion();
        } else {
            console.log('The quiz is over!');
            $('.track-score').empty();
            $('.container').html(finalScore());
        }
    });
}

function generateNextQuestion() {
    //Generate a new question based on the number of times a button has been clicked
    const question = TEST[questionCount];
    const listChoices = TEST[questionCount].options;
    return `
    <fieldset class="question-block">
        <legend>${question.qst}</legend>
        <input type="radio" name="quiz-option" id="quiz-option-1" value="${listChoices[0]}">
        <label for="quiz-option-1">${listChoices[0]}</label>
        <br>
        <input type="radio" name="quiz-option" id="quiz-option-2" value="${listChoices[1]}">
        <label for="quiz-option-2">${listChoices[1]}</label>
        <br>
        <input type="radio" name="quiz-option" id="quiz-option-3" value="${listChoices[2]}">
        <label for="quiz-option-3">${listChoices[2]}</label>
        <br>
        <input type="radio" name="quiz-option" id="quiz-option-4" value="${listChoices[3]}">
        <label for="quiz-option-4">${listChoices[3]}</label>
    </fieldset>
    <button type="submit" class="button js-submit-button">
        <span class="button-label">Submit</span>
    </button>
    `;
}

function renderQuestion() {
    //This will make all of the questions appear one at a time
    //$('.quiz-form').on('click', '.js-start-button', function(event) {
        console.log('A new question is being rendered');
        const newQuestion = generateNextQuestion();
        $('.container').html(newQuestion);
    //})
}

function userIsCorrect() {
    //Generate view when answer is correct
    return `
        <p class="start-heading">CORRECT</p>
        <button class="button js-start-button">
            <span class="button-label">Next!</span>
        </button>
    `;
}

function userIsWrong() {
    //Generate view when answer is wrong
    return `
        <p class="start-heading">FALSE</p>
        <button class="button js-start-button">
            <span class="button-label">Next!</span>
        </button>
    `;
}

function evaluateQuestion() {
    //This will create a pop up to tell the user if their answer was correct
    $('.quiz-form').submit(function(event) {
        event.preventDefault();
        console.log('evaluating...');
        const userAnswer = $("input[name='quiz-option']:checked").val();
        if (userAnswer == TEST[questionCount].answer) {
            $('.container').html(userIsCorrect());
            userScore++;
        } else {
            $('.container').html(userIsWrong());
        };
        questionCount++;
        console.log(userScore);
    });
}

function finalScore() {
    //This will take your final score and return a screen with your results
    if (userScore < 4) {
        return `
            <p class="start-heading">Oh no! You scored ${userScore} out of 10, and the Sinister Six have escaped!</p>
            <p class="start-heading">It might be time to read more comics!</p>
            <button class="button js-restart-button">
                <span class="button-label">Restart</span>
            </button>
        `;
    } else if (userScore < 8) {
        return `
            <p class="start-heading">Not bad! You scored ${userScore} out of 10, and live to fight another day!</p>
            <p class="start-heading">Never hurts to read more comics!</p>
            <button class="button js-restart-button">
                <span class="button-label">Restart</span>
            </button>
        `;
    } else {
        return `
            <p class="start-heading">Congratulations! You scored ${userScore} out of 10, and have saved the day!</p>
            <p class="start-heading">Let's go read more comics!</p>
            <button class="button js-restart-button">
                <span class="button-label">Restart</span>
            </button>
        `;
    }
}

function restartQuiz() {
    //Reloads the page when a user clicks the restart button at the end
    $('.quiz-form').on('click', '.js-restart-button', function() {
        location.reload(true);
    });
}

function handlePage() {
    renderStatusBar();
    trackQuestionCount();
    evaluateQuestion();
    restartQuiz();
}

$(handlePage);