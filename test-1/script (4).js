let today = ""; //переменная текущей даты
window.onload = init; //после загрузки страницы
function init() {
    let button = document.getElementById("getresults") //доступ к кнопке
    button.onclick = handleButtonClick; //подключение созданной функции к переменной
}

function handleButtonClick() { //при клике на кнопку
    today = new Date();
    document.getElementById('date').innerText = today;
}

let resultsNode = document.querySelector('.results');
let buttonNode = document.querySelector('#getresults');
let punderbutNode = document.querySelector('.text-danger');
let score = document.querySelector('#score'); // добавлен элемент для отображения баллов
let yourmark = document.querySelector(`#yourmark`)
let body = document.querySelector(`#body`)

buttonNode.addEventListener('click', function(event) {
    let count = 0; // переменная count инициализирована внутри функции
    event.preventDefault();
    let containerNode = document.querySelector('.containeryour');
    let answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let allInputsFilled = true;

    for (let i = 0; i < answers.length; i++) {
        let inputNode = document.querySelector(`#task${answers[i]}`);
        let inputValue = inputNode.value;
        if (inputValue === '') {
            allInputsFilled = false;
            break;
        }
        containerNode.innerHTML += `
        <li class="ans${answers[i]}">${inputValue}</li>
        `;
    }
    if (allInputsFilled) {
        body.classList.add(`no-scroll`)
        resultsNode.classList.remove('d-none');
        for (let i = 1; i <= 12; i++) {
            let ansElement = document.querySelector(`.ans${i}`);
            let answer = ansElement.textContent;

            switch (i) {
                case 1:
                    if (answer.toLowerCase() === 'бинтуронг') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 2:
                    if (answer.toUpperCase() === 'GATE') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 3:
                    if (answer === '7') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 4:
                    if (answer === '5') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 5:
                    if (answer === '11212') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 6:
                    if (answer === '5') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 7:
                    if (answer.toUpperCase() === 'ГЖВБЕАД') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 8:
                    if (answer === '3300') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 9:
                    if (answer === '38') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 10:
                    if (answer === '42') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 11:
                    if (answer.toLowerCase() === 'доктор') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                case 12:
                    if (answer === '7') {
                        ansElement.classList.add('true');
                        count++;
                    } else {
                        ansElement.classList.add('false');
                    }
                    break;
                default:
                    break;
            }
        }
        score.innerHTML = `
        <h5 id="score" style="margin: 20px 0px 20px 0px; text-align: center;">Набрано баллов: <b>${count}</b></h5>
        `;
        if (count <= 4) {
            mark = 2;
        } else if (5 <= count <= 10) {
            mark = 3;
        } else if (11 <= count <= 15) {
            mark = 4;
        } else if (16 <= count <= 19) {
            mark = 5;
        }
        yourmark.innerHTML = `
        <h2 id="mark" style="margin: 20px 0px 20px 0px; text-align: center;">Ваша оценка <b>${mark}</b></h2>
        `;
    } else {
        punderbutNode.classList.remove('d-none');
        resultsNode.classList.add('d-none');
    }
});

// Таймер //

let timerElement = document.getElementById('timer');
let pauseButton = document.getElementById('pauseButton');

let timer;
let startTime;
let pausedTime = 0;
let isPaused = false;

const initialTime = {
    hours: 2,
    minutes: 30,
    seconds: 0
};

function startTimer() {
    startTime = Date.now() - pausedTime;
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    pausedTime = Date.now() - startTime;
    isPaused = true;
}

function updateTimer() {
    let elapsedTime = Date.now() - startTime;
    let remainingTime = initialTime.hours * 3600000 + initialTime.minutes * 60000 + initialTime.seconds * 1000 - elapsedTime;

    if (remainingTime <= 0) {
        clearInterval(timer);
        timerElement.textContent = '00:00:00';
        pauseButton.disabled = true;
        return;
    }

    let seconds = Math.floor((remainingTime / 1000) % 60);
    let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    let hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);

    timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

pauseButton.addEventListener('click', function() {
    if (isPaused) {
        startTimer();
        pauseButton.textContent = 'Пауза';
        isPaused = false;
    } else {
        pauseTimer();
        pauseButton.textContent = 'Продолжить';
        isPaused = true;
    }
});

startTimer();