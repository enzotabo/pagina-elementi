$(document).ready(function(){
function cambiaUnoDue(){
  $('#uno').removeClass("pos1");
  $('#uno').addClass("pos2");
  $('#due').removeClass("pos2");
  $('#due').addClass("pos1");
}

$("#uno").on("click", function() {
  if($("#uno").hasClass("pos2")){
    $("#quadrato").addClass("ruota");
  }
  else
    cambiaUnoDue();
})

$(".quadratino").hover(function() {
  if($("#quadrato").hasClass("ruota"))
    $("#quadrato").removeClass("ruota")
})
});