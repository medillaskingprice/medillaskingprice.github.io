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
	var chickens_right = $("#chickens").offset().left + $("#chickens").outerWidth()
	console.log(window_width);		
//making full video regardless of browser width 				
 		// function resizeVideo() {
//  				var window_height = $( window ).height();
// 				var window_width = $( window ).width();
// 				var new_width;
// 					if (window_width > 1200) {
// 						new_width = 1000;
// 						$('#container-id').css({
// 							width: new_width,
// 							margin: '0 auto'
// 						})
//  						
// 					} else if (window_width < 500) {
// 						$('#container-id').css({
// 							width: '100%'
// 						})
// 						
// 					} else {
// 						$('#container-id').css({
// 							width: '100%'
// 						})
// 					}
// 				}
// 			resizeVideo();			
//  			$( window ).resize(function() {
// 				resizeVideo();
// 			});	
//  
// Create a popcorn instance by calling Popcorn("id='id-of-my-video")
		
        // play the video right away
        $("button").click(function(){
        	//resizeVideo();
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
//           			if (window_width > 1200) {
//           				$('#yep').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '38%',
// 							'margin-top': '18%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#yep').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '10%',
//  							'margin-left': '30%'
// 						})
// 					} else {
// 						$('#yep').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '20%',
//  							'margin-left': '35%'
//  						})
//  						}
//
          			
          				$('#yep').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '260px',
 							'margin-left': '300px'
 						});
          			$("#yep").click(function(){
						//create play video at specified time
							pop.play( 28.5 );
							$("button").hide();
							$("#progressbar").css('width', '10%');
         						pop.code({
        							start: 162, //2:42
        							onStart: function( options ){         
          							pop.play( 186 ); //3:06
        							}	
     							}); 
         					//close button listener
         					});

         			  // if (window_width > 1200) {
//           				$('#ugh').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '35%',
// 							'margin-top': '30%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#ugh').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '40%',
//  							'margin-left': '30%'
// 
// 						})
// 					} else {
// 						$('#ugh').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '40%',
//  							'margin-left': '35%'
//  						})
//  						}
          				$('#ugh').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '420px',
 							'margin-left': '300px'
 						});
         				//create click listener
          			$("#ugh").click(function(){
						//create play video at specified time
							pop.play( 28.5 );
							$("button").hide();
							$("#progressbar").css('width', '10%');
							pop.code({
        							start: 161, //2:41
        							onStart: function( options ){         
          							pop.play( 186 ); //3:06
        							}	
     							});
         					//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});

//Listen to Carly and Joe, no consequence
//       		pop.code({
//         		start: 166, //2:46
//         		onStart: function( options ){         
//           			//create button
//           			$("#footnotediv").html("<button class='tbutton' id='carly'></button>");
//           			$("#footnotediv2").html("<button class='tbutton' id='joe'></button>");
// 					$("#footnotediv3").html("<button class='tbutton' id='continue'>Continue</button>");
//      				pop.pause();
          				//create click listener
          				// if (window_width > 1200) {
//           				$('#carly').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '45%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#carly').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '-50%',
//  							'margin-left': '50%'
// 
// 						})
// 					} else {
// 						$('#carly').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '0%',
//  							'margin-left': '55%'
//  						})
//  						}
          				// $('#carly').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '60px',
//  							'margin-left': '500px'
//  						});
//           				$("#carly").click(function(){
// 							//create play video at specified time
// 								pop.play( 186 ); //3:06
// 								$("button").hide();
// 								pop.code({
//         							start: 232, //3:52
//         							onStart: function( options ){         
//           							pop.play( 164 ); //2:44
//         							}	
//      							}); 
//          						
//          						//close button listener
//          						});
//          						
         				//create click listener
         				// if (window_width > 1200) {
//           				$('#joe').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '10%',
// 							'margin-top': '15%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#joe').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
// 						})
// 					} else {
// 						$('#joe').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '5%'
//  						})
//  						}
          				// $('#joe').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '310px',
//  							'margin-left': '10px'
//  						});
//           				$("#joe").click(function(){
// 							//create play video at specified time,
// 								pop.play( 233 ); //3:53 
// 								$("button").hide();
// 								pop.code({
//         							start: 263, //4:23
//         							onStart: function( options ){         
//           							pop.play( 164 ); //2:44
//         							}	
//      							});
// 								
//          						//close button listener
//          						});

         				//create click listener
         				// if (window_width > 1200) {
//           				$("#continue").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '15%',
// 							'margin-top': '65%'
//  						})
//  					} else if (window_width < 500) {
// 						$("#continue").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '5%',
//  							'margin-left': '60%',
//  							'font-size': '.9em'
// 
// 						})
// 					} else {
// 						$("#continue").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '75%'
//  						})
//  						}
          				// $('#continue').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '400px',
//  							'margin-left': '600px'
//  						});
//           				$("#continue").click(function(){
// 							//create play video at specified time,
// 								pop.play( 263 ); //4:23 
// 								$("button").hide();	
// 								$("#progressbar").css('width', '20%');	
// 								
//          				//close button listener
//          				});
//      				 				
//           			//close onstart function
//         			},
//         	//close pop.code	
//      		});
     		
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
//create click listener
         				// if (window_width > 1200) {
//           				$("#yesfafsa").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '20%',
//  							'margin-left': '65%'
//  						})
//  					} else if (window_width < 500) {
// 						$("#yesfafsa").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '-5%',
//  							'margin-left': '62%'
//  						
// 
// 						})
// 					} else {
// 						$("#yesfafsa").css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '20%',
//  							'margin-left': '75%'
//  					
//  						})
//  						}
          				$('#yesfafsa').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '-10px',
  							'margin-left': '700px'
  							});
 						
          			$("#yesfafsa").click(function(){
						//create play video
							pop.play( 316 ); //5:16
							$("button").hide();
							$("#progressbar").css('width', '35%');
									pop.code({
        								start: 355, //5:55
        								onStart: function( options ) { 
        								pop.play( 361 ); //6:01
        								//close onstart
        								},
        						//close pop.code
        						});
         					//close button listener
         					});
		
         		 // if (window_width > 1200) {
