$('.NewPuppy').click(function (e) {
  console.log("clicked");
  e.PreventDefault();

  $.ajax({
    method: "POST",
    url: "http://http://localhost:3007/dogs",

    data: {
      "PetNumber": "12",
      "PetName" : $('input[name="savePetName"]').val(),
      "PetPhoto": $('input[name="savePetPhoto"]').val(),
      "PetBreed": $('input[name="savePetBreed"]').val(),
      "PetPrice": $('input[name="savePetPrice"]').val(),
      "FavActivity": $('input[name="savePetActivity"]').val(),
      "FavSnack": $('input[name="savePetSnack"]').val(),
      "PetDescription": $('input[name="savePetDesc"]').val(),

    }
    .success(function(data, status){
      console.log("Successful post!")
    })
  });
});
