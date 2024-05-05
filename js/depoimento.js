function enviarMensagem() {
  // Captura o valor do campo de entrada de texto
  const mensagem = document.querySelector('.Input').value;
  
  // Verifica se o campo de mensagem está vazio
  if (!mensagem.trim()) {
    alert("Erro: Não existe mensagem a ser enviada.");
    return;
  }
  
  // Verifica se a caixa de seleção está marcada
  if (!document.getElementById("checkbox").checked) {
    alert("Erro: Por favor, concorde em exibir sua mensagem.");
    return;
  }

  // Limpa o campo de entrada de texto
  document.querySelector('.Input').value = '';

  // Se passar pelas verificações, exibe a mensagem de sucesso
  alert("Mensagem enviada!");
}