//           				$('#noway').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '110%',
//  							'margin-left': '63%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#noway').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '62%'
// 						})
// 					} else {
// 						$('#noway').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '130%',
//  							'margin-left': '75%'
//  						})
//  						}
          				$('#noway').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '400px',
  							'margin-left': '700px'
  							});
         			$("#noway").click(function(){
						//Jump to segment toward end, jump back, same track overall
							pop.play( 350 ); //5:50
							$("button").hide();
							$("#progressbar").css('width', '35%');

         					//close button listener
         					});
		
         			   // if (window_width > 1200) {
//           				$('#parents').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '62%',
//  							'margin-left': '58%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#parents').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '10%',
//  							'margin-left': '55%'
// 						})
// 					} else {
// 						$('#parents').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '73%',
//  							'margin-left': '65%'
//  						})
//  						}
          				$('#parents').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '100px',
 							'margin-left': '620px'
 						});
         			$("#parents").click(function(){
						//Jump to segment toward end, jump back, same track overall
							pop.play( 350 ); //5:50
							$("button").hide();
							$("#progressbar").css('width', '35%');

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
          			// if (window_width > 1200) {
//           				$('#keepgoing').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%',
// 							'margin-top': '18%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#keepgoing').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#keepgoing').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '32%',
//  							'margin-left': '60%'
//  						})
//  						}
          				$('#keepgoing').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '280px',
 							'margin-left': '620px'
 						});
          			$("#keepgoing").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 360 ); //6:00
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
					// if (window_width > 1200) {
//           				$('#call').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '15%',
//  							'margin-left': '25%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#call').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '15%',
//  							'margin-left': '15%'
// 						})
// 					} else {
// 						$('#call').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '20%',
//  							'margin-left': '20%'
//  						})
//  						} 
          				$('#call').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '120px',
 							'margin-left': '180px' 							
 						});
          			//create click listener
          			$("#call").click(function(){
						//play video right away
							pop.play( 442.5 ); //7:22.5 
							$("button").hide();
							$("#progressbar").css('width', '55%');
         					//close button listener
         					});
			
         			// if (window_width > 1200) {
//           				$('#nocall').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '45%',
//  							'margin-left': '25%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#nocall').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '30%',
//  							'margin-left': '15%'
// 						})
// 					} else {
// 						$('#nocall').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '60%',
//  							'margin-left': '20%'
//  						})
//  						}
          				$('#nocall').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '330px',
 							'margin-left': '180px' 
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
					// if (window_width > 1200) {
