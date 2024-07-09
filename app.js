let inputText = "";
let resultText = "";


function encryptText() {
  inputText = document.querySelector("textarea").value;
  checkTest(inputText);
  const clave = "ClaveSecreta123";
  resultText = inputText.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  setResultText();
  limpiarCaja();
  return;
}

function checkTest(inputText) {
  const regex = /[a-z0-9]/;
  if (regex.test(inputText)) return;
  alert("Solo se permiten letras minúsculas y sin acentos");
  return;
}

function limpiarCaja() {
  document.querySelector("textarea").value = "";
  return;
}

function decryptText() {
  inputText = document.getElementsByClassName("main__input-box")[0].value;
  const clave = "ClaveSecreta123";
  resultText = inputText.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  setResultText();
  limpiarCaja()
  return;
}

function setResultText() {
  document.getElementById('image').classList.add('unavailable');
  document.querySelector("h3").classList.add('unavailable');
  document.getElementById('copy-button').classList.remove('unavailable');
  document.getElementById('copy-button').setAttribute('disabled', false);
  document.getElementById('output-box').textContent = resultText;
}