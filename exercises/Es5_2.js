$(document).ready(function(){
	var num1 = 0, num2;
	function reset(){
		$("#c1").removeClass("spostaDestra2");
    $("#c1").addClass("spostaDestra1");
		$("#q1").addClass("spostaDestra2");
		document.getElementById("Conta").style.display = "none";
		num1 = 0;
		num2 = 0;
	}

	function contaDispari(num2){  
  		if($("#c1").hasClass("dispari")){
  			setTimeout(function(){
  				document.getElementById("Conta").innerHTML = num2;
  				num2 = num2+2;
  				contaDispari(num2);
  			}, 1000);
  		}
  		$("#c1").on("click", function(){
        $("#c1").removeClass("dispari");
        reset();
  		})
  	}


	function conta(){  
		if($("#c1").hasClass("pari")){
  			setTimeout(function(){
  				document.getElementById("Conta").innerHTML = num1;
  				num1 = num1+2;
  				conta();
  			}, 1000);
  		}
  		$("#c1").on("click", function(){
      num2 = num1+1;
      $("#c1").removeClass("pari");
      $("#c1").addClass("dispari");
  		contaDispari(num2);
  		})
  	}

	$("#c1").on("click", function(){
  		if($("#c1").hasClass("spostaDestra2")){
    		$("#c1").removeClass("cerchio");
    		$("#c1").addClass("pari");
      		stop1 = false;	
      			conta();
  		}
	}) 

	$("#q1").on("click", function(){
  		$("#q1").addClass("spostaDestra1");
  		$("#c1").addClass("spostaDestra2");
	})
});