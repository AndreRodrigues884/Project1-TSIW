const storedFormData = JSON.parse(localStorage.getItem('forms')) || [];

function displayForms() {
    const formTable = document.getElementById('formTable');

    storedFormData.forEach((form, index) => {
        const row = formTable.insertRow(-1);

        // Coluna de ID
        const cellName = row.insertCell(0);
        cellName.textContent = form.name;

        // Coluna de E-mail
        const cellEmail = row.insertCell(1);
        cellEmail.textContent = form.email;

        // Coluna de E-mail
        const cellMessage = row.insertCell(2);
        cellMessage.textContent = form.message;

        // Coluna de Eliminar
        const cellDelete = row.insertCell(3);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', () => deleteForm(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

function editTable() {
    const formTable = document.getElementById('formTable');
    for (let i = 1; i < formTable.rows.length; i++) {
        formTable.rows[i].cells[0].textContent = i;
    }
}

function deleteForm(formID) {
    const storedFormData = JSON.parse(localStorage.getItem('forms')) || [];

    const updatedFormData = storedFormData.filter((_form, index) => index !== formID - 1);
    localStorage.setItem('forms', JSON.stringify(updatedFormData));

    const formTable = document.getElementById('formTable');
    formTable.deleteRow(formID);
    location.reload();
    editTable();
}

displayForms();