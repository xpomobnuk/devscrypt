$(document).ready(function() {


	$(".lang").click(function() {
			if ( $(this).hasClass("active")) {
					$(this).removeClass("active");

			} else {
				$(this).addClass("active");
			}
		});


$(".toggle-mnu").click(function() {
 	$(this).toggleClass("on");
 });

 $(".top_mnu ul a").click(function(){
	 $(".top_mnu").fadeOut(600);
	 })
 
$(".toggle-mnu").click(function(){
	// alert("ara");
	if ($(".top_mnu").is(":visible")){
		$(".top_text").removeClass("h_opacify");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").addClass("h_opacify");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	}
});



$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$(".menu_wrap").addClass("fixed");
		} else {
			$(".menu_wrap").removeClass("fixed");
		}
	});












	
	});
	  


