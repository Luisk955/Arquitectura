// TODO Dentro de este archivo se crean los objetos con sus respectivos métodos
class Cliente{
  constructor(pCedula, pNombre1, pApellido1, pEdad){
    this.cedula = pCedula;
    this.nombre1 = pNombre1;
    this.apellido1 = pApellido1;
    this.edad = pEdad;
    this.listaVehiculos = [];
  }
  registrarVehiculo(pVehiculo){
    this.listaVehiculos.push(pVehiculo);
  }
}

class Vehiculo{
  constructor(pPlaca, pMarca, pCapacidad, pAnno){
    this.placa = pPlaca ;
    this.marca = pMarca;
    this.capacidad = pCapacidad;
    this.anno = pAnno;
  }
}