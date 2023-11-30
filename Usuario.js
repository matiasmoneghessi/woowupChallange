const mensaje = require("./Mensajes.js");

class Usuario {
  constructor(id, nombre, apellido, edad, notificaciones) {
    (this.id = id),
      (this.nombre = nombre),
      (this.apelllido = apellido),
      (this.edad = edad),
      (this.recibirNotificaciones = true),
      (this.tiposNotificaciones = {
        urgente: ["chat"],
        informativa: [],
      }),
      (this.listadoNotificaciones = []),
      (this.notificaciones = notificaciones),
      this.notificaciones.agregarUsuarioListado(this);
  }
  guardarMensaje(msj) {
    this.listadoNotificaciones.push(msj);
  }
  verNotificaciones() {
    console.log(
      "Tienes " +
        this.listadoNotificaciones.length +
        " Notificaciones sin Ver/Expirar"
    );
    this.listadoNotificaciones = [];
  }
  activarNotificaciones(bool) {
    console.log(bool);
    this.recibirNotificaciones = bool;
    console.log(this.recibirNotificaciones);
  }
  modificarNotificacionesRecibir(
    notificacionesUrgente,
    notificacionesInformativa
  ) {
    this.tiposNotificaciones.urgente = notificacionesUrgente;
    this.tiposNotificaciones.informativa = notificacionesInformativa;
  }
  enviarMensaje(
    idUsuarioDirigido,
    msj,
    tipoNotificacion,
    categoriaNotificacion
  ) {
    var msj = new mensaje(
      this.id,
      idUsuarioDirigido,
      msj,
      tipoNotificacion,
      categoriaNotificacion
    );
    this.notificaciones.enviarMensaje(msj);
  }
}

module.exports = Usuario;
