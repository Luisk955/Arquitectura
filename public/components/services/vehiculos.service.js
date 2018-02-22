(() => {
  'use strict';
  angular
  .module('arquitectura')
  .service('servicioVehiculos', servicioVehiculos);

  servicioVehiculos.$inject = ['$log','$http'];

  function servicioVehiculos($log, $http){

    let publicAPI = {
      addVehiculo : _addVehiculo,
      getVehiculos : _getVehiculos
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addVehiculo(pNuevoVehiculo){
      let listaVehiculos = _getVehiculos();
      listaVehiculos.push(pNuevoVehiculo);
      localStorage.setItem('vehiculosLS', JSON.stringify(listaVehiculos));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getVehiculos(){
      let listaVehiculos = [];
      let listaVehiculosLocal = JSON.parse(localStorage.getItem("vehiculosLS"));

      if(listaVehiculosLocal == null){
        listaVehiculos = [];
      }else{
        listaVehiculosLocal.forEach(obj => {
          
          let objVehiculos = new Vehiculo(obj.placa, obj.marca, obj.capacidad, obj.anno);

          listaVehiculos.push(objVehiculos);
        })
      }

      return listaVehiculos;
    }
  }
})();