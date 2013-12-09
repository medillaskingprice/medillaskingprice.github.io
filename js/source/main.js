/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */

// @codekit-prepend "jquery.parallax.js";

jQuery(document).ready(function(){
	
	jQuery('#molly-parallax .parallax-layer').parallax({
		mouseport: jQuery('#molly-parallax')
	});
	
	jQuery('#beer-parallax .parallax-layer').parallax({
		mouseport: jQuery('#beer-parallax')
	});
	
	jQuery('#dotedu-parallax .parallax-layer').parallax({
		mouseport: jQuery('#dotedu-parallax')
	});
	
	
});