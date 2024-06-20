
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'), 10);
const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
const project = storedProjects.find(project => project.id === projectId);

if (project) {
    const projectDetailContainer = document.getElementById('projectDetailContainer');
    const projectDetailHTML = `
 <div class="row event-card">
        <div class="col-md-8">
            <h1 class="event-title">${project.title}</h1>
            <p class="event-description">
                ${project.text}
            </p>
             <p class="event-description">
                ${project.date}
            </p>
        </div>
        <div class="col-md-4 d-flex align-items-center">
            <img src="${project.img}" alt="Plug-in Image" class="img-fluid">
        </div>
    </div>
    `;
    projectDetailContainer.innerHTML = projectDetailHTML;
} else {
    projectDetailContainer.innerHTML = '<p>Projeto não encontrado.</p>';
}
