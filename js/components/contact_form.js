document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    // Obter os valores dos campos do formulário
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Criar um objeto com os dados do formulário
    let formData = {
        name: name,
        email: email,
        message: message
    };

    // Obter os dados existentes da LocalStorage ou inicializar um array vazio
    let formsData = JSON.parse(localStorage.getItem("forms")) || [];

    // Adicionar os novos dados do formulário ao array
    formsData.push(formData);

    // Salvar o array atualizado na LocalStorage
    localStorage.setItem("forms", JSON.stringify(formsData));

    // Limpar os campos do formulário após o envio
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
