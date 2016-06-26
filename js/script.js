function randomAnimation(){
    var number;
    var animationString;
    number = Math.floor((Math.random() * 9) + 1);
    switch(number) {
    case 1:
        animationString = "rotateInUpRight";
        break;
    case 2:
        animationString = "rotateInUpLeft";
        break;
    case 3:
        animationString = "fadeInDown";
        break;
    case 4:
        animationString = "fadeInLeft";
        break;    
    case 5:
        animationString = "fadeInUp";
        break;    
    case 6:
        animationString = "rollIn";
        break;    
    case 7:
        animationString = "zoomInUp";
        break;    
    case 8:
        animationString = "zoomInRight";
        break;    
    case 9:
        animationString = "zoomInLeft";
        break;
    } 
    return animationString;
    
}

$(document).ready(function(){
    
    $(".about").css("display","none");
    $(".services").css("display","none");
    $(".contact").css("display","none");
    var anString = "";
    var oldAnString = "";
    
    $( "#home-link" ).click(function() {
        oldAnString = anString;
        anString = randomAnimation();
        
         
        if ($('.about').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.services').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.contact').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }
        $(".home").css("display","block");
        $( ".home" ).addClass( "animated " + anString );
        
        $(".about").css("display","none");
        $(".services").css("display","none");
        $(".contact").css("display","none");
    });
    
    $( "#about-link" ).click(function() {
        oldAnString = anString;
        anString = randomAnimation();
        
        $(".about").css("display","block");
        $( ".about" ).addClass( "animated " + anString ); 
        if ($('.home').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.services').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.contact').hasClass('animated rotateInUpRight')) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }
        $(".home").css("display","none");
        $(".services").css("display","none");
        $(".contact").css("display","none");
 
    });    
    
    $( "#services-link" ).click(function() {
        oldAnString = anString;
        anString = randomAnimation();
        
        $(".services").css("display","block");
        $( ".services" ).addClass( "animated " + anString ); 
        if ($('.about').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.home').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.contact').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }
        $(".about").css("display","none");
        $(".home").css("display","none");
        $(".contact").css("display","none"); 
    });     
    
    $( "#contact-link" ).click(function() {
        oldAnString = anString;
        anString = randomAnimation();
        
        $(".contact").css("display","block");
        $( ".contact" ).addClass( "animated " + anString ); 
        if ($('.about').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.home').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }        
        if ($('.services').hasClass("animated " + oldAnString)) {
            $(this).parent().removeClass( "animated " + oldAnString );
        }
        $(".about").css("display","none");
        $(".home").css("display","none");
        $(".services").css("display","none"); 
    }); 
    

});