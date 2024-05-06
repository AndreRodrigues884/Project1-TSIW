document.addEventListener('DOMContentLoaded', function () {
    function displayUCs() {
        const ucTable = document.getElementById('ucTable');
        const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];
        storedFormData.forEach((uc, index) => {
            const row = ucTable.insertRow(-1);

            const cellUc = row.insertCell(0);
            cellUc.textContent = uc.uc;

            const cellPeriod = row.insertCell(1);
            cellPeriod.textContent = uc.period;

            const cellEdit = row.insertCell(2);
            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Editar';
            detailsButton.classList.add('btn', 'btn-primary');
            detailsButton.addEventListener('click', () => showDetails(index + 1));
            cellEdit.appendChild(detailsButton);

            const cellDelete = row.insertCell(3);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('btn', 'btn-danger');
            deleteButton.addEventListener('click', () => deleteUC(index + 1));
            cellDelete.appendChild(deleteButton);
        });
    }

    function showDetails(ucId) {
        const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];
        const uc = storedFormData[ucId - 1];

        if (uc) {
            document.getElementById('modalId').textContent = 'Detalhes da UC ' + ucId;
            document.getElementById('modalUCInput').value = uc.uc;
            document.getElementById('modalPeriodInput').value = uc.period;

            const ucDetailsModal = new bootstrap.Modal(document.getElementById('ucDetailsModal'));
            ucDetailsModal.show();

            document.getElementById('confirmEditButton').addEventListener('click', () => {
                uc.uc = document.getElementById('modalUCInput').value;
                uc.period = document.getElementById('modalPeriodInput').value;
                storedFormData[ucId - 1] = uc;
                localStorage.setItem('courses', JSON.stringify(storedFormData));
                hideModal();
                location.reload();
            });
        } else {
            console.log('UC não encontrada');
        }
    }

    function addUC() {
        const ucInputValue = document.getElementById('ucInput').value;
        const periodInputValue = document.getElementById('periodInput').value;

        if (ucInputValue && periodInputValue) {
            const newUC = {
                uc: ucInputValue,
                period: periodInputValue
            };

            const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];

            storedFormData.push(newUC);

            localStorage.setItem('courses', JSON.stringify(storedFormData));
            location.reload();
            editTable();

            document.getElementById('ucInput').value = '';
            document.getElementById('periodInput').value = '';

            hideModal();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }

    function hideModal() {
        const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
        closeModal.hide();
    }

    function deleteUC(ucId) {
        const storedFormData = JSON.parse(localStorage.getItem('courses')) || [];

        const updatedFormData = storedFormData.filter((_uc, index) => index !== ucId - 1);
        localStorage.setItem('courses', JSON.stringify(updatedFormData));

        const ucTable = document.getElementById('ucTable');
        ucTable.deleteRow(ucId);
        location.reload();
        editTable();
    }

    function editTable() {
        const ucTable = document.getElementById('ucTable');
        for (let i = 1; i < ucTable.rows.length; i++) {
            ucTable.rows[i].cells[0].textContent = i;
        }
    }

    displayUCs();

    const addButton = document.getElementById('addUC');
    const addUCButton = document.getElementById('addUCButton');

    addButton.addEventListener('click', () => {
        const addUCModal = new bootstrap.Modal(document.getElementById('addUCModal'));
        addUCModal.show();
    });

    addUCButton.addEventListener('click', addUC);
});
