const questions = [
    {
        numb: 1,
        question: "Which is the largest animal in the ocean?",
        answer: "A. Blue Whale",
        options: [
            "A. Blue Whale",
            "B. Great White Shark",
            "C. Giant Squid",
            "D. Orca"
        ]
    },
    {
        numb: 2,
        question: "What type of animal is a dolphin?",
        answer: "A. Acquatic Mammal",
        options: [
            "A. Acquatic Mammal",
            "B. Bird",
            "C. Fish",
            "D. Reptile"
        ]
    },
    {
        numb: 3,
        question: "What is the main food of sea turtles?",
        answer: "B. Jellyfish",
        options: [
            "A. Seaweed",
            "B. Jellyfish",
            "C. Small Fish",
            "D. Coral"
        ]
    },
    {
        numb: 4,
        question: "Which marine animal has eight arms?",
        answer: "D. Octopus",
        options: [
            "A. Starfish",
            "B. Crab",
            "C. Dolphin",
            "D. Octopus"
        ]
    },
    {
        numb: 5,
        question: "What color is a seahorse?",
        answer: "B. It can change colors",
        options: [
            "A. Blue",
            "B. It can change colors",
            "C. Red",
            "D. Green"
        ]
    }
];

const nextBtn = document.querySelector('.next-btn');

let questionCount = 0;
let score = 0;

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const optionList = document.querySelector('.option-list');

    if (!questions[index]) {
        console.error('Question not found at index:', index);
        return;
    }

    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    optionList.innerHTML = '';

    questions[index].options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = `<span>${option}</span>`;
        optionDiv.onclick = () => checkAnswer(option, questions[index].answer);
        optionList.appendChild(optionDiv);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.option');
    if (selectedOption === correctAnswer) {
        alert('Correct Answer!');
        score++;
        updateScore();
    } else {
        alert('Wrong Answer!');
    }

    options.forEach(option => (option.onclick = null));
}

function updateScore() {
    const scoreDisplay = document.querySelector('.header-score');
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
}

nextBtn.onclick = () => {
    questionCount++;
    if (questionCount < questions.length) {
        showQuestions(questionCount);
        updateQuestionProgress();
    } else {
        alert('Quiz Completed! Press OK to go back to the homepage');
        nextBtn.disabled = true;

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
};

function updateQuestionProgress() {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${questionCount + 1} of ${questions.length} Questions`;
}

showQuestions(0);
updateQuestionProgress();
updateScore();