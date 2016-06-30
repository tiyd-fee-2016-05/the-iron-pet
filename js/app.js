var mainApp = angular.module("myApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'home.html',
      // controller: 'PetController'
    })
    .when('/availablePets', {
      templateUrl: 'consumerviews/allPets.html',
      controller: 'PetController'
    })
    .when('/MyCouch', {
      templateUrl: 'consumerviews/couchView.html',
      // controller: 'PetController'
    })
    .when('/petdetails', {
      templateUrl: 'consumerviews/petDetails.html',
          // controller: 'PetController'
    })
    .when('/checkout', {
      templateUrl: 'consumerviews/petTime.html',
          // controller: 'PetController'
    })
    //Admin View Routes
    .when('/admin', {
      templateUrl: 'adminviews/addPetAdmin.html',
          // controller: 'PetController'
    })
    .when('/admindetails', {
      templateUrl: 'adminviews/petAdminDetails.html',
          // controller: 'PetController'
    })
    .when('/adminAddPet', {
      templateUrl: 'adminviews/petListAdmin.html',
          // controller: 'PetController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});


mainApp.controller('PetController', function($scope){
  $scope.petList =
[
  {PetName: 'Friendly',
  PetBreed:'Schnauzer',
  FavActivity:'Napping',
  FavSnack:'Beggin Strips',
  PetDescription:'A loveable young lady with a heart of gold!'},
  {PetName: 'Leo',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Milo',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Barry',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Buster',
  PetBreed:'Schnauzer',
  FavActivity:'Napping',
  FavSnack:'Beggin Strips',
  PetDescription:'A loveable young lady with a heart of gold!'},

  {PetName: 'Hank',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Reggie',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Nathaniel',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Captain Morgan',
  PetBreed:'Schnauzer',
  FavActivity:'Napping',
  FavSnack:'Beggin Strips',
  PetDescription:'A loveable young lady with a heart of gold!'},

  {PetName: 'Tyrion',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Hermione',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},

  {PetName: 'Katniss',
  PetBreed:'Schnauzer2',
  FavActivity:'Napping2',
  FavSnack:'Beggin Strips2',
  PetDescription:'A loveable young lady with a heart of gold!2'},
]
  $scope.message = "This is a test message."

});
