$(document).on("click", "#btnempezar", 
		function(){
	//alert("Hola Mundo javaaa")
	let usuario = $("#txtusuario").val();
	let password = $("#txtpassword").val();
	$("#lbldatos").text("Usuarioo: "+ usuario + " - Password: " password);$("#modalempezar").modal("show");
	
	
	$("#modalempezar").modal("show");
})