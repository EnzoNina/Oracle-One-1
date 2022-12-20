function encriptar() {
  var texto = document.getElementById("text");
  const a = texto.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  var resultado = document.getElementById("resu");
  resultado.textContent = a;

  var boton = document.getElementById("copiar");
  boton.style.display = "block";
}
function descriptar() {
  var texto = document.getElementById("text");
  const a = texto.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    var resultado = document.getElementById("resu");
  resultado.textContent = a;

  var boton = document.getElementById("copiar");
  boton.style.display = "none";
}
function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }