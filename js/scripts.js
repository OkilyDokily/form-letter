$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    $(".name").text($("#name").val());
    $("#letter").show()
  })
});