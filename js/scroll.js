//Scroll suau
$(document).ready(function(){
	$("#menu a").click(function(e){
		/* preventDefault evita la redirecció */
		e.preventDefault();
		
		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});

		return false;
	})
});