
document.addEventListener("DOMContentLoaded", function(){
    
  const formulario = document.getElementById("cadastro-form");
  formulario.addEventListener("submit", function (envet){

    resetarMensagensDeErro()
  
    
     if (!validarIdade())
     envet.preventDefault();
   alert("Validar campos, ser todos dos campos estiverem validos, o formulario será enviado")

  
      if (!validarCamposObrigatorios()){
          envet.preventDefault(); 
      }
      if (!compararValores()){
          envet.preventDefault();
          alert("Este campo é obrigatório")

         
      }
      
  });
function validarCamposObrigatorios () {
          let camposObrigatorios = document.querySelectorAll(".obrigatorio")
         
          let camposValidos = true;
        
       for( let i = 0; camposObrigatorios.length > i; i++){
          let campo = camposObrigatorios [i]
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
  let mensagemErro = elemento.parentElement.querySelector(".error-message");
  mensagemErro.textContent = mensagem;
  mensagemErro.style.display = "inline-block";

}
function resetarMensagensDeErro(){

  let mensagemErro =document.querySelectorAll(".error-message")
  for(let i = 0; i < mensagemErro.length; i ++){
      mensagemErro[i].textContent = "";
  }
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




