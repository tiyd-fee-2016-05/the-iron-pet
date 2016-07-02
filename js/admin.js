mainApp.controller('PetController', function($scope, $http){
​
 $('.NewPuppy').on('submit', function (e) {
​
    $http.post("http://localhost:3007/dogs", {
​
      var newPetName = $('input[name="savePetName"]').val(),
      var newPetPhoto = $('input[name="savePetPhoto"]').val(),
      var newPetBreed= $('input[name="savePetBreed"]').val(),
      var newPetPrice= $('input[name="savePetPrice"]').val(),
      var newPetSnack= $('input[name="savePetActivity"]').val(),
      var newPetActivity= $('input[name="savePetSnack"]').val(),
      var newPetDescription = $('input[name="savePetDesc"]').val(),
​
      ["PetNumber":"12",
      "PetName" : newPetName,
      "PetPhoto": newPetPhoto,
      "PetBreed": newPetBreed,
      "PetPrice": newPetPrice,
      "FavActivity": newPetActivity,
      "FavSnack": newPetSnack,
      "PetDescription": newPetDescription
    ]
    }
    .success(function(data, status, headers, config) {
        $scope.data = data;
        console.log("Successful post!")
    }).error(function(data, status, headers, config) {
        $scope.status = status;
    });
​
    })
Add Comment
