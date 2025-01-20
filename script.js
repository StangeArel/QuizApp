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
        "question_1": "Triceratops",
        "question_2": "Tyrannosaurus Rex",
        "question_3": "Brachiosaurus",
        "question_4": "Velociraptor",
        "right_answer": 1
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
        "question_3": "Etwa 200 Millionen Jahre",
        "question_4": "Etwa 165 Millionen Jahre",
        "right_answer": 4
    }
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = "";
        document.getElementById('questionBody').style = "display: none";
        document.getElementById('amountOfQuestions').innerHTML = currentQuestion;  //questions.length
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;  // Ergebnis anzeigen
        document.getElementById('headerImage').src = './img/pokal.png';
    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`; // percent + '%'
        document.getElementById('progress-bar').style = `width: ${percent}%`; // percent + '%'


        console.log('Fortschritt', percent);
        let question = questions[currentQuestion]; // let question = questions[0]
        /*     document.getElementById('nextButton').disabled = true; // Button deaktivieren */
        document.getElementById("this-questions").innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question']; // question.question
        document.getElementById('answer_1').innerHTML = question['question_1'];   // question.question_1
        document.getElementById('answer_2').innerHTML = question['question_2'];
        document.getElementById('answer_3').innerHTML = question['question_3'];
        document.getElementById('answer_4').innerHTML = question['question_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion]; // let question = questions[0]
    let SelectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = /* `answer_2` */ `answer_${question.right_answer}`;

    if (SelectedQuestionNumber == question.right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++; //  Ergebnis aufzählen
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('headerImage').src = './img/pencil.jpg';
    document.getElementById('questionBody').style = ""; // questionBody wieder anzeigen
    document.getElementById('endScreen').style = "display: none"; // endScreen ausblenden
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}