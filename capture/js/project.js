

$(document).ready(function(){


 console.log('yes');
  //Vignette tag fade in

  	//CFA tag fade in
  $('.carousel').on('slid.bs.carousel', function () {
  	console.log("fade in function called");
    var firstDiv = $('div.item')[ 5 ];
     $('.carousel-inner').find(firstDiv);
      if ($(firstDiv).hasClass('active')){
         console.log(firstDiv.id);
         $('#frame6').ready(function(){         
         	$('#CFAvigTag').fadeTo( 800, 1 );
          })
      }
  });

  	// //Show vignette

      $('#CFAvigTag').click(showCFAVig);
      $('#CFAreturn').click(hideCFA);

        function showCFAVig(){
          console.log("showCFAvig function fired");
          $('#CFAvig').show();
        }

  		
  // 		$(function() {
		//   $('a[href*=#]:not([href=#])').click(function() {
		//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		//       var target = $(this.hash);
		//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		//       if (target.length) {
		//         $('#carousel').animate({
		//           scrollTop: target.offset().top
		//         }, 1000);
		//         return false;
		//       }
		//     }
		//   });
		// });
  	//}

  	function hideCFA() {

	    $('#CFAvig').hide();
  	}

  	//Hide vignette


  	//Preservation

  $('.carousel').on('slid.bs.carousel', function () {
  	console.log("calling function to fade in tag 1")
    var firstDiv = $('div.item')[ 8 ];
     $('.carousel-inner').find(firstDiv);
      if ($(firstDiv).hasClass('active')){
         console.log(firstDiv.id);
         $('#frame9').ready(function(){         
         	$('#planVigTag').fadeTo( 800, 1 );
          })
      }
  })

		$('#planVigTag').click(showInfo);

		function showInfo(){
			$('#infoVig').show();
		}

		$('#infoReturn').click(hideInfo);

		function hideInfo() {
			console.log("calling function hideInfo");
			$('#infoVig').hide();
		}

  // //Nixon

  $('.carousel').on('slid.bs.carousel', function () {
  	console.log("calling function tag 2 fade in");
    var firstDiv = $('div.item')[ 14 ];
     $('.carousel-inner').find(firstDiv);
      if ($(firstDiv).hasClass('active')){
         console.log(firstDiv.id);
         $('#frame15').ready(function(){         
         	$('#nixonVigTag').fadeTo( 800, 1 );
          })
      }
  })

    $('#nixonVigTag').click(showNixon);

  	function showNixon(){
  		$('#NixonVig').show();
  	}

  	$('#nixonReturn').click(hideNixon);

  	function hideNixon() {
  		$('#NixonVig').hide();
  	}

  // //Katie Rife
    $('.carousel').on('slid.bs.carousel', function () {
    var firstDiv = $('div.item')[ 17 ];
     $('.carousel-inner').find(firstDiv);
      if ($(firstDiv).hasClass('active')){
         console.log(firstDiv.id);
         $('#frame18').ready(function(){         
         	$('#katieVigTag').fadeTo( 800, 1 );
          })
      }
  })

    $('#katieVigTag').click(showKatie);

  	function showKatie(){
  		$('#KatieVig').show();
  	}

  	$('#katieReturn').click(hideKatie);

  	function hideKatie() {

  		$('#KatieVig').hide();

  	}


});



