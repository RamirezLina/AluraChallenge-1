let inputText = "";
let resultText = "";



function encryptText() {
  inputText = document.querySelector("textarea").value;
  if (!checkText(inputText)) return;
  resultText = inputText.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  setResultText();
  limpiarCaja();
  return;
}

function checkText(inputText) {
  const regex = /^[a-z\s]+$/;

  if (!inputText) {
    Swal.fire({
      title: "No ha ingresado texto",
      icon: 'error',
      confirmButtonText: 'Ok',
      allowEscapeKey: true,
      confirmButtonColor: "#0a3871",
    })
    return false;
  }
  if (regex.test(inputText)) return true;

  Swal.fire({
    title: 'Solo se permiten letras minúsculas y sin acentos',
    icon: 'error',
    confirmButtonText: 'Try again',
    allowEscapeKey: true,
    confirmButtonColor: "#0a3871",


  })
  limpiarCaja();
  return false;

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
  document.getElementById('copy-button').removeAttribute('disabled');
  document.getElementById('output-box').textContent = resultText;
}

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(resultText);
    console.log('Contenido copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}