const projectTable = document.getElementById('projectTable');
const storedFormData = JSON.parse(localStorage.getItem('projects')) || [];
const addButton = document.getElementById('addProject');
const addProjectButton = document.getElementById('addProjectButton');
    
    function displayEvents() {
        storedFormData.forEach((project, index) => {
            const row = projectTable.insertRow(-1);

            const cellId = row.insertCell(0);
            cellId.textContent = index + 1;

            const cellImg = row.insertCell(1);
            const imgElement = document.createElement('img');
            imgElement.src = project.img;
            imgElement.classList.add('img-fluid', 'img-thumbnail');
            imgElement.style.width = '200px';
            imgElement.style.height = '200px';
            cellImg.appendChild(imgElement);

            const cellTitle = row.insertCell(2);
            cellTitle.textContent = project.title;

            const cellText = row.insertCell(3);
            if (project.text.split(' ').length > 10) {
                const shortenedText = project.text.split(' ').slice(0, 10).join(' ') + '...';
                cellText.textContent = shortenedText;
            } else {
                cellText.textContent = project.text;
            }

            const cellDate = row.insertCell(4);
            cellDate.textContent = project.date;

            const cellEdit = row.insertCell(5);
            const detailsButton = document.createElement('h6');
            detailsButton.textContent = 'Editar';
            detailsButton.classList.add('blue');
            detailsButton.addEventListener('click', () => showDetails(index + 1));
            cellEdit.appendChild(detailsButton);

            const cellDelete = row.insertCell(6);
            const deleteButton = document.createElement('h6');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('red');
            deleteButton.addEventListener('click', () => deleteProject(index + 1));
            cellDelete.appendChild(deleteButton);
        });
    }

    function addProject() {
        const imgInputValue = document.getElementById('imgInput');
        const imgFile = imgInputValue.files[0];
        const titleInputValue = document.getElementById('titleInput').value;
        const textInputValue = document.getElementById('textInput').value;
        const dateInputValue = document.getElementById('dateInput').value;

        if (imgInputValue && titleInputValue && textInputValue) {
            const reader = new FileReader();
            reader.onload = function (project) {
                const imgBase64 = project.target.result;

                
                const newProject = {
                    id: storedFormData.length + 1,
                    img: imgBase64,
                    title: titleInputValue,
                    text: textInputValue,
                    date: dateInputValue
                };

                storedFormData.push(newProject);

                localStorage.setItem('projects', JSON.stringify(storedFormData));
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

    function showDetails(projectId) {
        const project = storedFormData[projectId - 1];

        if (project) {
            document.getElementById('modalId').textContent = 'Detalhes da UC ' + projectId;
            document.getElementById('titleProjectInput').value = project.title;
            document.getElementById('descriptionProjectInput').value = project.text;
            document.getElementById('dateProjectInput').value = project.date;

            const eventsDetailsModal = new bootstrap.Modal(document.getElementById('eventsDetailsModal'));
            eventsDetailsModal.show();

            document.getElementById('confirmEditButton').addEventListener('click', () => {
                project.title = document.getElementById('titleProjectInput').value;
                project.text = document.getElementById('descriptionProjectInput').value;
                project.date = document.getElementById('dateProjectInput').value;
                storedFormData[projectId - 1] = project;
                localStorage.setItem('projects', JSON.stringify(storedFormData));
                hideModal();
                location.reload();
            });
        } else {
            console.log('Projeto não encontrado');
        }
    }



    function hideModal() {
        const closeModal = new bootstrap.Modal(document.getElementById('closeModal'));
        closeModal.hide();
    }

    function deleteProject(projectId) {
        const isConfirmed = confirm("Tem certeza que deseja eliminar este Projeto?");

        if (isConfirmed) {
            const updatedFormData = storedFormData.filter((_project, index) => index !== projectId - 1);
            localStorage.setItem('projects', JSON.stringify(updatedFormData));

            projectTable.deleteRow(projectId);
            refreshTable();
        }
    }

    function refreshTable() {
        for (let i = projectId; i < projectTable.rows.length; i++) {
            projectTable.rows[i].cells[0].textContent = i;
        }
    }

    displayEvents();

    addButton.addEventListener('click', () => {
        const addProjectModal = new bootstrap.Modal(document.getElementById('addProjectModal'));
        addProjectModal.show();
    });

    addProjectButton.addEventListener('click', addProject);

