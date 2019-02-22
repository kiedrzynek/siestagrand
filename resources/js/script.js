$(document).ready(function() {
    
    
    $('#gallery').click(function() {
        $('html, body').animate({scrollTop: $('.gallery').offset().top}, 500);
    });
    
    $('#location').click(function() {
       $('html, body').animate({scrollTop: $('.location').offset().top}, 500); 
    });
    
    $('#prices').click(function() {
       $('html, body').animate({scrollTop: $('.prices').offset().top}, 500); 
    });
    
    $('#section-form').click(function() {
       $('html, body').animate({scrollTop: $('.section-form').offset().top}, 500); 
    });
    
     $('#js-book-now').click(function() {
       $('html, body').animate({scrollTop: $('.prices').offset().top}, 500); 
    });
    
     $('#js-show-me').click(function() {
       $('html, body').animate({scrollTop: $('.gallery').offset().top}, 500); 
    });
    

    
});