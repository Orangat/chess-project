$(document).ready(function() {
  $('#touch-menu').click(function() {
    $('.menu').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.menu').removeAttr('style');
		 }
	});//end resize
});//end ready