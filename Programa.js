// Ejecutar en consola node Programa.js para correr el programa

const usuario = require("./Usuario.js");
const notificaciones = require("./Notificaciones.js");
const mensaje = require("./Mensajes.js");

const Notificaciones = new notificaciones();
const Matias = new usuario(1, "Matias", "Moneghessi", 27, Notificaciones);
const Lionel = new usuario(2, "Lionel", "Messi", 35, Notificaciones);
const Dibu = new usuario(3, "Emiliano", "Martinez", 54, Notificaciones);

// Enviar mensaje de un usuario a uno o muchos
Matias.enviarMensaje(Dibu.id, "Hola Dibu", "urgente", "chat");
Matias.enviarMensaje(
  [Dibu.id, Lionel.id],
  "como estuvo tu dia?",
  "urgente",
  "chat"
);

// Ver notificaciones de Dibu
Dibu.verNotificaciones();

// Despues de 1000 segundos mostrar hola mundo y el mensaje
setTimeout(function () {
  console.log("Hola Mundo");
  console.log(Notificaciones.mostrarMensajes("chat"));
}, 1000);

// Cantidad de usuarios
console.log("FIN", Notificaciones.listadoUsuarioNotificar.length);
