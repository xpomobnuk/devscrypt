$(document).ready(function() {


	$(".language").click(function(event) {
			event.preventDefault();
		if ( $(this).hasClass("active")) {
			$(this).removeClass("active");

		} else {
			$(this).addClass("active");
		}
	});


	// $(".toggle-mnu").click(function() {
	// 	if(!$(this).hasClass("on")){
	// 		$(this).addClass("on")
	// 	}else{
	// 		$(this).removeClass("on");
	// 	}
	// });



// $(".top_text").removeClass("h_opacify");
//   $( this ).find( ".top_mnu" ).stop( true, true ).fadeIn(600);


// $(".top_text").addClass("h_opacify");
//   $( this ).find( ".top_mnu" ).stop( true, true ).fadeOut(600);
 	// if ($(".top_mnu li").click(function()  {
 	// 	$(".toggle-mnu").removeClass("on");
 	// })

 // });

 // $(".top_mnu ul a").click(function(){
 // 	$(".top_mnu").fadeOut(600);
 // })
 

 // $(".toggle-mnu").click(function() {
	// 	alert("ara222");
 // 	$(".top_mnu").stop( true, true ).fadeIn(600);


 // }, function() {

 // 	$(".top_mnu").stop( true, true ).fadeOut(600);

 // });

 var ara=0;


 $(".toggle-mnu").on('click',function(event){
 	event.preventDefault();
 	$(this).toggleClass("on");
 	if(ara){
 		$(".top_mnu").stop(true,true).show().removeClass('fadeInDown').addClass('fadeOutUp');
 		ara = 0;
 	}else{
 		
 		$(".top_mnu").stop(true,true).show().removeClass('fadeOutUp').addClass('fadeInDown');	
 		ara = 1;
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



