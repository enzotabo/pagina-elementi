$(document).ready(function(){

	//Provando a cambiare il CSS da JS
	/*
	$(".quadrato").on("click",function(){
		var quad;
		quad = document.getElementById(this);
		quad.style.background-color="red";
	});
	*/
	$(".quadrato").on("click",function(){
		if($(this).hasClass("oscilla")){
			$(this).removeClass("oscilla");
			$(this).removeClass("centro");
		}
		else
			if($(this).hasClass("centro"))
			$(this).addClass("oscilla");
		else
			$(this).addClass("centro");
	})
});