var mainApp = angular.module("myApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'home.html',
      // controller: 'AppointmentController'
    })
    .when('/availablePets', {
      templateUrl: 'consumerviews/allPets.html',
      // controller: 'AppointmentController'
    })
    .when('/MyCouch', {
      templateUrl: 'consumerviews/couchView.html',
      // controller: 'AppointmentController'
    })
    .when('/petdetails', {
      templateUrl: 'consumerviews/petDetails.html',
      // controller: 'AppointmentController'
    })
    .when('/checkout', {
      templateUrl: 'consumerviews/petTime.html',
      // controller: 'AppointmentController'
    })
    //Admin View Routes
    .when('/admin', {
      templateUrl: 'adminviews/addPetAdmin.html',
      // controller: 'AppointmentController'
    })
    .when('/admindetails', {
      templateUrl: 'adminviews/petAdminDetails.html',
      // controller: 'AppointmentController'
    })
    .when('/adminAddPet', {
      templateUrl: 'adminviews/petListAdmin.html',
      // controller: 'AppointmentController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
