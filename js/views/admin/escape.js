const addQuestion = document.getElementById('addQuestion');
const addQuestionButton = document.getElementById('addQuestionButton');

function displayQuestions() {
    const questionTable = document.getElementById('questionTable');
    const storedFormData = JSON.parse(localStorage.getItem('questions')) || [];
    storedFormData.forEach((escape, index) => {
        const row = questionTable.insertRow(-1);

        const cellId = row.insertCell(0);
        cellId.textContent = index + 1;

        const cellQuestion = row.insertCell(1);
        cellQuestion.textContent = escape.question;

        const cellGoodAnswer = row.insertCell(2);
        cellGoodAnswer.textContent = escape.goodAnswer;

        const cellBadAnswer = row.insertCell(3);
        cellBadAnswer.textContent = escape.badAnswer;

        const cellEdit = row.insertCell(4);
        const detailsButton = document.createElement('h6');
        detailsButton.textContent = 'Editar';
        detailsButton.classList.add('blue');
        detailsButton.addEventListener('click', () => showDetails(index + 1));
        cellEdit.appendChild(detailsButton);

        const cellDelete = row.insertCell(5);
        const deleteButton = document.createElement('h6');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', () => deleteQuestion(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

function addQuestions() {
    const questionInputValue = document.getElementById('questionInput').value;
    const firstInputValue = document.getElementById('GoodAnswerInput').value;
    const secondInputValue = document.getElementById('BadAnswerInput').value;

    if (questionInputValue && firstInputValue && secondInputValue) {
        const newQuestion = {
            question: questionInputValue,
            goodAnswer: firstInputValue,
            badAnswer: secondInputValue
        };

        const storedFormData = JSON.parse(localStorage.getItem('questions')) || [];

        storedFormData.push(newQuestion);

        localStorage.setItem('questions', JSON.stringify(storedFormData));
        location.reload();
        refreshTable();

        document.getElementById('questionInput').value = '';
        document.getElementById('GoodAnswerInput').value = '';
        document.getElementById('BadAnswerInput').value = '';

        hideModal();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function deleteQuestion(questionId) {
    const storedFormData = JSON.parse(localStorage.getItem('questions')) || [];

    const isConfirmed = confirm("Tem certeza que deseja eliminar esta questão?");

    if (isConfirmed) {
        const updatedFormData = storedFormData.filter((_question, index) => index !== questionId - 1);
        localStorage.setItem('questions', JSON.stringify(updatedFormData));

        const questionTable = document.getElementById('questionTable');
        questionTable.deleteRow(questionId);
        refreshTable();
    }
}

function hideModal() {
    const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
    closeModal.hide();
}

function refreshTable() {
    const questionTable = document.getElementById('questionTable');
    for (let i = questionId; i < questionTable.rows.length; i++) {
        questionTable.rows[i].cells[0].textContent = i;
    }
}



addQuestion.addEventListener('click', () => {
        const addQuestionModal = new bootstrap.Modal(document.getElementById('addQuestionModal'));
        addQuestionModal.show();
    });

    addQuestionModal.addEventListener('click', addQuestions);

    displayQuestions();