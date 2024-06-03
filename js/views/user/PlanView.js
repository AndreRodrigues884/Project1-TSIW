
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



//UCS SEGUNDO ANO
const ucs = [
    { nome: "Bases de Dados", periodo: "1º Semestre" },
    { nome: "Computação Gráfica", periodo: "1º Semestre" },
    { nome: "Engenharia de Software", periodo: "1º Semestre" },
    { nome: "Ergonomia Cognitiva e Design de Interação", periodo: "1º Semestre" },
    { nome: "Programação Web I", periodo: "1º Semestre" },
    { nome: "Inteligência Artificial", periodo: "2º Semestre" },
    { nome: "Programação Web II", periodo: "2º Semestre" },
    { nome: "Projeto II", periodo: "2º Semestre" },
    { nome: "Testes e Performance Web", periodo: "2º Semestre" }
];

    const ucBodysecond = document.getElementById("ucBodysecond");

    ucs.forEach(uc => {
        const row = document.createElement("tr");

        const cellNome = document.createElement("td");
        cellNome.className = "sec-text-color";
        cellNome.textContent = uc.nome;
        row.appendChild(cellNome);

        const cellPeriodo = document.createElement("td");
        cellPeriodo.className = "sec-text-color";
        cellPeriodo.textContent = uc.periodo;
        row.appendChild(cellPeriodo);

        ucBodysecond.appendChild(row);
    });

    //FIM UCS SEGUNDO ANO


//UCS TERCEIRO ANO
    const lastUcs = [
        { nome: "Computação Móvel e Ubíqua", periodo: "1º Semestre" },
        { nome: "Inovação e Empreendedorismo", periodo: "1º Semestre" },
        { nome: "Engenharia de Software", periodo: "1º Semestre" },
        { nome: "Negócio Eletrónico e Segurança", periodo: "1º Semestre" },
        { nome: "Prototipagem Avançada em Plataformas Digitais", periodo: "1º Semestre" },
        { nome: "Serviços e Interfaces para a Cloud", periodo: "1º Semestre" },
        { nome: "Marketing Digital", periodo: "2º Semestre" },
        { nome: "Projeto Final/Estágio", periodo: "2º Semestre" },
        { nome: "Usabilidade e User Experience", periodo: "2º Semestre" }
    ];
    
        const ucBodythird = document.getElementById("ucBodythird");
    
        lastUcs.forEach(uc => {
            const row = document.createElement("tr");
    
            const cellNome = document.createElement("td");
            cellNome.className = "sec-text-color";
            cellNome.textContent = uc.nome;
            row.appendChild(cellNome);
    
            const cellPeriodo = document.createElement("td");
            cellPeriodo.className = "sec-text-color";
            cellPeriodo.textContent = uc.periodo;
            row.appendChild(cellPeriodo);
    
            ucBodythird.appendChild(row);
        });


