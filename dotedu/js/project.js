$(document).ready(function(){
	$('a').smoothScroll();
});


//ensure the web page (DOM) has loaded
      document.addEventListener("DOMContentLoaded", function () {
		  
	var pop = Popcorn("#chickens");
	var chickens_p = $('#chickens').offset();
	var window_height = $( window ).height();
	var window_width = $( window ).width();
	var new_width;
	console.log(window_width);		
//making full video regardless of browser width 				
 		function resizeVideo() {
 				var window_height = $( window ).height();
				var window_width = $( window ).width();
				var new_width;
					if (window_width > 1200) {
						new_width = 1000;
						$('#container-id').css({
							width: new_width,
							margin: '0 auto'
						})
 						
					} else if (window_width < 500) {
						$('#container-id').css({
							width: '100%'
						})
						
					} else {
						$('#container-id').css({
							width: '100%'
						})
					}
				}
			resizeVideo();			
 			$( window ).resize(function() {
				resizeVideo();
			});	
 
// Create a popcorn instance by calling Popcorn("id='id-of-my-video")
		
        // play the video right away
        $("button").click(function(){
        	resizeVideo();
         	pop.play();
         	});
         	
//how to loop a section pop.code({
        		//start: 10, //3:32
        		//onStart: function( options ){         
          			//pop.play( 5 ); //4:06
        		//close pop.code
        		//}	
     		//});         	

//Question 1. Go to college or no, no consequence
      		pop.code({
        		start: 28.5,
        		onStart: function( options ){         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='yep'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='ugh'></button>");
          			pop.pause();
          			//create click listener
          			if (window_width > 1200) {
          				$('#yep').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '38%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#yep').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '10%',
 							'margin-left': '30%'
						})
					} else {
						$('#yep').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '20%',
 							'margin-left': '35%'
 						})
 						}
          			$("#yep").click(function(){
						//create play video at specified time
							pop.play( 28.5 );
							$("button").hide();
							$("#progressbar").css('width', '10%');
         					//close button listener
         					});
         			
         			  if (window_width > 1200) {
          				$('#ugh').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '35%',
							'margin-top': '30%'
 						})
 					} else if (window_width < 500) {
						$('#ugh').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '40%',
 							'margin-left': '30%'

						})
					} else {
						$('#ugh').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '40%',
 							'margin-left': '35%'
 						})
 						}
         				//create click listener
          			$("#ugh").click(function(){
						//create play video at specified time
							pop.play( 28.5 );
							$("button").hide();
							$("#progressbar").css('width', '10%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//Listen to Carly and Joe, no consequence
      		pop.code({
        		start: 166, //2:46
        		onStart: function( options ){         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='carly'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='joe'></button>");
					$("#footnotediv3").html("<button class='tbutton' id='continue'>Continue</button>");
     				pop.pause();
          				//create click listener
          				if (window_width > 1200) {
          				$('#carly').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '45%'
 						})
 					} else if (window_width < 500) {
						$('#carly').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '-50%',
 							'margin-left': '50%'

						})
					} else {
						$('#carly').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '0%',
 							'margin-left': '55%'
 						})
 						}
          				$("#carly").click(function(){
							//create play video at specified time
								pop.play( 186 ); //3:06
								$("button").hide();
								pop.code({
        							start: 232, //3:52
        							onStart: function( options ){         
          							pop.play( 165 ); //2:45
        							}	
     							}); 
         						
         						//close button listener
         						});
         						
         				//create click listener
         				if (window_width > 1200) {
          				$('#joe').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '10%',
							'margin-top': '15%'
 						})
 					} else if (window_width < 500) {
						$('#joe').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
						})
					} else {
						$('#joe').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '25%',
 							'margin-left': '5%'
 						})
 						}
          				$("#joe").click(function(){
							//create play video at specified time,
								pop.play( 233 ); //3:53 
								$("button").hide();
								pop.code({
        							start: 263, //4:23
        							onStart: function( options ){         
          							pop.play( 165 ); //2:45
        							}	
     							});
								
         						//close button listener
         						});

         				//create click listener
         				if (window_width > 1200) {
          				$("#continue").css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '15%',
							'margin-top': '65%'
 						})
 					} else if (window_width < 500) {
						$("#continue").css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '5%',
 							'margin-left': '60%',
 							'font-size': '.9em'

						})
					} else {
						$("#continue").css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '25%',
 							'margin-left': '75%'
 						})
 						}

          				$("#continue").click(function(){
							//create play video at specified time,
								pop.play( 263 ); //4:23 
								$("button").hide();	
								$("#progressbar").css('width', '20%');	
								
         				//close button listener
         				});
     				 				
          			//close onstart function
        			},
        	//close pop.code	
     		});
     		
     		//is overriding the click listeners: pop.code({
        					//start: 185, //3:05
        					//onStart: function( options ){         
          					//pop.play( 167 ); //2:47
        					//}	
     					//});
     		     			
