const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
const projectsContainer = document.getElementById('projectsContainer');

storedProjects.forEach(project => {
    const projectHTML = `
   <a href="/html/user/ProjectDetailView.html?id=${project.id}">
        <div class="card card-custom mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${project.img}" alt="Imagem" class="w-100 p-4">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    <a/>              
    `;
    projectsContainer.innerHTML += projectHTML;
});
