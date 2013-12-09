$(document).ready(function(){
	//$(".img1").waypoint(function() {
  	//	$(".img1").attr("src", "img/headimg2.png");
	//}, {offset: 100});
	//$(".img1").waypoint(function(){
	//	$(".img1").attr("src", "img/WhiteMolly.png");
	//}, {offset: 50});
	//$(".img1").waypoint(function() {
	//	$(".img1").attr("src", "img/headimg1.png");
	//}, {offset: 101});

	$('.outerdeck').waypoint(function(){
		$('#video_background').css("opacity", 0);
		$('.headerimg').css("opacity", 0);
		$('.deck').css("opacity", 1);
	}, {offset: -165});
	
	$('.outerdeck').waypoint(function(){
		$('#video_background').css("opacity", .15);
		$('.headerimg').css("opacity", .15);
		$('.deck').css("opacity", 0);
	}, {offset: -150});
	
	$('.outerdeck').waypoint(function(){
		$('#video_background').css("opacity", 1);
		$('.headerimg').css("opacity", 1);
		$('.deck').css("opacity", 0);
	}, {offset: -149});
	
});

