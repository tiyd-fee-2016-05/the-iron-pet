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

mainApp.controller('PetController', function($scope, $http){
  var url = "http://localhost:3007/dogs"

     $http.get(url).success( function(data) {
        $scope.petList = data;
        console.log(data)
     });


     // new stuff added before commit/push
    $scope.goToDetails = function(pet) {
      $scope.indexClicked = JSON.stringify({ index: $scope.petList.indexOf(pet) });
      console.log( $scope.indexClicked );

      $http.post('http://localhost:3007/dogs-index', $scope.indexClicked )
      .then(function successCallback(response) {
        console.log( response.data.index );
      }, function errorCallback(response) {
        console.log( $scope.indexClicked );
      });


    } // end goToDetails

      $http.get("http://localhost:3007/dogs-index").success( function(data) {
         $scope.petIndex = data[data.length - 1].index;
         console.log($scope.petIndex[$scope.indexClicked]);
      });






  });
