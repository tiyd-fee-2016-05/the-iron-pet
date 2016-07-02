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
      templateUrl: 'adminviews/petListAdmin.html',
          // controller: 'PetController'
    })
    .when('/admindetails', {
      templateUrl: 'adminviews/petAdminDetails.html',
          // controller: 'PetController'
    })
    .when('/adminAddPet', {
      templateUrl: 'adminviews/addPetAdmin.html',
          // controller: 'PetController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});








mainApp.controller('PetController', function($scope, $http){
  var url = "http://localhost:3007/dogs"

     $http.get(url).success( function(data) {
        $scope.petList = data;
        console.log(data)
     });
  });

// $scope.message = "This is a test message"
//   $scope.petList =
// [
//   {
//   PetNumber: "0",
//   PetName: 'Friendly',
//   PetPhoto: "images/dog-3.jpg",
//   PetBreed:'Schnauzer',
//   PetPrice: '30',
//   FavActivity:'Napping',
//   FavSnack:'Beggin Strips',
//   PetDescription:'A loveable young lady with a heart of gold!'},
//
//   {
//   PetNumber: "1",
//   PetName: 'Leo',
//   PetPhoto: "images/dog-4.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//   PetNumber: "2",
//   PetName: 'Milo',
//   PetPhoto: "images/dog-5.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "3",
//     PetName: 'Barry',
//   PetPhoto: "images/dog-6.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "4",
//     PetName: 'Buster',
//   PetPhoto: "images/dog-7.jpg",
//   PetBreed:'Schnauzer',
//   FavActivity:'Napping',
//   FavSnack:'Beggin Strips',
//   PetDescription:'A loveable young lady with a heart of gold!'},
//
//   {
//     PetNumber: "5",
//     PetName: 'Hank',
//   PetPhoto: "images/dog-8.jpeg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "6",
//     PetName: 'Reggie',
//   PetPhoto: "images/dog-9.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "7",
//     PetName: 'Nathaniel',
//   PetPhoto: "images/dog-10.jpeg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "8",
//     PetName: 'Morgan',
//     PetPhoto: "images/dog-11.jpg",
//   PetBreed:'Schnauzer',
//   FavActivity:'Napping',
//   FavSnack:'Beggin Strips',
//   PetDescription:'A loveable young lady with a heart of gold!'},
//
//   {
//     PetNumber: "9",
//     PetName: 'Tyrion',
//   PetPhoto: "images/dog-1.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "10",
//     PetName: 'Hermione',
//   PetPhoto: "images/dog-2.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
//
//   {
//     PetNumber: "11",
//     PetName: 'Katniss',
//   PetPhoto: "images/dog-5.jpg",
//   PetBreed:'Schnauzer2',
//   FavActivity:'Napping2',
//   FavSnack:'Beggin Strips2',
//   PetDescription:'A loveable young lady with a heart of gold!2'},
// ]
// $scope.PetID = ($scope.petList.indexOf($pet)).toString();
