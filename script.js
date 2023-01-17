function codificar(cadena) {

  return btoa(cadena);

}
  

function descodificar(cadena) {

  return atob(cadena);

}
  

let codificarBtn = document.getElementById("codificar");

let descodificarBtn = document.getElementById("descodificar");

let mensaje = document.getElementById("mensaje");
  

codificarBtn.addEventListener("click", function(event) {
  event.preventDefault();
  mensaje.value = codificar(mensaje.value);
}    