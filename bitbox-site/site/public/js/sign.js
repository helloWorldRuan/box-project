// Função de login
function signIn() {
}

// Verificar se email possui caracteres "@" e "."
function validateEmail() {
  let email = in_email.value
  let inputEmail = document.getElementById('in_email')

  for (let i = 0; i < 2; i++) {
    let validEmail = email.indexOf("@") < 0 || email.indexOf(".") < 0 || email.length < 10

    if (validEmail) {
      inputEmail.style = "outline: 1px solid #df2222"
    }

    if (email.length == 0 || !validEmail) {
      inputEmail.style = "outline: 1px solid #a0a0a07a"
    }

    console.log(email.length);
  }
}

// Validação de senha
function validatePass() {
  let pass = in_password.value
  let inputPass = document.getElementById('in_password')

  var senha = in_password.value
  var divSenha = document.querySelector('.pass-info')
  var barProgress = document.querySelectorAll(".bar-progress")

  if (senha.length > 0) {
    divSenha.style = "opacity: 1"

  } else{
    divSenha.style = "opacity: 0"
  }

  // regex - Expressão regular - identifica padrões dentro da string
  let hasUpper = /[A-Z]/.test(pass)
  let hasNumber = /[0-9]/.test(pass);
  let hasSpecialChar = /[^a-zA-Z0-9]/g.test(pass)

  let noSpace = pass.replace(/\s/g, "")

  if (hasUpper){
    barProgress[0].style = "width: 30px; background-color: #aaa"
  }

  let validPass = hasUpper && hasNumber && hasSpecialChar && pass.length > 1 && pass.length >= 8;

  console.log(validPass)

  if (!validPass) {
    inputPass.style = "outline: 1px solid #df2222"
  }

  if (pass.length == 0 || validPass) {
    inputPass.style = "outline: 1px solid #a0a0a07a"
  }
}

// Função de cadastro
let loginEmail
let loginPass

function signUp() {

  //JSON para guardar dados do usuário
  let userBox = {
    nameServer: in_name.value,
    officeServer: in_office.value,
    emailServer: in_email.value,
    passServer: in_password.value
  }

  console.log(userBox);

  // Ao negar o atributo do JSON, conferimos se ele está vazio ou não
  let isInvalid = !userBox.nameServer ||
    !userBox.officeServer ||
    !userBox.emailServer ||
    !userBox.passServer

  if (isInvalid) {
    alert("⚠ Campos não preenchidos corretamente!")

  } else {
    loginEmail = userBox.emailServer
    loginPass = userBox.passServer

    localStorage.setItem("email", loginEmail)
    localStorage.setItem("senha", loginPass)
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    // Aqui passamos somente o JSON criado lá em cima
    body: JSON.stringify(userBox)
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {

      setTimeout(() => {
        window.location = "sign.html";
      }, "2000")

    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

// Função para alternar visibilidade entre formulários de login e cadastro
let formState = false;
function toggleFormVisibility() {
  const formLogin = document.querySelector(".login")
  const formCadastro = document.querySelector(".cadastro")

  // Setando estilizações de visibilidade
  const styleVisibleForm = "z-index: 1; opacity: 1; animation: fadeIn 1s ease"
  const styleInvisibleForm = "z-index: -1; opacity: 0; animation: none"

  if (!formState) {
    formLogin.style = styleInvisibleForm
    formCadastro.style = styleVisibleForm

    formState = true;
  }

  else {
    // Retorna dados do cadastro automaticamente
    // in_email_login.value = localStorage.getItem("email")
    // in_password_login.value = localStorage.getItem("senha")

    formCadastro.style = styleInvisibleForm
    formLogin.style = styleVisibleForm

    formState = false;
  }

}

// Função para alternar visisbilidade da senha
let passState = false
function togglePassVisibility() {

  const passSignUp = document.getElementById("in_password")
  const passSignIn = document.getElementById("in_password_login")

  // Aqui capturamos os ícones de olhinho
  const eyeIcon = document.querySelectorAll(".ph-eye")
  // Trocando a classe de ambos
  for (let i = 0; i < eyeIcon.length; i++) {
    eyeIcon[i].classList.toggle('ph-eye-slash')
  }

  // Quando o estado for verdadeiro, a senha continua oculta
  // Logo o estado se torna falso.
  if (passState) {
    passSignUp.setAttribute('type', 'password')
    passSignIn.setAttribute('type', 'password')
    passState = false

    // Quando o estado for falso, a senha se torna visível
    // Logo o estado se torna verdadeiro.
  } else {
    passSignUp.setAttribute('type', 'text')
    passSignIn.setAttribute('type', 'text')
    passState = true
  }

}





// 🏗 Implementação fututra
function emManutençãokkkk() {
  const ball = document.querySelectorAll(".ball")
  console.log(ball);

  var i = 0
  function toggleBall() {

    for (j = 0; j < ball.length; j++) {
      ball[j].style = ""
    }

    if (i > 2) {
      i = 0;
    }

    ball[i].style = "width: 30px; background: var(--smooth-gradient)"
    i++

    console.log(i);
  }
}






