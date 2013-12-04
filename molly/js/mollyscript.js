$(document).ready(function(){
	$(".img1").waypoint(function() {
  		$(".img1").attr("src", "img/headimg2.png");
	}, {offset: 100});
	$(".img1").waypoint(function(){
		$(".img1").attr("src", "img/WhiteMolly.png");
	}, {offset: 50});
	$(".img1").waypoint(function() {
		$(".img1").attr("src", "img/headimg1.png");
	}, {offset: 101});
});

$('.outerdeck').waypoint(function() {
	$('.outerdeck').css(  
}, { offset: '25%' });