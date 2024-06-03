document.addEventListener('DOMContentLoaded', function () {
    const storedEvents = JSON.parse(localStorage.getItem('event')) || [];
    const eventsContainer = document.getElementById('eventsContainer');

    storedEvents.forEach(event => {
        const eventHTML = `
        <div class="col-3 d-flex justify-content-center image-wrapper"> 
            <a href="/html/user/EventDetailView.html?id=${event.id}">
                <img src="${event.img}" alt="Imagem" class="w-100 p-4">
            </a>
        </div>
                           
        `;
        eventsContainer.innerHTML += eventHTML;
    });
});