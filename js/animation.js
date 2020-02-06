  'use strict'
  
  $(document).ready(function(){
      
    $('#services').viewportChecker({
        classToAdd: 'in-viewport',
        offset: 200,
        callbackFunction: function() {
        $('.img-card').addClass('animated fadeIn slower');
        }
    });

    $('#about').viewportChecker({
        classToAdd: 'in-viewport',
        offset: 300,
        callbackFunction: function() {
          $('.img-me').addClass('animated fadeIn slower');
          $('#me-name').addClass('animated flipInX slower');
          $('#me-tite, #me-degree').addClass('animated fadeInLeftBig slower');
        }
    });

    $('#contact').viewportChecker({
        classToAdd: 'in-viewport',
        offset: 250,
        callbackFunction: function() {
          $('#linkedin, #email').addClass('animated fadeIn slower');
        }
    });

    $( ".nav-link" ).on( "click", function() {
        if($('.collapsed').length == 0){
          $('.navbar-collapse').collapse('hide');
        }
    });

    $('a[href*="#"]')
  		.not('[href="#"]')
  		.not('[href="#0"]')
  		.click(function(event) {
    		// On-page links
    		if (
      		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      		&& 
      		location.hostname == this.hostname
    		) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      		if (target.length) {
        		event.preventDefault();
        		$('html, body').animate({
          		scrollTop: target.position().top - (($( window ).width() < 992)? 290 : 60)
        		}, 1000, function() {

          		var $target = $(target);
          		$target.focus();
          		if ($target.is(":focus")) {
            		return false;
          		} else {
            		$target.attr('tabindex','-1');
            		$target.focus();
          		};
        		});
      		}
        }
        return false;
  		});
      
    $(".nav-link").mouseup(function(){
        $(this).blur();
    });

  });
