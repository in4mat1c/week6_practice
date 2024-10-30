const questionsArray = [
    {
        question: "Какая самая длинная река в мире?",
        options: ["Амазонка", "Нил", "Миссисипи", "Янцзы"],
        correctAnswer: "Нил"
    },
    {
        question: "Какой океан самый большой по площади?",
        options: ["Атлантический", "Индийский", "Тихий", "Северный Ледовитый"],
        correctAnswer: "Тихий"
    },
    {
        question: "Какая страна имеет самое большое количество соседей?",
        options: ["Россия", "Китай", "Бразилия", "Германия"],
        correctAnswer: "Китай"
    },
    {
        question: "Какой из этих городов не является столицей?",
        options: ["Канберра", "Рио-де-Жанейро", "Оттава", "Анкара"],
        correctAnswer: "Рио-де-Жанейро"
    },
    {
        question: "Какая страна является самой маленькой в мире по площади?",
        options: ["Мальта", "Монако", "Ватикан", "Сан-Марино"],
        correctAnswer: "Ватикан"
    },
    {
        question: "Какой континент полностью расположен в Южном полушарии?",
        options: ["Африка", "Антарктида", "Австралия", "Южная Америка"],
        correctAnswer: "Австралия"
    },
    {
        question: "Какая гора самая высокая в мире?",
        options: ["Килиманджаро", "Эльбрус", "Эверест", "Мак-Кинли"],
        correctAnswer: "Эверест"
    },
    {
        question: "Какое самое большое озеро по площади в мире?",
        options: ["Байкал", "Виктория", "Мичиган", "Каспийское море"],
        correctAnswer: "Каспийское море"
    },
    {
        question: "В какой стране находится пустыня Сахара?",
        options: ["Марокко", "Алжир", "Египет", "Все перечисленные"],
        correctAnswer: "Все перечисленные"
    },
    {
        question: "Какое из этих озер находится в России?",
        options: ["Виктория", "Танганьика", "Байкал", "Гурон"],
        correctAnswer: "Байкал"
    }
];

const divTest = document.createElement("div");
divTest.className = "test-container";

questionsArray.forEach((question, questionIndex) => {

    // Создание Div контейнера для хранения каждого вопроса
    const divQuestion = document.createElement("div");
    divQuestion.className = "question-container"

    const questionElement = document.createElement("p");
    questionElement.textContent = `Вопрос: ${question.question}`;
    divQuestion.appendChild(questionElement)

    // Создаем группу radio-кнопок для каждого варианта ответа
    question.options.forEach((option, optionIndex) => {
        const divButton = document.createElement("div");
        divButton.className = "answer-group";4

        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = `question-${questionIndex}`; 
        radioButton.value = option;
        radioButton.id = `question-${questionIndex}-option-${optionIndex}`;

        const label = document.createElement("label");
        label.htmlFor = radioButton.id;
        label.textContent = option;

        divButton.appendChild(radioButton);
        divButton.appendChild(label);
        divQuestion.appendChild(divButton);
    });
    divTest.appendChild(divQuestion);
});

const button = document.createElement('button');
button.textContent = "Закончить тест";

button.onclick = function() {
    let score = 0;

    questionsArray.forEach((question, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="question-${questionIndex}"]:checked`);
        const divQuestion = divTest.children[questionIndex];

        // Проверяем, был ли выбран вариант и совпадает ли он с правильным ответом
        if (selectedOption) {
            if (selectedOption.value === question.correctAnswer) {
                score++;
                divQuestion.classList.add('correct');
            } else {
                divQuestion.classList.add('incorrect');
            }
        } else {
            divQuestion.classList.add('incorrect');
        }
    });

    // Выводим результат
    alert(`Ваш результат: ${score} из ${questionsArray.length}`);
};

divTest.appendChild(button);

document.body.appendChild(divTest);





