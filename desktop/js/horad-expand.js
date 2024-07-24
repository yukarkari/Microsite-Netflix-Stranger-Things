$(document).ready(function() {
    setTimeout(function() {
		$(".expand-banner-hor").fadeIn(100); 
	},1);
	
	$(".expand-banner-hor").mouseleave(function () {
		
		$(".expand-banner-hor").animate({
							bottom: -493,
						},500);	
		$(".expand-banner-hor").css('zIndex', '0');	
		$(".banner-small").animate({
							bottom:0,
						},500);
    });
	
	$(".banner-small").mouseenter(function () {
		alert("asd");
		$(".expand-banner-hor").animate({
							bottom: 0,
						},500);
		$(this).animate({
							bottom:-50,
						},500);
    });
	
});