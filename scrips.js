/* Passo 1- Selecionar elementos HTML:
Acesse os elementos HTML com os quais você deseja interagir no JavaScript. Neste caso, são o campo de entrada (taskInput), a lista de tarefas (taskList). */

const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    //Adiciona um botão para remover a tarefa
    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor, insira uma tarefa.");
  }
}






