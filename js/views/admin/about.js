document.addEventListener('DOMContentLoaded', function () {

    function displaySection() {
        const sectionTable = document.getElementById('sectionTable');
        const storedFormData = JSON.parse(localStorage.getItem('firstSection')) || [];
        storedFormData.forEach((section, index) => {
            const row = sectionTable.insertRow(-1);

            const cellTitle = row.insertCell(0);
            cellTitle.textContent = section.title;

            const cellText = row.insertCell(1);
            if (section.text.split(' ').length > 10) {
                const shortenedText = section.text.split(' ').slice(0, 10).join(' ') + '...';
                cellText.textContent = shortenedText;
            } else {
                cellText.textContent = section.text;
            }


            const cellImg = row.insertCell(2);
            const imgElement = document.createElement('img');
            imgElement.src = section.img;
            imgElement.style.width = '200px';
            imgElement.style.height = '200px';
            cellImg.appendChild(imgElement);


            const cellEdit = row.insertCell(3);
            const detailsButton = document.createElement('h6');
            detailsButton.textContent = 'Editar';
            detailsButton.classList.add('blue');
            detailsButton.addEventListener('click', () => showDetails(index + 1));
            cellEdit.appendChild(detailsButton);

            const cellDelete = row.insertCell(4);
            const deleteButton = document.createElement('h6');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('red');
            deleteButton.addEventListener('click', () => deleteSection(index + 1));
            cellDelete.appendChild(deleteButton);
        });
    }

    function showDetails(sectionId) {
        const storedFormData = JSON.parse(localStorage.getItem('firstSection')) || [];
        const section = storedFormData[sectionId - 1];

        if (section) {
            document.getElementById('modalId').textContent = 'Detalhes da Secção ' + sectionId;
            document.getElementById('modalTileInput').value = section.title;
            document.getElementById('modalTextInput').value = section.text;
            document.getElementById('modalImg').value = section.img;

            const newImageUrl = section.img;
            const modalImgElement = document.getElementById('modalImg');
            modalImgElement.src = newImageUrl;

            const sectionDetailsModal = new bootstrap.Modal(document.getElementById('sectionDetailsModal'));
            sectionDetailsModal.show();

            document.getElementById('confirmEditButton').addEventListener('click', () => {
                section.title = document.getElementById('modalTileInput').value;
                section.text = document.getElementById('modalTextInput').value;
                section.img = document.getElementById('modalImg').value;
                storedFormData[sectionId - 1] = section;
                localStorage.setItem('firstSection', JSON.stringify(storedFormData));
                hideModal();
                location.reload();
            });
        } else {
            console.log('Secção não encontrada');
        }
    }

    function addSection() {
        const imgInputValue = document.getElementById('imgInput');
        const imgFile = imgInputValue.files[0];
        const titleInputValue = document.getElementById('titleInput').value;
        const textInputValue = document.getElementById('textInput').value;

        if (imgInputValue && titleInputValue && textInputValue) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgBase64 = event.target.result;

                const newSection = {
                    img: imgBase64,
                    title: titleInputValue,
                    text: textInputValue,
                };

                const storedFormData = JSON.parse(localStorage.getItem('firstSection')) || [];

                storedFormData.push(newSection);

                localStorage.setItem('firstSection', JSON.stringify(storedFormData));
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



    function hideModal() {
        const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
        closeModal.hide();
    }

    function deleteSection(sectionId) {
        const storedFormData = JSON.parse(localStorage.getItem('firstSection')) || [];

        const updatedFormData = storedFormData.filter((_section, index) => index !== sectionId - 1);
        localStorage.setItem('firstSection', JSON.stringify(updatedFormData));

        const sectionTable = document.getElementById('sectionTable');
        sectionTable.deleteRow(sectionId);
        location.reload();
        editTable();
    }

    function editTable() {
        const sectionTable = document.getElementById('sectionTable');
        for (let i = 1; i < sectionTable.rows.length; i++) {
            sectionTable.rows[i].cells[0].textContent = i;
        }
    }

    displaySection();

    const addButton = document.getElementById('addSection');
    const addSectionButton = document.getElementById('addSectionButton');

    addButton.addEventListener('click', () => {
        const addSectionModal = new bootstrap.Modal(document.getElementById('addSectionModal'));
        addSectionModal.show();
    });

    addSectionButton.addEventListener('click', addSection);


});
