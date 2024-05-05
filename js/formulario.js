document.addEventListener("DOMContentLoaded", function(){
  const formulario = document.getElementById("cadastro-form");
  formulario.addEventListener("submit", function (event){
    event.preventDefault(); // Prevent form submission initially
    resetErrorMessages();
    
    if (!validateAge()) {
      alert("Você deve ter pelo menos 18 anos.");
      return; // Stop further validation if age is not valid
    }

    if (!validateRequiredFields()) {
      return; // Stop further validation if required fields are not filled
    }

    if (!comparePasswords()) {
      alert("As senhas não coincidem.");
      return; // Stop further validation if passwords don't match
    }

    // If all validations pass, submit the form
    this.submit();
  });

  function validateRequiredFields() {
    let requiredFields = document.querySelectorAll(".obrigatoria");
    let fieldsValid = true;
  
    for (let i = 0; i < requiredFields.length; i++) {
      let field = requiredFields[i];
      if (field.value === "" || field.value === null) {
        displayError(field, "Este campo é obrigatório");
        fieldsValid = false;
      }
    }
  
    return fieldsValid;
  }

  function comparePasswords() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    
    return senha === confirmarSenha;
  }

  function displayError(element, message) { 
    let errorMessage = element.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "inline-block";
  }

  function resetErrorMessages() {
    let errorMessages = document.querySelectorAll(".error-message")
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].textContent = "";
    }
  }

  function validateAge() {
    const birthDate = new Date(document.getElementById('data_nascimento').value);
    const today = new Date();
    const minimumAge = 18;
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age >= minimumAge;
  }

  document.getElementById('data_nascimento').addEventListener('change', function() {
    const ageError = document.getElementById('idade-error');
    
    if (!validateAge()) {
      ageError.textContent = 'Você deve ter pelo menos 18 anos';
    } else {
      ageError.textContent = '';
    }
  });
});
