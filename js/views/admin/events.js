const eventTable = document.getElementById('eventTable');
const storedFormData = JSON.parse(localStorage.getItem('event')) || [];
const addButton = document.getElementById('addEvent');
const addEventButton = document.getElementById('addEventButton');
    
    function displayEvents() {
        storedFormData.forEach((event, index) => {
            const row = eventTable.insertRow(-1);

            const cellId = row.insertCell(0);
            cellId.textContent = index + 1;

            const cellImg = row.insertCell(1);
            const imgElement = document.createElement('img');
            imgElement.src = event.img;
            imgElement.classList.add('img-fluid', 'img-thumbnail');
            imgElement.style.width = '200px';
            imgElement.style.height = '200px';
            cellImg.appendChild(imgElement);

            const cellTitle = row.insertCell(2);
            cellTitle.textContent = event.title;

            const cellText = row.insertCell(3);
            if (event.text.split(' ').length > 10) {
                const shortenedText = event.text.split(' ').slice(0, 10).join(' ') + '...';
                cellText.textContent = shortenedText;
            } else {
                cellText.textContent = event.text;
            }

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

    function addEvent() {
        const imgInputValue = document.getElementById('imgInput');
        const imgFile = imgInputValue.files[0];
        const titleInputValue = document.getElementById('titleInput').value;
        const textInputValue = document.getElementById('textInput').value;

        if (imgInputValue && titleInputValue && textInputValue) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgBase64 = event.target.result;

                
                const newEvent = {
                    id: storedFormData.length + 1,
                    img: imgBase64,
                    title: titleInputValue,
                    text: textInputValue,
                };

                storedFormData.push(newEvent);

                localStorage.setItem('event', JSON.stringify(storedFormData));
                location.reload();
                editTable();

                imgInputValue.value = '';
                document.getElementById('titleInput').value = '';
                document.getElementById('textInput').value = '';

                hideModal();
            };
            reader.readAsDataURL(imgFile);
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }

    function showDetails(eventId) {
        const event = storedFormData[eventId - 1];

        if (event) {
            document.getElementById('modalId').textContent = 'Detalhes da UC ' + eventId;
            document.getElementById('titleEventInput').value = event.title;
            document.getElementById('descriptionEventInput').value = event.text;

            const eventsDetailsModal = new bootstrap.Modal(document.getElementById('eventsDetailsModal'));
            eventsDetailsModal.show();

            document.getElementById('confirmEditButton').addEventListener('click', () => {
                event.title = document.getElementById('titleEventInput').value;
                event.text = document.getElementById('descriptionEventInput').value;
                storedFormData[eventId - 1] = event;
                localStorage.setItem('event', JSON.stringify(storedFormData));
                hideModal();
                location.reload();
            });
        } else {
            console.log('Evento não encontrado');
        }
    }



    function hideModal() {
        const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
        closeModal.hide();
    }

    function deleteAlumni(eventId) {
        const isConfirmed = confirm("Tem certeza que deseja eliminar este Testemunho?");

        if (isConfirmed) {
            const updatedFormData = storedFormData.filter((_event, index) => index !== eventId - 1);
            localStorage.setItem('event', JSON.stringify(updatedFormData));

            eventTable.deleteRow(eventId);
            refreshTable();
        }
    }

    function refreshTable() {
        for (let i = eventId; i < eventTable.rows.length; i++) {
            eventTable.rows[i].cells[0].textContent = i;
        }
    }

    displayEvents();

    addButton.addEventListener('click', () => {
        const addEventModal = new bootstrap.Modal(document.getElementById('addEventModal'));
        addEventModal.show();
    });

    addEventButton.addEventListener('click', addEvent);

