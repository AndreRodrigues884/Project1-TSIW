document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'), 10);
    const storedEvents = JSON.parse(localStorage.getItem('event')) || [];
    const event = storedEvents.find(event => event.id === eventId);

    if (event) {
        const eventDetailContainer = document.getElementById('eventDetailContainer');
        const eventDetailHTML = `
        <div class="event-item mb-5">
        <table class="table">
            <tr>
                <td>
                    <img src="${event.img}" alt="Imagem" width="150">
                </td>
                <td>
                    <h3>${event.title}</h3>
                    <p>${event.text}</p>
                </td>
            </tr>
        </table>
        </div>
        `;
        eventDetailContainer.innerHTML = eventDetailHTML;
    } else {
        eventDetailContainer.innerHTML = '<p>Evento não encontrado.</p>';
    }
});
