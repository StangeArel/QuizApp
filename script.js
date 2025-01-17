let questions = [
    {
        "question": "Welcher Dinosaurier war der größte Fleischfresser, der je gelebt hat?",
        "question_1": "Tyrannosaurus Rex",
        "question_2": "Spinosaurus",
        "question_3": "Velociraptor",
        "question_4": "Allosaurus",
        "right_answer": 2
    },
    {
        "question": "Welcher Dinosaurier wird oft als der klügste angesehen?",
        "question_1": "Triceratops",
        "question_2": "Stegosaurus",
        "question_3": "Troodon",
        "question_4": "Ankylosaurus",
        "right_answer": 3
    },
    {
        "question": "Welcher Dinosaurier hatte Hörner und ein großes Schild um seinen Kopf?",
        "question_1": "Tyrannosaurus Rex",
        "question_2": "Triceratops",
        "question_3": "Brachiosaurus",
        "question_4": "Velociraptor",
        "right_answer": 2
    },
    {
        "question": "Welcher Dino war dafür bekannt, einen 'Panzer' zur Verteidigung zu haben?",
        "question_1": "Stegosaurus",
        "question_2": "Ankylosaurus",
        "question_3": "Pachycephalosaurus",
        "question_4": "Ceratosaurus",
        "right_answer": 2
    },
    {
        "question": "Wie lange dauerte die Herrschaft der Dinosaurier auf der Erde?",
        "question_1": "Etwa 65 Millionen Jahre",
        "question_2": "Etwa 100 Millionen Jahre",
        "question_3": "Etwa 165 Millionen Jahre",
        "question_4": "Etwa 200 Millionen Jahre",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion]; // let question = questions[0]

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['question_1'];
    document.getElementById('answer_2').innerHTML = question['question_2'];
    document.getElementById('answer_3').innerHTML = question['question_3'];
    document.getElementById('answer_4').innerHTML = question['question_4'];
}

function answer(selection) {
    let question = questions[currentQuestion]; // let question = questions[0]
    console.log('Selected answer is ', selection);
    let SelectedQuestionNumber = selection.slice(-1);
    console.log('SelectedQuestionNumber is ', SelectedQuestionNumber);
    console.log('Current question is ', question.right_answer);

    if (SelectedQuestionNumber == question.right_answer) {
        console.log('Wow! Richtige Antwort!');
    } else {
        console.log('Falsche Antwort... Probiere es noch ein Mal!')
    }
}