(() => {
  'use strict';
  angular
  .module('arquitectura')
  .controller('controladorVehiculos', controladorVehiculos);

  controladorVehiculos.$inject = ['servicioVehiculos'];

  function controladorVehiculos(servicioVehiculos){
    let vm = this;

    vm.nuevoVehiculo = {};
    vm.listaVehiculos = listarVehiculos();

    listarVehiculos();
    // Función que es llamda desde el html para registra un nuevo usuario
    vm.registrarVehiculos = (pNuevoVehiculo) => {

      console.log(pNuevoVehiculo);

      // Tomamos el objeto sin formato y lo comvertimos en una instancia de la clase cliente
      let objNuevoVehiculo = new Cliente(pNuevoVehiculo.placa, pNuevoVehiculo.marca, pNuevoVehiculo.capacidad, pNuevoVehiculo.anno);

     
      console.log('objeto con vehiculo');
      console.log(objNuevoVehiculo);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioVehiculos.addVehiculo(objNuevoVehiculo);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El vehiculo ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoVehiculo = null;
      listarVehiculos();
    }


    function listarVehiculos() {
      vm.listarVehiculos = servicioVehiculos.getVehiculos();
    }

    

  }
})();