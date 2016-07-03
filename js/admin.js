$('.NewPuppy').click(function (e) {
  e.PreventDefault();

  $.post("http://localhost:3007/dogs",

  {
      "PetNumber":"12",
      "PetName" : $('input[name="savePetName"]').val(),
      "PetPhoto": $('input[name="savePetPhoto"]').val(),
      "PetBreed": $('input[name="savePetBreed"]').val(),
      "PetPrice": $('input[name="savePetPrice"]').val(),
      "FavActivity": $('input[name="savePetActivity"]').val(),
      "FavSnack": $('input[name="savePetSnack"]').val(),
      "PetDescription": $('input[name="savePetDesc"]').val(),

    }
    .success(function(data, status, headers, config) {

        console.log("Successful post!" + data)
      });)
    });
});
