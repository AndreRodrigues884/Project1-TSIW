const storedFormData = JSON.parse(localStorage.getItem('forms')) || [];
const formTable = document.getElementById('formTable');


function displayForms() {

    storedFormData.forEach((form, index) => {
        const row = formTable.insertRow(-1);

        const cellName = row.insertCell(0);
        cellName.textContent = form.name;

        const cellEmail = row.insertCell(1);
        cellEmail.textContent = form.email;

        const cellMessage = row.insertCell(2);
        cellMessage.textContent = form.message;

        const cellDelete = row.insertCell(3);
        const deleteButton = document.createElement('h6');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', () => deleteForm(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

function refreshTable() {
    for (let i = formID; i < formTable.rows.length; i++) {
        formTable.rows[i].cells[0].textContent = i;
    }
}

function deleteForm(formID) {
    const isConfirmed = confirm("Tem certeza que deseja eliminar este formulário?");

    if (isConfirmed) {
        const updatedFormData = storedFormData.filter((_form, index) => index !== formID - 1);
        localStorage.setItem('forms', JSON.stringify(updatedFormData));

        formTable.deleteRow(formID);
        refreshTable();
    }
}

displayForms();