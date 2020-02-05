  'use strict'
  
  $(document).ready(function(){
      
    $('#services').viewportChecker({
        classToAdd: 'in-viewport',
        offset: 150,
        callbackFunction: function() {
        $('.img-card').addClass('animated fadeIn slower');
        }
    });

    $('#about').viewportChecker({
        classToAdd: 'in-viewport',
        offset: 150,
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

  });