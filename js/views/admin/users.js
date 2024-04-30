const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

function displayUsers() {
    const userTable = document.getElementById('userTable');

    storedFormData.forEach((user, index) => {
        const row = userTable.insertRow(-1);

        // Coluna de ID
        const cellId = row.insertCell(0);
        cellId.textContent = index + 1;

        // Coluna de E-mail
        const cellEmail = row.insertCell(1);
        cellEmail.textContent = user.email;

        // Coluna de Detalhes
        const cellDetails = row.insertCell(2);
        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Detalhes';
        detailsButton.classList.add('btn', 'btn-primary');
        detailsButton.addEventListener('click', () => showDetails(index + 1));
        cellDetails.appendChild(detailsButton);

        // Coluna de Eliminar
        const cellDelete = row.insertCell(3);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', () => deleteUser(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

let modal = document.getElementById('userDetailsModal')
let closeModal = document.getElementById('closeModal');

function showDetails(userId) {
    const user = storedFormData[userId - 1];

    if (user) {
        document.getElementById('modalId').textContent = 'Detalhes do Utilizador ' + userId;
        document.getElementById('modalUserName').textContent = 'Nome: ' + user.name;
        document.getElementById('modalUserEmail').textContent = 'Email: ' + user.email;
        document.getElementById('modalUserLocation').textContent = 'Localização: ' + user.location;
        document.getElementById('modalUserDob').textContent = 'Data De Nascimento: ' + user.dob;
        document.getElementById('modalUserSex').textContent = 'Gênero: ' + user.sex;
        const userDetailsModal = new bootstrap.Modal(document.getElementById('userDetailsModal'));
        userDetailsModal.show();
    } else {
        console.log('User não encontrado');
    }
 
}

function hideModal() {
    const userDetailsModal = new bootstrap.Modal(document.getElementById('userDetailsModal'));
    userDetailsModal.hide();
}

closeModal.addEventListener('click', hideModal);



function deleteUser(userId) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    
    // Remove o usuário da lista de formulários armazenados
    const updatedFormData = storedFormData.filter((_user, index) => index !== userId - 1);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    
    // Remove a linha correspondente da tabela
    const userTable = document.getElementById('userTable');
    userTable.deleteRow(userId);

    // Atualiza os índices das linhas restantes
    for (let i = userId; i < userTable.rows.length; i++) {
        userTable.rows[i].cells[0].textContent = i;
    }
}

displayUsers();