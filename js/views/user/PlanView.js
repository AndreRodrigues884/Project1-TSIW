
function loadData() {
    let data = JSON.parse(localStorage.getItem('courses')) || [];
    let tableBody = document.getElementById("ucBody");
    tableBody.innerHTML = '';
    data.forEach(function (item) {
        let newRow = tableBody.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.classList.add("sec-text-color");
        cell2.classList.add("sec-text-color");
        cell1.appendChild(document.createTextNode(item.uc));
        cell2.appendChild(document.createTextNode(item.period));
    });
}

loadData();
