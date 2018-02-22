(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'InicioS'
        }
      })

      .state('usuarios', {
        url: '/users',
        templateUrl: './components/usuarios/usuarios.view.html',
        data:{
          pageTitle: 'Registro usuarios'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/usuarios.controller.js')
          }]
        },
        controller: 'controladorUsuarios',
        controllerAs: 'vm'
      })
      .state('vehiculos', {
        url: '/vehiculos',
        templateUrl: './components/vehiculos/vehiculos.view.html',
        data:{
          pageTitle: 'Registro vehiculos'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/vehiculos/vehiculos.controller.js')
          }]
        },
        controller: 'controladorVehiculos',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  };
})();