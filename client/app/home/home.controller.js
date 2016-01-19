angular.module('recommend')
 .controller('homeController', function($http) {
   vm = this;
   vm.name = 'Shannon';
   vm.date = new Date();
    
   $http({
     method: 'GET',
     url: '/data'
   }).then(function success(response) {
     vm.data = response.data.data;
   });
 });

