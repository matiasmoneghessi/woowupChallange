class Mensaje {
  constructor(
    idUsuarioEnvio,
    idUsuarioDirigido,
    mensaje,
    tipoNotificacion,
    categoriaNotificacion
  ) {
    var Minutos = new Date();
    (this.idUsuarioEnvio = idUsuarioEnvio),
      (this.idUsuarioDirigido = idUsuarioDirigido),
      (this.mensaje = mensaje),
      (this.tipoNotificacion = tipoNotificacion),
      (this.categoriaNotificacion = categoriaNotificacion),
      (this.Expiracion = Minutos.getMinutes() + 1);
  }
}

module.exports = Mensaje;
