$(document).ready(function(){

//Controllo del bottone Menu
	$("#bottone").on("click", function(){
		openNav();	

	})

	$("#contactButton").on("click", function(){
			closeNav();
	})

	$("#bottone2").on("click", function(){
			closeNav();
	})

// Top Scroll Buttono
	$("#logoFooterHome").on("click", function(){
		topFunction();
	})

	

	/* Open when someone clicks on the span element */
	function openNav() {
	    document.getElementById("myNav").style.width = "100%";
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
	    document.getElementById("myNav").style.width = "0%";
	}
	//Function of Top Scroll
	function topFunction() {
    	document.body.scrollTop = 0;
    	document.documentElement.scrollTop = 0;
}
	
});