//           				$('#frat').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '25%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#frat').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '5%',
//  							'margin-left': '15%'
// 						})
// 					} else {
// 						$('#frat').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '32%',
//  							'margin-left': '22%'
//  						})
//  						}
          				$('#frat').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '170px',
 							'margin-left': '180px' 
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
					// if (window_width > 1200) {
//           				$('#football').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '43%',
//  							'margin-left': '40%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#football').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '22%',
//  							'margin-left': '30%',
//  							height: '5%'
// 						})
// 					} else {
// 						$('#football').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '50%',
//  							'margin-left': '38%'
//  						})
//  						}
          				$('#football').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '290px',
 							'margin-left': '360px' 							
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
					// if (window_width > 1200) {
//           				$('#nicksparks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '60%',
//  							'margin-left': '50%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#nicksparks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '29%',
//  							'margin-left': '42%',
//  							height: '42%'
// 						})
// 					} else {
// 						$('#nicksparks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '68%',
//  							'margin-left': '50%'
//  						})
//  						}
          				$('#nicksparks').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '420px',
 							'margin-left': '500px' 							
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
					// if (window_width > 1200) {
//           				$('#liveitup').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '35%',
//  							'margin-left': '30%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#liveitup').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '20%',
//  							height: '5%'
// 						})
// 					} else {
// 						$('#liveitup').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '50%',
//  							'margin-left': '25%'
//  						})
//  						}
          				$('#liveitup').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '200px',
 							'margin-left': '200px'
 						});
          			//create click listener
          			$("#liveitup").click(function(){
						//create play video at specified time
							pop.play( 840 ); //14:00
							$("button").hide();
							$("#progressbar").css('width', '70%');
         					//close button listener
         					});
					// if (window_width > 1200) {
//           				$('#likemyfolks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '58%',
//  							'margin-left': '30%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#likemyfolks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '37%',
//  							'margin-left': '20%',
//  							height: '5%'
// 						})
// 					} else {
// 						$('#likemyfolks').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '80%',
//  							'margin-left': '25%'
//  						})
//  						}
          				$('#likemyfolks').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 							'margin-top': '370px',
 							'margin-left': '220px'
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
          			// if (window_width > 1200) {
//           				$('#keepon').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '48%',
// 							'margin-top': '14%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#keepon').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#keepon').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '23%',
//  							'margin-left': '60%'
//  						})
//  						}
          				$('#keepon').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '170px',
 							'margin-left': '600px' 							
 						});
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
			// if (window_width > 1200) {
//           				$('#all').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '50%',
//  							'margin-left': '20%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#all').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '30%',
//  							'margin-left': '10%'
// 						})
// 					} else {
// 						$('#all').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '65%',
//  							'margin-left': '15%'
//  						})
//  						}
          				$('#all').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '340px',
 							'margin-left': '120px' 							
 						});
          			$("#all").click(function(){
						//create play video at specified time
							pop.play( 919.5 ); //15:19.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
         		// if (window_width > 1200) {
//           				$('#none').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '22%',
//  							'margin-left': '20%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#none').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '10%',
//  							'margin-left': '10%'
// 						})
// 					} else {
// 						$('#none').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '30%',
//  							'margin-left': '15%'
//  						})
//  						}
          				$('#none').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '150px',
 							'margin-left': '120px' 							
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
         		// if (window_width > 1200) {
//           				$('#gimmetime').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '200%',
//  							'margin-left': '13%'
//  							
//  						})
//  					} else if (window_width < 500) {
// 						$('#gimmetime').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '700%',
//  							'margin-left': '10%'
// 						})
// 					} else {
// 						$('#gimmetime').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '398%',
//  							'margin-left': '5%'
//  						})
//  						}
          				$('#gimmetime').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '310px',
 							'margin-left': '50px' 							
 						});
         				//create click listener
          			$("#gimmetime").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1022.5 ); //17:02.5
							$("button").hide();
							$("#progressbar").css('width', '80%');
         					//close button listener
         					});
				// if (window_width > 1200) {
