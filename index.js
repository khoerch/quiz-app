'use strict';

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

function startQuiz() {
    //This allows the users to click a start button to begin the quiz
    console.log('Quiz is starting');
    $('.container').html(`
        <p class="start-heading">How well do you know Spider-Man?</p>
        <button class="button js-start-button">
            <span class="button-label">Start!</span>
        </button>
        `);
}

function generateNextQuestion() {
    //Generate a new question based on the number of times a button has been clicked
    let questionCount = 0;
    const question = TEST[questionCount];
    const listChoices = TEST[questionCount].options;
    console.log(question.qst);
    questionCount ++;
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
    <button class="button js-submit-button">
        <span class="button-label">Submit</span>
    </button>
    `;
}

function renderQuestion() {
    //This will make all of the questions appear one at a time
    $('.js-start-button').click(function(event) {
        console.log('A new question is being rendered');
        const quest = generateNextQuestion();
        $('.container').html(quest);
    })
}

function questionIsCorrect() {
    //Generate view when answer is correct
    return `
        <p class="">CORRECT</p>
    `;
}

function questionIsWrong() {
    //Generate view when answer is wrong
    return `
        <p class="">FALSE</p>
    `;
}

//THIS IS WHERE I LEFT OFF!

function evaluateQuestion() {
    //This will create a pop up to tell the user if their answer was correct
    $('.quiz-form').on('click', '.js-submit-button', function(event) {
        console.log('evaluating...');
        const evaluate = questionIsCorrect();
        $('.container').html(evaluate);
    });
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