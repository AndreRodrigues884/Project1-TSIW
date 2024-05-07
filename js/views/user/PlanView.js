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


/* let courses = [
    { uc: "Algoritmia e Estruturas de Dados", period: "1º Semestre" },
    { uc: "Fundamentos de Design", period: "1º Semestre" },
    { uc: "Matemática I", period: "1º Semestre" },
    { uc: "Sistemas Computacionais", period: "2º Semestre" },
    { uc: "Tecnologias Web", period: "1º Semestre" },
    { uc: "Conceção e Produção Multimédia", period: "2º Semestre" },
    { uc: "Interfaces e Design para Aplicações", period: "2º Semestre" },
    { uc: "Matemática II", period: "2º Semestre" },
    { uc: "Programação Orientada a Objetos", period: "2º Semestre" },
    { uc: "Projeto 1", period: "2º Semestre" }
];

// Salvar dados na localStorage
localStorage.setItem("courses", JSON.stringify(courses)); */