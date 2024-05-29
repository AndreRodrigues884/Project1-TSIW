document.addEventListener('DOMContentLoaded', function () {
    const storedEvents = JSON.parse(localStorage.getItem('event')) || [];
    const eventsContainer = document.getElementById('eventsContainer');

    storedEvents.forEach(event => {
        const eventHTML = `
        <div> 
            <a href="/html/user/EventDetailView.html?id=${event.id}">
                <img src="${event.img}" alt="Imagem" width="150">
            </a>
        </div>
                           
        `;
        eventsContainer.innerHTML += eventHTML;
    });
});