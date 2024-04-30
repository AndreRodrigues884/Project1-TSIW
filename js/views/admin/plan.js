const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];

function displayUCs() {
    const ucTable = document.getElementById('ucTable');

    storedFormData.forEach((uc, index) => {
        const row = ucTable.insertRow(-1);

        // Coluna de UC
        const cellUc = row.insertCell(0);
        cellUc.textContent = uc.uc;

        // Coluna de Period
        const cellPeriod = row.insertCell(1);
        cellPeriod.textContent = uc.period;

        // Coluna de Editar
        const cellEdit = row.insertCell(2);
        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Editar';
        detailsButton.classList.add('btn', 'btn-primary');
        detailsButton.addEventListener('click', () => showDetails(index + 1));
        cellEdit.appendChild(detailsButton);

        // Coluna de Eliminar
        const cellDelete = row.insertCell(3);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', () => deleteUC(index + 1));
        cellDelete.appendChild(deleteButton);
    });
}

let modal = document.getElementById('ucDetailsModal')
let closeModal = document.getElementById('closeModal');

function showDetails(ucId) {
    const uc = storedFormData[ucId - 1];

    if (uc) {
        document.getElementById('modalId').textContent = 'Detalhes da UC ' + ucId;
        document.getElementById('modalUCInput').value = uc.uc;
        document.getElementById('modalPeriodInput').value = uc.period;

        const ucDetailsModal = new bootstrap.Modal(document.getElementById('ucDetailsModal'));
        ucDetailsModal.show();

        // Adiciona evento ao botão de confirmar
        document.getElementById('confirmEditButton').addEventListener('click', () => {
            // Salva as alterações
            uc.uc = document.getElementById('modalUCInput').value;
            uc.period = document.getElementById('modalPeriodInput').value;
            // Atualiza os dados na localStorage
            storedFormData[ucId - 1] = uc;
            localStorage.setItem('courses', JSON.stringify(storedFormData));
            // Fecha a modal
            ucDetailsModal.hide();
            location.reload();
        });
    } else {
        console.log('UC não encontrada');
    }

}

function hideModal() {
    const ucDetailsModal = new bootstrap.Modal(document.getElementById('ucDetailsModal'));
    ucDetailsModal.hide();
}

closeModal.addEventListener('click', hideModal);



function deleteUC(ucId) {
    const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];

    // Remove o usuário da lista de formulários armazenados
    const updatedFormData = storedFormData.filter((_uc, index) => index !== ucId - 1);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));

    // Remove a linha correspondente da tabela
    const ucTable = document.getElementById('ucTable');
    ucTable.deleteRow(ucId);

    // Atualiza os índices das linhas restantes
    for (let i = ucId; i < ucTable.rows.length; i++) {
        ucTable.rows[i].cells[0].textContent = i;
    }
}

displayUCs();