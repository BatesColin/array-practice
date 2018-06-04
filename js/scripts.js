
$(document).ready(function() {
  console.log("HI");
  $("#formOne").submit(function(event) {

    var animal = $("input#fav1").val();
    var music = $("input#fav2").val();
    var movie = $("input#fav3").val();
    var game = $("input#fav4").val();
    var place = $("input#fav5").val();

    $(".favorites").append("<p>"+animal+"</p>"+"<p>"+music+"</p>"+"<p>"+movie+"</p>"+"<p>"+game+"</p>"+"<p>"+place+"</p>");

$("#result").show();

  event.preventDefault();

});
});