//run code to call a button for FAFSA questions
      		pop.code({
        		start: 283, //4:43
        		onStart: function( options ){         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='noway'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='parents'></button>");
          			$("#footnotediv3").html("<button class='tbutton' id='yesfafsa'></button>");
          			pop.pause();
          			//create click listener
          			$('#yesfafsa').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#yesfafsa").click(function(){
						//create play video
							pop.play( 316 ); //5:16
							$("button").hide();
							$("#progressbar").css('width', '35%');
         					//close button listener
         					});
         			$('#noway').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#noway").click(function(){
						//Jump to segment toward end, jump back, same track overall
							pop.play( 1226 ); //20:26
							$("button").hide();
							$("#progressbar").css('width', '35%');
							pop.code({
        								start: 1262, //21:02
        								onStart: function( options ) { 
        								pop.play( 316 ); //5:16
        								//close onstart
        								},
        						//close pop.code
        						});
         					//close button listener
         					});
         			$('#parents').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#parents").click(function(){
						//Jump to segment toward end, jump back, same track overall
							pop.play( 1226 ); //20:26
							$("button").hide();
							$("#progressbar").css('width', '35%');
								pop.code({
        								start: 1262, //21:02
        								onStart: function( options ) { 
        								pop.play( 316 ); //5:16
        								//close onstart
        								},
        						//close pop.code
        						});
         					//close button listener
         					});
          			//close onstart function
        			},
        	//close pop.code	
     		});
     		
     //code to call a button for Keep Going
      		pop.code({
        		start: 354, //5:54
        		onStart: function( options ){         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='keepgoing'></button>");
          			pop.pause();
          			//create click listener
          			if (window_width > 1200) {
          				$('#keepgoing').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#keepgoing').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#keepgoing').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '32%',
 							'margin-left': '60%'
 						})
 						}
          			$("#keepgoing").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 355 ); //5:54
							$("button").hide();
							$("#progressbar").css('width', '45%');
         					//close button listener
         					});
          			//close onstart function
        			},
        	//close pop.code	
     		});
     		
//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 436, //7:16
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='call'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='nocall'></button>");
          			pop.pause();
          			$('#call').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			//create click listener
          			$("#call").click(function(){
						//play video right away
							pop.play( 442.5 ); //7:22.5 
							$("button").hide();
							$("#progressbar").css('width', '55%');
         					//close button listener
         					});
         			$('#nocall').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 					});
         			//create click listener
          			$("#nocall").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 436 ); //7:16 
							$("button").hide();
							$("#progressbar").css('width', '55%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//Cara's college weekend
      		pop.code({
      			start: 768, //12:48
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='frat'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='football'></button>");
          			$("#footnotediv3").html("<button class='tbutton' id='nicksparks'></button>");
          			pop.pause();
          			$('#frat').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			//create click listener
          			$("#frat").click(function(){
						//create play video at specified time
							pop.play( 768 ); //12:48
							$("button").hide();
							$("#progressbar").css('width', '60%');
							      pop.code({
        								start: 780, //13:00
        								onStart: function( options ) { 
        								pop.play( 808 ); //13:28
        								//close onstart
        								},
        						//close pop.code
        						});
        			//close button listener
        			});
         			
         			//create click listener
         			$('#football').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#football").click(function(){
						//create play video at specified time
							pop.play( 781 ); //13:01
							$("button").hide();
							$("#progressbar").css('width', '60%');
									pop.code({
        								start: 789, //13:09
        								onStart: function( options ) { 
        								pop.play( 808 ); //13:28
        								//close onstart
        								},
        					//close pop.code
        					});
         		//close button listener
         		});
         			//create click listener
         			$('#nicksparks').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#nicksparks").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 790 ); //13:10
							$("button").hide();
							$("#progressbar").css('width', '60%');
         					//close button listener
         					});
         		//close onstart
         		},
         	//close pop.code
         	});
