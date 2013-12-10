/**
	JOUR 435 Starter Kit
	Designed and built by Zach Wise at VéritéCo
*/  

/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */

// @codekit-prepend "source/jquery.smooth-scroll.js";

// @codekit-prepend "source/bootstrap/bootstrap-transition.js";
// @codekit-prepend "source/bootstrap/bootstrap-scrollspy.js";
// @codekit-prepend "source/bootstrap/bootstrap-tab.js";
// @codekit-prepend "source/bootstrap/bootstrap-tooltip.js";
// @codekit-prepend "source/bootstrap/bootstrap-button.js";
// @codekit-prepend "source/bootstrap/bootstrap-carousel.js";
// @codekit-prepend "source/bootstrap/bootstrap-collapse.js";
// @codekit-prepend "source/bootstrap/bootstrap-modal.js";
// @codekit-prepend "source/bootstrap/bootstrap-dropdown.js";

// @codekit-prepend "source/bootswatch.js";

// @codekit-prepend "source/waypoints.js";

/* Google Analytics 
================================================== */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-27443321-2', 'theaskingprice.org');
ga('send', 'pageview');


$(document).ready(function(){
	
	/* IS IT MOBILE
	================================================== */
	var is_mobile 				= false;

	if( $('#not-mobile').css('display') == 'none' ) {
		is_mobile = true;      
	}
	
});