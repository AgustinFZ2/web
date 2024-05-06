let primero = document.querySelector("form input");
primero.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

function validar() {
 let f_nombre = document.querySelector("#f_nombre");
 f_nombre.classList.remove("error");
 let f_mensaje = document.querySelector("#f_mensaje");
 f_mensaje.classList.remove("error");
 let f_email = document.querySelector("#f_email");
 f_email.classList.remove("error");
 let lta_errores = document.querySelector("#errores");
 lta_errores.innerHTML = "";
 lta_errores.style.display = "none";
 let lta_mensajes = document.querySelector("#mensajes");
 let hubo_error = false;
 if(f_nombre.value == "") {
  f_nombre.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Falta el nombre";
  lta_errores.appendChild(p);
  hubo_error = true;
 }
 if(f_mensaje.value == "") {
  f_mensaje.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Falta el mensaje";
  lta_errores.appendChild(p);
  hubo_error = true;
 } else if(f_mensaje.value.length > 200) {
  f_mensaje.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Longitud máxima del mensaje: 200";
  lta_errores.appendChild(p);
  hubo_error = true;
 }
 if(f_email.value != "" && !reg_correo.test(f_email.value)) {

  f_email.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Email inválido";
  lta_errores.appendChild(p);
  hubo_error = true;
 }
 if(hubo_error) {//
  lta_errores.style.display = "initial";
  return false;
 } else {
  let p = document.createElement("p");
  if(f_email.value != "") {
   p.innerHTML =  
    f_nombre.value + " dice " + 
    f_mensaje.value + ". Contacto: " +
    f_email.value + ".";
  } else {
   p.innerHTML =  
    f_nombre.value + " dice " + 
    f_mensaje.value + ".";
  }
  lta_mensajes.appendChild(p);
  document.forms["f_contacto"].reset();
  let primero = document.querySelector("form input");
  primero.focus();
 }
 return false;
}