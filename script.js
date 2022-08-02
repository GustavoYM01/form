let userNameInput = document.querySelector(".userNameInput");
// Seleciona o input

let emailInput = document.querySelector(".emailInput");
// Seleciona o input

let senhaInput = document.querySelector(".senhaInput");
// Seleciona o input

let confirmaSenhaInput = document.querySelector(".confirmaSenhaInput");
// Seleciona o input

let selectLabel1 = document.querySelector(".userName");
// Seleciona a label

let selectLabel2 = document.querySelector(".email");
// Seleciona a label

let selectLabel3 = document.querySelector(".senha");
// Seleciona a label

let selectLabel4 = document.querySelector(".confirmaSenha");
// Seleciona a label

userNameInput.addEventListener("input", effectInLabel1);
emailInput.addEventListener("input", effectInLabel2);
senhaInput.addEventListener("input", effectInLabel3);
confirmaSenhaInput.addEventListener("input", effectInLabel4);

function effectInLabel1() {
  if (userNameInput.value.length === 0) {
    selectLabel1.classList.remove("active");
  } else {
    selectLabel1.classList.add("active");
  }
}

function effectInLabel2() {
  if (emailInput.value.length === 0) {
    selectLabel2.classList.remove("active");
  } else {
    selectLabel2.classList.add("active");
  }
}

function effectInLabel3() {
  if (senhaInput.value.length === 0) {
    selectLabel3.classList.remove("active");
  } else {
    selectLabel3.classList.add("active");
  }
}

function effectInLabel4() {
  if (confirmaSenhaInput.value.length === 0) {
    selectLabel4.classList.remove("active");
  } else {
    selectLabel4.classList.add("active");
  }
}

let h3 = document.createElement("h3");
h3.classList.add("infoPassNotEquals");
h3.classList.add("none");
let textToH3 = document.createTextNode("As senhas não são iguais!");
h3.appendChild(textToH3);

function validarSenha() {
  if (senhaInput.value !== confirmaSenhaInput.value) {
    h3.classList.remove("none");
    h3.classList.add("block");
    document.querySelector(".form").appendChild(h3);
  } else {
    h3.classList.remove("block");
    h3.classList.add("none");
  }
}

function limpaMsg() {
  if (senhaInput.value === "" && confirmaSenhaInput.value === "") {
    h3.classList.remove("block");
    h3.classList.add("none");
  }
}
