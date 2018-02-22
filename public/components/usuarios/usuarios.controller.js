(() => {
  'use strict';
  angular
  .module('arquitectura')
  .controller('controladorUsuarios', controladorUsuarios);

  controladorUsuarios.$inject = ['servicioUsuarios'];

  function controladorUsuarios(servicioUsuarios){
    let vm = this;

    vm.nuevoUsuario = {};
    vm.listaUsuarios = listarUsuarios();

    listarUsuarios();
    // Función que es llamda desde el html para registra un nuevo usuario
    vm.registrarUsuario = (pNuevoUsuario) => {

      console.log(pNuevoUsuario);

      // Tomamos el objeto sin formato y lo comvertimos en una instancia de la clase cliente
      let objNuevoUsuario = new Cliente(pNuevoUsuario.cedula, pNuevoUsuario.nombre1, pNuevoUsuario.apellido1, pNuevoUsuario.edad);

     
      console.log('objeto con usuario');
      console.log(objNuevoUsuario);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioUsuarios.addUsuario(objNuevoUsuario);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoUsuario = null;
      listarUsuarios();
    }


    function listarUsuarios() {
      vm.listaUsuarios = servicioUsuarios.getUsuarios();
    }

    

  }
})();