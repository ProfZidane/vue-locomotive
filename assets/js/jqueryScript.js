
// jquery animation scroll 

$(document).ready(function(){

    $(window).on('scroll', function () {
    
    var elmt   = $('.from-left, .from-right, .from-top');
    var topImg = $('.from-left, .from-right').offset().top;
    var scroll = $(window).scrollTop();
    
        $(elmt).each(function() {
            
            var topImg = $(this).offset().top - 300;
            
                if ( topImg < scroll ) {
                
                $(this).css("transform", "translate(0,0)");
                $(this).css("opacity", "1");
                
                };
        });
    });

    $('.hover_ombre').mouseover(function(){
      $(this).addClass('ombre');
    })

    $('.hover_ombre').mouseout(function(){
      $(this).removeClass('ombre');
    })
});