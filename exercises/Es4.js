$(document).ready(function(){
	$("#quadrato").on("click", function(){
  		$("#quadrato").addClass("sposta");
  		$("#forma").addClass("compare");
	})

function diventaQuad(){
	$("#forma").removeClass("cerchio");
  	$("#forma").removeClass("compare");
  	$("#forma").addClass("red");
}

$("#forma").on("click", function(){
  	if($("#forma").hasClass("ruota")){
    	$("#forma").removeClass("ruota");
    	$("#forma").addClass("sposta");
    	$("#quadrato").removeClass("sposta");
  	}
  else
    	if(!$("#forma").hasClass("cerchio"))
      		$("#forma").addClass("ruota");
    	else
      		diventaQuad();
})
/*Punto 5 : Non riesco a far comparire il quad verde dopo l'animazione */
});