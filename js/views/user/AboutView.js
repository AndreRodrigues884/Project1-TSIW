document.addEventListener('DOMContentLoaded', function () {
    function loadFirstSection() {
        let data = JSON.parse(localStorage.getItem('firstSection')) || [];
        let firstSection = document.getElementById("firstSection");
        firstSection.innerHTML = '';
        data.forEach(function (section, index) {
            let sectionDiv = document.createElement("div");
            sectionDiv.innerHTML = `
            <div class="container p-4">
                <div class="row ${index % 2 === 0 ? 'flex-row-reverse' : ''}">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 class="card-title main-text-color">${section.title}</h2>
                            <h6 class="card-title sec-font sec-text-color mt-4">${section.text}</h6>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="${section.img}" class="card-img-top img-fluid p-4">
                    </div>
                </div>
            </div>

        `;
            firstSection.appendChild(sectionDiv);

        })
    }


    loadFirstSection();
});