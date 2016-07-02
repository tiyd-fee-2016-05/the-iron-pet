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

      // GET index from dogs-index to help display appropriate dogs data on petDetails.html
      $http.get("http://localhost:3007/dogs-index").success( function(data) {
         $scope.petIndex = data[data.length - 1].index;
         console.log($scope.petIndex);
      });


    // function to grab index of pet in petDetails.html when you click "Add to couch"
    $scope.goToCouch = function(pet) {
      $scope.petCouchIndex;
      // grab the index of this pet from dogs-index
      $http.get("http://localhost:3007/dogs-index").success( function(data) {
        $scope.petCouchIndex = data[data.length - 1].index;
        console.log("Purchased Pet: " + $scope.petCouchIndex);
        console.log( "pet list: " + $scope.petList);
        // post the index to dogs-couch
        $scope.couchIndex = JSON.stringify({ index: $scope.petCouchIndex, CouchPetPhoto: $scope.petList[$scope.petCouchIndex].PetPhoto, CouchPetName: $scope.petList[$scope.petCouchIndex].PetName, CouchPetPrice: $scope.petList[$scope.petCouchIndex].PetPrice });
        $http.post('http://localhost:3007/dogs-couch', $scope.couchIndex )
          .then(function successCallback(response) {
            console.log( "Current dog on couch: " + response.data.index );
            $scope.dogsOnCouch = response.data;
          }, // end success
          function errorCallback(response) {
            console.log( "Miserable Failure!!!" );
          });
        }); // end failure
    } // end goToCouch

    // GET index from dogs-index to help display appropriate dogs data on couchView.html
    $http.get("http://localhost:3007/dogs-couch").success( function(data) {
       $scope.couchIndex = data; // this will be used on couchView to loop through list of dogs on couch
       console.log($scope.couchIndex);




       $scope.invoice = [ {numDays: 1} ];


      $scope.invoice.push({
        numDays: 1
      });

      // $scope.numDays = $('.couchDays[name="couchDogDays"]').val();
      $scope.couchDogDays = {numDays: 1};

      $scope.total = function() {
         var days = 0;
         var total = 0;

         angular.forEach($scope.invoice, function(item) {
             days = item.numDays;
             console.log(item.numDays);
         }) // end forEach for couchIndex

         angular.forEach($scope.couchIndex, function(item) {
             total += item.CouchPetPrice;
             console.log(item.CouchPetPrice);
         }) // end forEach for couchIndex

         return total;
      }


  }); // end GET from dogs-couch









}); // end mainApp.controller