//           				$('#majormajormajor').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '100%',
//  							'margin-left': '13%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#majormajormajor').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '665%',
//  							'margin-left': '10%'
// 						})
// 					} else {
// 						$('#majormajormajor').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '355%',
//  							'margin-left': '5%'
//  						})
//  						}
          				$('#majormajormajor').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '150px',
 							'margin-left': '50px' 							
 						});
         			$("#majormajormajor").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1460.5 ); //24:20.5
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
          				// if (window_width > 1200) {
//           				$('#keepswimming').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '15%',
// 							'margin-top': '2%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#keepswimming').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '0%',
// 							'margin-top': '5%'
// 						})
// 					} else {
// 						$('#keepswimming').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '5%',
//  							'margin-left': '8%'
//  						})
//  						}
          				$('#keepswimming').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 						});
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
          			// if (window_width > 1200) {
//           				$('#ut').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '172%',
//  							'margin-left': '35%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#ut').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '685%',
//  							'margin-left': '33%'
// 						})
// 					} else {
// 						$('#ut').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '493%',
//  							'margin-left': '33%'
//  						})
//  						} 
          				$('#ut').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '100px',
 							'margin-left': '330px' 							
 						});
          			$("#ut").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1082 ); //18:02
							$("button").hide();
							$("#progressbar").css('width', '65%');
         					//close button listener
         					});
         		// if (window_width > 1200) {
//           				$('#os').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '193%',
//  							'margin-left': '35%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#os').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '725%',
//  							'margin-left': '33%'
// 						})
// 					} else {
// 						$('#os').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '547%',
//  							'margin-left': '33%'
//  						})
//  						} 
						$('#os').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '240px',
 							'margin-left': '330px' 							
 						});
         			//create click listener
          			$("#os").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1082 ); //18:02
							$("button").hide();
							$("#progressbar").css('width', '65%');
         					//close button listener
         					});
         			// if (window_width > 1200) {
