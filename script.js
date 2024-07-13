// A função updateLengthValue atualiza o valor exibido para o comprimento da senha conforme o usuário move o controle deslizante.
function updateLengthValue(value) {
  document.getElementById("lengthValue").textContent = value;
}

// A função generatePassword é chamada quando o botão "Gerar Senha" é clicado.
function generatePassword() {
  // Obter os valores e estados atuais dos elementos do HTML necessários para gerar a senha.
  var length = document.getElementById("passwordLength").value;
  var includeUppercase = document.getElementById("checkbox1").checked;
  var includeLowercase = document.getElementById("checkbox2").checked;
  var includeNumbers = document.getElementById("checkbox3").checked;
  var includeSymbols = document.getElementById("checkbox4").checked;


  // Verificar se nenhum checkbox está selecionado.
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    // Exibir uma mensagem de aviso ou selecionar um checkbox padrão.
    alert("Selecione pelo menos uma opção para gerar a senha.");
    return;
  }

  // Definir os conjuntos de caracteres para cada tipo de caractere possível.
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Variáveis para armazenar os caracteres possíveis e a senha gerada.
  var characters = "";
  var password = "";

  // Construir a string characters baseada nas opções marcadas pelo usuário.
  if (includeUppercase) {
    characters += uppercaseChars;
  }
  if (includeLowercase) {
    characters += lowercaseChars;
  }
  if (includeNumbers) {
    characters += numberChars;
  }
  if (includeSymbols) {
    characters += symbolChars;
  }

  // Gerar a senha selecionando caracteres aleatórios a partir do conjunto de caracteres disponíveis.
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  // Exibir a senha gerada no elemento HTML com o id "generatedPassword".
  document.getElementById("generatedPassword").textContent = password;

   // Defina a variável para acompanhar a força da senha
   var passwordStrength = 0;

   // Verifique se os critérios selecionados são atendidos e atualize a força da senha
   if (includeUppercase) {
     passwordStrength += 26;
   }
   if (includeLowercase) {
     passwordStrength += 26;
   }
   if (includeNumbers) {
     passwordStrength += 10;
   }
   if (includeSymbols) {
     passwordStrength += 31;
   }
 
   // Calcule a força da senha com base no comprimento
   passwordStrength *= length;
 
   // Defina uma frase descritiva para exibir a força da senha
   var strengthText = "";
 
   if (passwordStrength < 100) {
     strengthText = "Força da senha: Fraca";
   } else if (passwordStrength < 200) {
     strengthText = "Força da senha: Média";
   } else if (passwordStrength < 300) {
     strengthText = "Força da senha: Forte";
   } else {
     strengthText = "Força da senha: Muito forte";
   }
 
   // Exiba a força da senha em tempo real
   document.getElementById("passwordStrength").textContent = strengthText;
   console.log(passwordStrength)
  
}
// A função copyPassword é chamada quando o botão "Copiar Senha" é clicado.
function copyPassword() {
  var password = document.getElementById("generatedPassword").textContent;
  
  // Cria um elemento de input temporário
  var tempInput = document.createElement("input");
  tempInput.value = password;
  document.body.appendChild(tempInput);
  
  // Seleciona o conteúdo do input temporário
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
  
  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand("copy");
  
  // Remove o input temporário
  document.body.removeChild(tempInput);
  
  // Exibe uma mensagem de confirmação
  alert("Senha copiada para a área de transferência!");
}
