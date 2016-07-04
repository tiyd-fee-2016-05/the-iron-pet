var mainApp = angular.module("mainApp", ['ngRoute']);


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

    .when('/deletePet', {
      templateUrl: 'adminviews/deletePet.html',
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
      console.log("Pet index: " + $scope.petIndex);
      $scope.couchIndex = JSON.stringify({ index: $scope.petIndex, CouchPetPhoto: $scope.petList[$scope.petIndex].PetPhoto, CouchPetName: $scope.petList[$scope.petIndex].PetName, CouchPetPrice: $scope.petList[$scope.petIndex].PetPrice });
      $http.post('http://localhost:3007/dogs-couch', $scope.couchIndex )
        .then(function successCallback(response) {
          console.log( "Current dog on couch: " + response.data.index );
          $scope.dogsOnCouch = response.data;
        }, // end success
        function errorCallback(response) {
          console.log( "Miserable Failure!!!" );
        });
    } // end goToCouch

    // GET index from dogs-index to help display appropriate dogs data on couchView.html
    $http.get("http://localhost:3007/dogs-couch").success( function(data) {
       $scope.couchIndex = data; // this will be used on couchView to loop through list of dogs on couch
       console.log($scope.couchIndex);

       $scope.grandTotal = 0;
       for( var index = 0; index < $scope.couchIndex.length; index++ ) {
         $scope.grandTotal += $scope.couchIndex[index].CouchPetPrice;
       }

       $scope.numInputsValue = 1;
       console.log( "numInputsValue: " + $scope.numInputsValue );

       $scope.updateCart = function(couch) {
         console.log("GrandTotal: " + $scope.grandTotal);
        $scope.dogDaysClicked = $scope.couchIndex.indexOf(couch);
        $scope.couchInputs = $( ".couchDays" );
        $scope.numInputs = $( $scope.couchInputs[$scope.dogDaysClicked]);
        $scope.numInputsValue = $scope.numInputs[0].value;
        console.log( $scope.couchIndex.indexOf(couch) );
        console.log( "numInputsValue: " + $scope.numInputsValue ); // this is the number I need to multiply the PetPrice by

        var clicksUp = 0;
        if( $scope.numInputsValue > clicksUp ) {
          clicksUp = clicksUp + 1;
          console.log( "Input Clicks Up: " + $scope.numInputsValue );
          console.log( "Clicks Up: " + clicksUp );
          $scope.grandTotal -= $scope.couchIndex[$scope.dogDaysClicked].CouchPetPrice * ($scope.numInputsValue - 1);
          $scope.grandTotal += $scope.couchIndex[$scope.dogDaysClicked].CouchPetPrice * $scope.numInputsValue;
        }

        else {
          clicksUp = $scope.numInputsValue;
          console.log( "Else Clicks Up: " + clicksUp );
          $scope.grandTotal -= $scope.couchIndex[$scope.dogDaysClicked].CouchPetPrice * ($scope.numInputsValue);
        }

        return $scope.grandTotal;

       } // end updateCart()



       $scope.removeItem = function(index) {
         $scope.removedDogNumDays = $scope.numInputsValue;
         $scope.removedDog = $scope.couchIndex.splice(index, 1);
        //  $scope.removedDogIndex = $scope.couchIndex[index].index;
        //  console.log($scope.removedDog);
         $scope.newRemovedList = $scope.couchIndex;
        //  console.log( "Hello" );
         console.log($scope.couchIndex);
        //  console.log( JSON.stringify( $scope.couchIndex) );
        //  console.log( $scope.grandTotal );
         console.log( $scope.removedDog[0].CouchPetPrice );
        //  console.log( $scope.numInputsValue );
         $scope.grandTotal = $scope.grandTotal - ($scope.removedDog[0].CouchPetPrice * $scope.numInputsValue);
         console.log( $scope.grandTotal );


         for(var index = 0; index < $scope.couchIndex.length; index++){
           $http.delete('http://localhost:3007/dogs-couch/' + $scope.removedDog[0].id)
             .success(function() {
           })
         };

         return $scope.grandTotal;

       }

       $scope.goToReceipt = function() {
         console.log( "Yay, we made it to the receipt!" );
         console.log( $scope.couchIndex );
         console.log( $scope.grandTotal );
         return $scope.grandTotal;
       } // end goToReceipt()
  }); // end GET from dogs-couch
}); // end mainApp.controller


mainApp.controller('AdminController', function($scope, $http){

  $('.savePet').click(function (e) {
    console.log("clicked");

    $scope.newDog = ({
      "PetNumber": "13",
      "PetName" : $('input[name="savePetName"]').val(),
      "PetPhoto": $('input[name="savePetPhoto"]').val(),
      "PetBreed": $('input[name="savePetBreed"]').val(),
      "PetPrice": $('input[name="savePetPrice"]').val(),
      "FavActivity": $('input[name="savePetActivity"]').val(),
      "FavSnack": $('input[name="savePetSnack"]').val(),
      "PetDescription": $('input[name="savePetDesc"]').val(),
    });



    // new info...this is where we put the input values
    // $scope.newDog = ({
    //   PetNumber: "12",
    //   PetName: "Lucy",
    //   PetPhoto: "images/dog-3.jpg",
    //   PetBreed: "Schnauzer",
    //   PetPrice: "30",
    //   FavActivity: "Napping",
    //   FavSnack: "Beggin Strips",
    //   PetDescription: "A loveable young lady with a heart of gold!"
    // });

    $http.post("http://localhost:3007/dogs", $scope.newDog).success(function(data) {
      console.log(data);
    }) // end POST
  }); // end click event on ".savePet"
}); // end AdminController
