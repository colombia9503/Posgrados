
(function(angular){
'use strict';
	angular.module('tesisApp',['ngRoute'])
  .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
       .when('/agregar', {
        templateUrl: 'Plantillas/agregar.html'
        })
      .when('/enviar', {
        templateUrl: 'Plantillas/enviarInvitacion.html'       
        })
      .when('/gestionar', {
        templateUrl: 'Plantillas/gestionarEvaluadores.html'       
        })
      .when ('/presentar',{
        templateUrl: 'Plantillas/presentarPropuesta.html'
      })
      .when ('/radicar',{
        templateUrl: 'Plantillas/radicar.html',
        controller: 'radicarController'
      })
      .otherwise({
      	redirectTo:'/'
      });
     $locationProvider.html5Mode(true);
    }])

  //mucho el imbecil yo pas
  //esta es la version del angular 1.3, ojo se confunden de como+
  //crear los controladores de las vistas
  //pero reciben los mismo parametros
  //esos son los scopes para hacer los requests a las cosas
  .controller('radicarController', ["$scope", '$http', function($scope, $http){
    //post de propuestas
    console.log("controlador de propuestas");
    $scope.addPropuesta = function(){
            $http.post('/propuestas', $scope.propuesta).success(function(response){
              console.log(response);
              //limpiar campos
              $scope.propuesta = "";
            });
    }
  }])

  .controller('MainCtrl',["$scope",function($scope){
    $scope.botones={
      prueba:[{
        nombre: "Agregar Usuario",
        url:"/agregar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      }, {
        nombre: "Confirmar Invitaciones",
        url:"/confirmar"
      },{
      	nombre: "Enviar Invitaciones",
        url:"/enviar"
      },{
      	nombre: "Gestionar Evaluadores",
        url:"/gestionar"
      },{
      	nombre: "Presentar Propuesta",
        url:"/presentar"
      }],
      estudiante:[{
        nombre: "Presentar Propuesta",
        url:"/presentar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      },{
        nombre: "Radicar Propuesta",
        url:"/radicar"
      }],
      calificador:[]
      };
  }])
  })(window.angular);