//           				$('#up').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '214%',
//  							'margin-left': '35%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#up').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '760%',
//  							'margin-left': '33%'
// 						})
// 					} else {
// 						$('#up').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '597%',
//  							'margin-left': '33%'
//  						})
//  						} 
						$('#up').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '360px',
 							'margin-left': '330px' 							
 						});
					$("#up").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1073 ); //17:53
							$("button").hide();
							$("#progressbar").css('width', '65%');
								pop.code({
        								start: 1082, //18:02
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
         			// if (window_width > 1200) {
//           				$('#alltwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '60%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#alltwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '18%',
//  							'margin-left': '63%'
// 						})
// 					} else {
// 						$('#alltwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '35%',
//  							'margin-left': '75%'
//  						})
//  						}
						$('#alltwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '210px',
 							'margin-left': '710px'							
 						});
          			$("#alltwo").click(function(){
						//create play video at specified time
							pop.play( 1350.5 ); //22:30.5
							$("button").hide();
							$("#progressbar").css('width', '75%');
         					//close button listener
         					});
         			// if (window_width > 1200) {
//           				$('#nonetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '50%',
//  							'margin-left': '68%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#nonetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '30%',
//  							'margin-left': '63%'
// 						})
// 					} else {
// 						$('#nonetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '55%',
//  							'margin-left': '75%'
//  						})
//  						}
						$('#nonetwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
  							'margin-top': '360px',
 							'margin-left': '710px' 							
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
         			// if (window_width > 1200) {
//           				$('#gimmetimetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '208%',
//  							'margin-left': '60%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#gimmetimetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '578%',
//  							'margin-left': '63%'
// 						})
// 					} else {
// 						$('#gimmetimetwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '400%',
//  							'margin-left': '67%'
//  						})
//  						}
						$('#gimmetimetwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '370px',
 							'margin-left': '650px'	 							
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
         			// if (window_width > 1200) {
//           				$('#majormajormajortwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '183%',
//  							'margin-left': '60%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#majormajormajortwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '540%',
//  							'margin-left': '63%'
// 						})
// 					} else {
// 						$('#majormajormajortwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '350%',
//  							'margin-left': '67%'
//  						})
//  						}
						$('#majormajormajortwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '220px',
 							'margin-left': '650px'	 							
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
	// if (window_width > 1200) {
//           				$('#keepswimmingtwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '55%',
// 							'margin-top': '0%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#keepswimmingtwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '5%',
// 							'margin-top': '50%'
// 						})
// 					} else {
// 						$('#keepswimmingtwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '5%',
//  							'margin-left': '63%'
//  						})
//  						}
						$('#keepswimmingtwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '10px',
 							'margin-left': '500px'	 							
 						});
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
        		start: 1210, //20:10,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='hellno'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='letsgo'></button>");
          			pop.pause();
          			//create click listener
          			// if (window_width > 1200) {
//           				$('#hellno').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px'
//  						})
//  					} else if (window_width < 500) {
// 						$('#hellno').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px'
// 						})
// 					} else {
// 						$('#hellno').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '47%',
//  							'margin-left': '15%'
//  						})
//  						} 
						$('#hellno').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '350px',
 							'margin-left': '100px'	 							
 						});
     		
          			$("#hellno").click(function(){
						//Goes to hybrid page and then on to traditional results
							pop.play( 1669 ); //27:49
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1701, //28:21
        								onStart: function( options ) { 
        								pop.play( 1722 ); //28:42 
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
         		  // if (window_width > 1200) {
//           				$('#letsgo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px'
//  						})
//  					} else if (window_width < 500) {
// 						$('#letsgo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px'
// 						})
// 					} else {
// 						$('#letsgo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '15%'
//  						})
//  						}     			//create click listener
						$('#letsgo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '100px',
 							'margin-left': '100px'	 							
 						});
          			$("#letsgo").click(function(){
						//create play video at specified time
							pop.play( 1701 ); //28:21
							$("button").hide();
							$("#progressbar").css('width', '70%');
										pop.code({
        								start: 1742, //28:42
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
 
 //run code to call a button for pop quiz
      		pop.code({
        		start: 1518, //25:18,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='uttwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='ostwo'></button>");
          			$("#footnotediv3").html("<button class='tbutton' id='uptwo'></button>");
          			pop.pause();
          			// if (window_width > 1200) {
//           				$('#uttwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '195%',
//  							'margin-left': '15%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#uttwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '264%',
//  							'margin-left': '10%',
//  							height: '5%'
// 						})
// 					} else {
// 						$('#uttwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '372%',
//  							'margin-left': '7%'
//  						})
//  						}
						$('#uttwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '200px',
 							'margin-left': '70px'	 							
 						});
          			//create click listener
          			$("#uttwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1532.5 ); //25:32.5
							$("button").hide();
							$("#progressbar").css('width', '90%');
         					//close button listener
         					});
         			// if (window_width > 1200) {
//           				$('#ostwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '163%',
//  							'margin-left': '0%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#ostwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '245%',
//  							'margin-left': '5%'
// 						})
// 					} else {
// 						$('#ostwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '338%',
//  							'margin-left': '0%'
//  						})
//  						}
						$('#ostwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '100px',
 							'margin-left': '10px'	 							
 						});
         			//create click listener
          			$("#ostwo").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 1532.5 ); //25:32.5
							$("button").hide();
							$("#progressbar").css('width', '90%');
         					//close button listener
         					});
         				// if (window_width > 1200) {
//           				$('#uptwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '215%',
//  							'margin-left': '9%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#uptwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '272%',
//  							'margin-left': '5%'
// 						})
// 					} else {
// 						$('#uptwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '408%',
//  							'margin-left': '0%'
//  						})
//  						}
						$('#uptwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '350px',
 							'margin-left': '10px'	 							
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
        		start: 1660, //27:40,
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='hellnotwo'></button>");
          			$("#footnotediv2").html("<button class='tbutton' id='letsgotwo'></button>");
          			pop.pause();
//routes to online leaning-toward screen
          			// if (window_width > 1200) {
//           				$('#hellnotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '65%',
// 							'margin-top': '28%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#hellnotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#hellnotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '40%',
//  							'margin-left': '70%'
//  						})
//  						}
						$('#hellnotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '360px',
 							'margin-left': '700px'	 							
 						});	
          			//create click listener
          			$("#hellnotwo").click(function(){
						//create play video at specified time
							pop.play( 1662 ); //27:42
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1669, //27:49
        								onStart: function( options ) { 
        								pop.play( 1752 ); //29:12
        								//close onstart
        								},
        					//close pop.code
        					});
         					//close button listener
         					});
					// if (window_width > 1200) {
//           				$('#letsgotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '65%',
// 							'margin-top': '18%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#letsgotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#letsgotwo').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '25%',
//  							'margin-left': '70%'
//  						})
//  						}	

						$('#letsgotwo').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
   							'margin-top': '230px',
 							'margin-left': '700px'	 							
 						});	
         			//create click listener
          			$("#letsgotwo").click(function(){
						//create play video at specified time
							pop.play( 1669 ); //27:49
							$("button").hide();
							$("#progressbar").css('width', '70%');
								pop.code({
        								start: 1701, //28:21
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

//Results section for traditional track
      		pop.code({
        		start: 1750, //29:10
        		onStart: function( options ) { 
        		var resultsSucker = Math.floor((Math.random()*100)+1);         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='results'></button>");
          			$("#results").addClass(resultsSucker)
          			pop.pause();
          			//create click listener
          			// if (window_width > 1200) {
//           				$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '38%',
// 							'margin-top': '18%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '12%',
//  							'margin-left': '60%'
//  						})
//  						}
						$('#results').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 						});
          			$("#results").click(function(){
          				if (resultsSucker < 30) {
						//create play video at specified time
							pop.play( 1783 ); //29:43
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1804, //30:04
        								onStart: function( options ) { 
        								pop.play( 1870.5 ); //31:10.5
        								//close onstart
        								},
        					//close pop.code
        					});
					} else if (35 < resultsSucker < 70){
         				pop.play( 1836 ); //30:26
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1853.5, //30:53.5
        								onStart: function( options ) { 
        								pop.play( 1870.5 ); //31:10.5
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else {
         				pop.play( 1853.5 ); //30:53.5
							$("button").hide();
							$("#progressbar").css('width', '100%');
         				}
         				
         				//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
//Results for online track     		
      		pop.code({
        		start: 1780, //29:40
        		onStart: function( options ) { 
        		var resultsSucker = Math.floor((Math.random()*100)+1);         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='resultsonline'></button>");
          			$("#resultsonline").addClass(resultsSucker)
          			pop.pause();
          			//create click listener
          			// if (window_width > 1200) {
//           				$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '38%',
// 							'margin-top': '18%'
//  						})
//  					} else if (window_width < 500) {
// 						$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '50%'
// 						})
// 					} else {
// 						$('#results').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '12%',
//  							'margin-left': '60%'
//  						})
//  						}
						$('#resultsonline').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 						});
          			$("#resultsonline").click(function(){
          				if (resultsSucker < 35) {
						//Jump to results for online fail to graduate
							pop.play( 1804 ); //30:04
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1836, //30:26
        								onStart: function( options ) { 
        								pop.play( 1870.5 ); //31:10.5
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else if (35 < resultsSucker < 70){
         				pop.play( 1836 ); //30:26
							$("button").hide();
							$("#progressbar").css('width', '100%');
							pop.code({
        								start: 1853.5, //30:53.5
        								onStart: function( options ) { 
        								pop.play( 1870.5 ); //31:10.5
        								//close onstart
        								},
        					//close pop.code
        					});
         				} else {
         				pop.play( 1853.5 ); //30:53.5
							$("button").hide();
							$("#progressbar").css('width', '100%');
         				}
         				//close button listener
         					});
          			//close onstart function
        			},
        		//close pop.code	
     			});
     			     
//Code to play game again
      		pop.code({
        		start: 1886, //31:26
        		onStart: function( options ) {         
          			//create button
          			$("#footnotediv").html("<button class='tbutton' id='playagain'></button>");
          			// if (window_width > 1200) {
//           				$('#playagain').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  						})
//  					} else if (window_width < 500) {
// 						$('#playagain').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-left': '25%'
// 						})
// 					} else {
// 						$('#playagain').css({
//  							top: chickens_p.top + 'px',
//  							left: chickens_p.left + 'px',
//  							'margin-top': '18%',
//  							'margin-left': '35%'
//  						})
//  						}
						$('#playagain').css({
 							top: chickens_p.top + 'px',
 							left: chickens_p.left + 'px',
 						});
          			//create click listener
          			$("#playagain").click(function(){
						//create play video at specified time, 15 seconds
							pop.play( 0 );
							$("button").hide();
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