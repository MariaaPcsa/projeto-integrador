const input = document.getElementById("taskInput");
const checkbox = document.getElementById("checkbox");
const ul = document.getElementById("taskList");
const forme = document.getElementById("cadastro-form");

function addTask() {
  if (input.value !== "" && checkbox.checked) {
    const li = document.createElement("li");
    li.textContent = input.value;

    // Adiciona um botão para remover a tarefa
    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else if (input.value == "" && checkbox.checked) {
    alert("Por favor, insira uma tarefa.");
  } else if (!checkbox.checked) {
    alert("Para enviar um comentário é necessário aceitar que a mensagem seja exibida.");
  }
}

function enviarMensagem() {
  alert("Dados enviados!");
}
