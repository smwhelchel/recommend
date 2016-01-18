angular.module('recommend', ['ngRoute']);

angular.module('recommend')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when("/join", {
        templateUrl: "app/join/join.html",
        controller: "joinController",
        controllerAs: "join"
      });
  }])

angular.module('recommend')
   .controller('joinController', function() {
     vm = this;
     vm.title = 'Join Us.';
     vm.body  = 'Welcome.';
     vm.name = "Excerise 10.2";
   });
