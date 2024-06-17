const ucTable = document.getElementById('ucTable');
const storedFormData = JSON.parse(localStorage.getItem('alumni')) || [];
const addButton = document.getElementById('addAlumni');
const addAlumniButton = document.getElementById('addAlumniButton');
    
    function displayAlumni() {
        storedFormData.forEach((alumni, index) => {
            const row = ucTable.insertRow(-1);

            const cellImg = row.insertCell(0);
            const imgElement = document.createElement('img');
            imgElement.src = alumni.img;
            imgElement.classList.add('img-fluid', 'rounded-circle', 'img-thumbnail');
            imgElement.style.width = '200px';
            imgElement.style.height = '200px';
            cellImg.appendChild(imgElement);

            const cellTitle = row.insertCell(1);
            cellTitle.textContent = alumni.title;

            const cellText = row.insertCell(2);
            if (alumni.text.split(' ').length > 10) {
                const shortenedText = alumni.text.split(' ').slice(0, 10).join(' ') + '...';
                cellText.textContent = shortenedText;
            } else {
                cellText.textContent = alumni.text;
            }

            const cellDate = row.insertCell(3);
            cellDate.textContent = alumni.date;

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
            deleteButton.addEventListener('click', () => deleteAlumni(index + 1));
            cellDelete.appendChild(deleteButton);
        });
    }

    function addAlumni() {
        const imgInputValue = document.getElementById('imgInput');
        const imgFile = imgInputValue.files[0];
        const titleInputValue = document.getElementById('titleInput').value;
        const textInputValue = document.getElementById('textInput').value;
        const dateInputValue = document.getElementById('dateInput').value;

        if (imgInputValue && titleInputValue && textInputValue && dateInputValue) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgBase64 = event.target.result;

                const newAlumni = {
                    img: imgBase64,
                    title: titleInputValue,
                    text: textInputValue,
                    date: dateInputValue
                };

                storedFormData.push(newAlumni);

                localStorage.setItem('alumni', JSON.stringify(storedFormData));
                location.reload();
                editTable();

                imgInputValue.value = '';
                document.getElementById('titleInput').value = '';
                document.getElementById('textInput').value = '';
                document.getElementById('dateInput').value = '';

                hideModal();
            };
            reader.readAsDataURL(imgFile);
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }

    function showDetails(alumniId) {
        const alumni = storedFormData[alumniId - 1];

        if (alumni) {
            document.getElementById('modalId').textContent = 'Detalhes do Testemunho ' + alumniId;
            document.getElementById('titleAlumniInput').value = alumni.title;
            document.getElementById('textAlumniInput').value = alumni.text;
            document.getElementById('dateAlumniInput').value = alumni.date;

            const alumniDetailsModal = new bootstrap.Modal(document.getElementById('alumniDetailsModal'));
            alumniDetailsModal.show();

            document.getElementById('confirmEditButton').addEventListener('click', () => {
                alumni.title = document.getElementById('titleAlumniInput').value;
                alumni.text = document.getElementById('textAlumniInput').value;
                alumni.date = document.getElementById('dateAlumniInput').value;
                storedFormData[alumniId - 1] = alumni;
                localStorage.setItem('alumni', JSON.stringify(storedFormData));
                hideModal();
                location.reload();
            });
        } else {
            console.log('Testemunho não encontrado');
        }
    }

    function hideModal() {
        const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
        closeModal.hide();
    }

    function deleteAlumni(alumniId) {
        const isConfirmed = confirm("Tem certeza que deseja eliminar este Testemunho?");

        if (isConfirmed) {
            const updatedFormData = storedFormData.filter((_alumni, index) => index !== alumniId - 1);
            localStorage.setItem('alumni', JSON.stringify(updatedFormData));
 
            ucTable.deleteRow(alumniId);
            refreshTable();
        }


    }

    function refreshTable() {
        for (let i = alumniId; i < ucTable.rows.length; i++) {
            ucTable.rows[i].cells[0].textContent = i;
        }
    }

    displayAlumni();

    addButton.addEventListener('click', () => {
        const addAlumniModal = new bootstrap.Modal(document.getElementById('addAlumniModal'));
        addAlumniModal.show();
    });

    addAlumniButton.addEventListener('click', addAlumni);
