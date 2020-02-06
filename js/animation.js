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
    
    $('a[href*="#"]').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(this.hash).position().top - (($( window ).width() < 992)? 290 : 60)
        }, 1000);
        return false;
      });
      
    $(".nav-link").mouseup(function(){
        $(this).blur();
    });

  });
