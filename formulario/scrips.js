
document.addEventListener("DOMContentLoaded", function(){
    
  const formulario = document.getElementById("cadastro-form");
  formulario.addEventListener("submit", function (envet){

    resetarMensagensDeErro()
    
     if (!validarIdade())
     envet.preventDefault();
     alert("Você deve ter pelo menos 18 anos")

  
      if (!validarCamposObrigatorios()){
          envet.preventDefault(); // impede a submissão do formulário se houver erro!
          
          if(! validarCPF())
          envet.preventDefault();
          alert("CPF inválido")
      }
      if (!compararValores()){
          envet.preventDefault();
          alert("Este campo é obrigatório")
      }
  });
function validarCamposObrigatorios () {
          //selecionando todas o elementos obrigatorio atravez do querySelectorAll
          let camposObrigatorios = document.querySelectorAll(".obrigatorio")
         
          let camposValidos = true;
        
       for( let i = 0; camposObrigatorios.length > i; i++){
          let campo = camposObrigatorios [i]
          // verificando os valores se esta  vazio ou nulo
          if (campo.value === "" || campo.value === null){
              exiberiErro(campo, "Este campo é obrigatório");
      
              camposValidos = false;
          }

       }
       return camposValidos;
      }
      function compararValores(){
          const senha = document.getElementById("senha");
          const confirmarSenha = document.getElementById("confirmarSenha");
          if (senha.value !== confirmarSenha.value){
              exiberiErro(confirmarSenha,"As senhas não coincidem.");
              return false
          }
          return true;
      }

function exiberiErro(elemento, mensagem){
  //selecionado o elemento pelo pai 
  let mensagemErro = elemento.parentElement.querySelector(".error-message");
  mensagemErro.textContent = mensagem;
  mensagemErro.style.display = "inline-block";///exibir a mesagem de error 

}
function resetarMensagensDeErro(){

  let mensagemErro =document.querySelectorAll(".error-message")
  for(let i = 0; i < mensagemErro.length; i ++){
      mensagemErro[i].textContent = "";
  }
}

});

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos
  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  return (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2);
}

document.getElementById('cpf').addEventListener('input', function() {
  const cpfInput = this.value;
  const cpfError = document.getElementById('cpf-error');
  
  if (validarCPF(cpfInput)) {
    cpfError.textContent = '';
  } else {
    cpfError.textContent = 'CPF inválido';
  }
});

function validarIdade() {
  const dataNascimento = new Date(document.getElementById('data_nascimento').value);
  const hoje = new Date();
  const idadeMinima = 18;
  const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = dataNascimento.getMonth();
  const diaAtual = hoje.getDate();
  const diaNascimento = dataNascimento.getDate();

  if (diferencaAnos < idadeMinima ||
      (diferencaAnos === idadeMinima && (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)))) {
    return false; // Menor que 18 anos
  }

  return true; // Maior ou igual a 18 anos
}

document.getElementById('data_nascimento').addEventListener('change', function() {
  const idadeError = document.getElementById('idade-error');
  
  if (!validarIdade()) {
    idadeError.textContent = 'Você deve ter pelo menos 18 anos';
    this.setCustomValidity('Você deve ter pelo menos 18 anos');
  } else {
    idadeError.textContent = '';
    this.setCustomValidity('');
  }
});


const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
const forme = document.getElementById("cadastro-form")
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
function enviarMensagem() {
  alert("Dados enviados!");
}