//Does Cara want the oncampus experience? Split to jammies/street clothes based on response
      		pop.code({
        		start: 839, //13:59
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='liveitup'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='likemyfolks'></button>");
          			pop.pause();
          			$('#liveitup').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			//create click listener
          			$("#liveitup").click(function(){
						//create play video at specified time
							pop.play( 840 ); //14:00
							$("button").hide();
							$("#progressbar").css('width', '70%');
         					//close button listener
         					});
         			$('#likemyfolks').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#likemyfolks").click(function(){
						//create play video at specified time
							pop.play( 1263 ); //21:03
							$("button").hide();
							$("#progressbar").css('width', '70%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			     
//No consequence just encouragement
      		pop.code({
        		start: 854, //14:14
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='keepon'></button>");
          			pop.pause();
          			if (window_width > 1200) {
          				$('#keepon').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '48%',
							'margin-top': '14%'
 						})
 					} else if (window_width < 500) {
						$('#keepon').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#keepon').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '23%',
 							'margin-left': '60%'
 						})
 						}
          			//create click listener
          			$("#keepon").click(function(){
						//create play video at specified time
							pop.play( 854 ); //14:14
							$("button").hide();
							$("#progressbar").css('width', '70%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     						
//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 919, //15:19
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='all'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='none'></button>");
          			pop.pause();
          			//create click listener
          			$('#all').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#all").click(function(){
						//create play video at specified time
							pop.play( 919.5 ); //15:19.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
         			$('#none').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#none").click(function(){
						//create play video at specified time
							pop.play( 919.5 ); //15:19.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			
//run code to call a button, with click listener
      		pop.code({
        		start: 1022, //17:02
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='majormajormajor'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='gimmetime'></button>");
          			pop.pause();
          			$('#gimmetime').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         				//create click listener
          			$("#gimmetime").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1022.5 ); //17:02.5
							$("button").hide();
							$("#progressbar").css('width', '80%');
         					//close button listener
         					});
         			$('#majormajormajor').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#majormajormajor").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1459.5 ); //24:19.5
							$("button").hide();
							$("#progressbar").css('width', '80%');
		
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 1045, //17:25
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='keepswimming'></button>");
          			pop.pause();
          				if (window_width > 1200) {
          				$('#keepswimming').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '15%',
							'margin-top': '2%'
 						})
 					} else if (window_width < 500) {
						$('#keepswimming').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '0%',
							'margin-top': '5%'
						})
					} else {
						$('#keepswimming').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '5%',
 							'margin-left': '8%'
 						})
 						}
          			//create click listener
          			$("#keepswimming").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1475 ); //24:35
							$("button").hide();
							$("#progressbar").css('width', '85%');
         					//close button listener
         					});
          			//create click listener
          			$("#keepswimming").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1046 ); //17:26
							$("button").hide();
							$("#progressbar").css('width', '85%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			
//run code to call a button for pop quiz
      		pop.code({
        		start: 1072, //17:52,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='ut'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='os'></button>");
          			$("#footnotediv3").html("<button class='tbutton' id='up'></button>");
          			pop.pause();
          			//create click listener
          			$('#ut').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#ut").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1082 ); //18:02
							$("button").hide();
							$("#progressbar").css('width', '65%');
         					//close button listener
         					});
         			$('#os').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			//create click listener
          			$("#os").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1082 ); //18:02
							$("button").hide();
							$("#progressbar").css('width', '65%');
         					//close button listener
         					});
         			$('#up').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
					$("#up").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1073 ); //17:53
							$("button").hide();
							$("#progressbar").css('width', '65%');
								pop.code({
        								start: 1081.5, //18:01.5
        								onStart: function( options ) { 
        								pop.play( 1091.5 ); //18:11.5
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			
     			
//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 1350, //22:30
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='alltwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='nonetwo'></button>");
          			pop.pause();
          			//create click listener
          			$('#alltwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#alltwo").click(function(){
						//create play video at specified time
							pop.play( 1350.5 ); //22:30.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
         			$('#nonetwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			$("#nonetwo").click(function(){
						//create play video at specified time
							pop.play( 1350.5 ); //22:30.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//run code to call a button, with click listener
      		pop.code({
        		start: 1459, //24:19
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='majormajormajortwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='gimmetimetwo'></button>");
          			pop.pause();
          			$('#gimmetwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			  //create click listener
          			$("#gimmetimetwo").click(function(){
						//create play video at specified time
							pop.play( 1022.5 ); //17:02.5
							$("button").hide();
							$("#progressbar").css('width', '80%');
         					//close button listener
         					});
         				//create click listener
         			$('#majormajormajortwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#majormajormajortwo").click(function(){
						//create play video at specified time
							pop.play( 1459.5 ); //24:19.5
							$("button").hide();
							$("#progressbar").css('width', '80%');
		
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
  

//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 1474, //24:34
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='keepswimmingtwo'></button>");
          			pop.pause();
	if (window_width > 1200) {
          				$('#keepswimmingtwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '55%',
							'margin-top': '0%'
 						})
 					} else if (window_width < 500) {
						$('#keepswimmingtwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '5%',
							'margin-top': '50%'
						})
					} else {
						$('#keepswimmingtwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '5%',
 							'margin-left': '63%'
 						})
 						}
          			//create click listener
          			$("#keepswimmingtwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1475 ); //24:35
							$("button").hide();
							$("#progressbar").css('width', '85%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//run code to call a button for question 12 should cara live w debt
      		pop.code({
        		start: 1208, //20:10,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='hellno'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='letsgo'></button>");
          			pop.pause();
          			//create click listener
          			$('#hellno').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			$("#hellno").click(function(){
						//create play video at specified time
							pop.play( 1668.5 ); //27:48.5
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1700, //28:20
        								onStart: function( options ) { 
        								pop.play( 1722 ); //28:42
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
         		    $('#letsgo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});      			//create click listener
          			$("#letsgo").click(function(){
						//create play video at specified time
							pop.play( 1700.5 ); //28:20.5
							$("button").hide();
							$("#progressbar").css('width', '70%');

         					//close button listener
         					});
    				},
         	});
 
 //run code to call a button for pop quiz
      		pop.code({
        		start: 1518, //25:18,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='uttwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='ostwo'></button>");
          			$("#footnotediv3").html("<button class='tbutton' id='uptwo'></button>");
          			pop.pause();
          			$('#uttwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
          			//create click listener
          			$("#uttwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1533 ); //25:33
							$("button").hide();
							$("#progressbar").css('width', '90%');
         					//close button listener
         					});
         			$('#ostwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
         			//create click listener
          			$("#ostwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1533 ); //25:33
							$("button").hide();
							$("#progressbar").css('width', '90%');
         					//close button listener
         					});
         			$('#uptwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px'
 							});
					$("#uptwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1518.5 ); //25:18.5
							$("button").hide();
							$("#progressbar").css('width', '90%');
								pop.code({
        								start: 1532.5, //25:32.5
        								onStart: function( options ) { 
        								pop.play( 1544 ); //25:44
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			
//run code to call a button for question 12 should cara live w debt
      		pop.code({
        		start: 1656, //27:36,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='hellnotwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='letsgotwo'></button>");
          			pop.pause();
          			if (window_width > 1200) {
          				$('#hellnotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '65%',
							'margin-top': '28%'
 						})
 					} else if (window_width < 500) {
						$('#hellnotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#hellnotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '40%',
 							'margin-left': '70%'
 						})
 						}	
          			//create click listener
          			$("#hellnotwo").click(function(){
						//create play video at specified time
							pop.play( 1658 ); //27:38
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1668, //27:48
        								onStart: function( options ) { 
        								pop.play( 1722 ); //28:42
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
					if (window_width > 1200) {
          				$('#letsgotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '65%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#letsgotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#letsgotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '25%',
 							'margin-left': '70%'
 						})
 						}		
         			//create click listener
          			$("#letsgotwo").click(function(){
						//create play video at specified time
							pop.play( 1668.5 ); //27:48.5
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1700, //28:20
        								onStart: function( options ) { 
        								pop.play( 1722 ); //28:42
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
    				},
         	});
    
//Get the Cara's graduation results
//todo:
//make single button take people to different results
//create variable
//assign variable a value
//define variable and give value
//if else, if variable is 1-33 go here; if 33-79 go here etc
      		pop.code({
        		start: 1750, //29:10
        		onStart: function( options ) { 
        		var resultsSucker = Math.floor((Math.random()*100)+1);         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='results'></button>");
          			$("#results").addClass(resultsSucker)
          			pop.pause();
          			//create click listener
          			if (window_width > 1200) {
          				$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '38%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '12%',
 							'margin-left': '60%'
 						})
 						}
          			$("#results").click(function(){
          				if (resultsSucker < 30) {
						//create play video at specified time
							pop.play( 1753 ); //29:13
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1773.5, //29:33.5
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else if (30 < resultsSucker < 55){
         				pop.play( 1774 ); //29:34
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1795.5, //29:55.5
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else if (55 < resultsSucker < 80){
         				pop.play( 1795.5 ); //29:55.5
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1823, //30:23
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         					} else {
         				pop.play( 1823 ); //30:23
							$("button").hide();
							$("#progressbar").css('width', '100%');
         				}
         				
         				//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     		
      		pop.code({
        		start: 1780, //29:40
        		onStart: function( options ) { 
        		var resultsSucker = Math.floor((Math.random()*100)+1);         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='results'></button>");
          			$("#results").addClass(resultsSucker)
          			pop.pause();
          			//create click listener
          			if (window_width > 1200) {
          				$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '38%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '50%'
						})
					} else {
						$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '12%',
 							'margin-left': '60%'
 						})
 						}
          			$("#results").click(function(){
          				if (resultsSucker < 30) {
						//create play video at specified time
							pop.play( 1753 ); //29:13
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1773.5, //29:33.5
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else if (30 < resultsSucker < 55){
         				pop.play( 1774 ); //29:34
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1795.5, //29:55.5
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else if (55 < resultsSucker < 80){
         				pop.play( 1795.5 ); //29:55.5
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1823, //30:23
        								onStart: function( options ) { 
        								pop.play( 1840 ); //30:40
        								//close onstart
        								},
        					//close pop.code
        					});
         					} else {
         				pop.play( 1823 ); //30:23
							$("button").hide();
							$("#progressbar").css('width', '100%');
         				}
         				
         				//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			     
//run code to call a button, with click listener, that plays at a specific time segment
      		pop.code({
        		start: 1862, //31:02
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='playagain'></button>");
          			if (window_width > 1200) {
          				$('#playagain').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '38%',
							'margin-top': '18%'
 						})
 					} else if (window_width < 500) {
						$('#playagain').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-left': '25%'
						})
					} else {
						$('#playagain').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '18%',
 							'margin-left': '35%'
 						})
 						}
          			//create click listener
          			$("#playagain").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 0 );
							$("#button").hide();
							$("#progressbar").css('width', '0%');
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});			
 //closing ready function
    }, false);