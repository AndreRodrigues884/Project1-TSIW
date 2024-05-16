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
        const deleteButton = document.createElement('h6');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', () => deleteForm(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

function refreshTable() {
    const formTable = document.getElementById('formTable');
    for (let i = formID; i < formTable.rows.length; i++) {
        formTable.rows[i].cells[0].textContent = i;
    }
}

function deleteForm(formID) {
    const storedFormData = JSON.parse(localStorage.getItem('forms')) || [];

    const isConfirmed = confirm("Tem certeza que deseja eliminar este formulário?");

    if (isConfirmed) {
        const updatedFormData = storedFormData.filter((_form, index) => index !== formID - 1);
        localStorage.setItem('forms', JSON.stringify(updatedFormData));

        const formTable = document.getElementById('formTable');
        formTable.deleteRow(formID);
        refreshTable();
    }
}

displayForms();