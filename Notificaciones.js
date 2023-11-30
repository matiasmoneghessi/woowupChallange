class Notificaciones {
  constructor() {
    this.listadoUsuarioNotificar = [];
    this.listadoMensajes = [];
  }

  agregarUsuarioListado(usuario) {
    this.listadoUsuarioNotificar.push(usuario);
  }

  enviarMensaje(msj) {
    var ListaidUsuarioDirigido = !Array.isArray(msj.idUsuarioDirigido)
      ? [msj.idUsuarioDirigido]
      : msj.idUsuarioDirigido;
    console.log(ListaidUsuarioDirigido, "id usuario dirigido");
    var UsuariosNotificar = this.listadoUsuarioNotificar.filter(
      (usuario) => usuario.recibirNotificaciones == true
    );
    UsuariosNotificar.map((usuario) => {
      if (
        (usuario.tiposNotificaciones[msj.tipoNotificacion].includes(
          msj.categoriaNotificacion
        ) &&
          ListaidUsuarioDirigido.includes(usuario.id)) ||
        (ListaidUsuarioDirigido.length == 0 &&
          usuario.tiposNotificaciones[msj.tipoNotificacion].includes(
            msj.categoriaNotificacion
          ))
      ) {
        usuario.guardarMensaje(msj);
      }
    });
    this.listadoMensajes.push(msj);
  }

  mostrarMensajes(categoriaNotificacioes) {
    var Minutos = new Date();
    this.listadoMensajes = this.listadoMensajes.filter(
      (msj) => msj.Expiracion >= Minutos.getMinutes()
    );
    return this.listadoMensajes.filter(
      (msj) => msj.categoriaNotificacion == categoriaNotificacioes
    );
  }
}

module.exports = Notificaciones;
