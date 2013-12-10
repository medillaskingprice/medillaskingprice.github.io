function jumpTo(input) {
  $('body').animate({
      scrollTop: $(input).offset().top
    }, 800);
};



$(document).ready(function() {
  /*MODAL*/
$("#btn-show-modal").click(function(e) {
  e.preventDefault();
  $('#myModal').modal('show');
});
});


/*SLIDESHOW*/
 $(function(){
      $("#slides").slidesjs({
      });
    }); 


$('img#hed1').hide().delay(1000).fadeIn(2000);

