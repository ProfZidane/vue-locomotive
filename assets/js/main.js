// function de preloading 

window.addEventListener('load', function() {
  const preload = document.querySelector('.preload');
  const principal = document.getElementById('particles-js');
  preload.classList.add('preload-finish');

});

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


// animation button 

var button = document.querySelectorAll('.btn-animate');

button.forEach(element => {
  
  element.addEventListener('mouseover', ()=>{
      element.classList.add('animate-button');
  });  
  element.addEventListener('mouseout', ()=> {
    element.classList.remove('animate-button');
  });
});


// animation nav service IT 

var rfid = document.getElementById('pills-home-tab1');
var nfc = document.getElementById('pills-profile-tab');
var oc = document.getElementById('pills-contact-tab');
var image = document.getElementById('Image-nav');

rfid.addEventListener('click', ()=> {
  image.setAttribute('src','../assets/img/1145.jpg');
});
nfc.addEventListener('click', ()=> {
  image.setAttribute('src','../assets/img/2346.jpg');
});

oc.addEventListener('click', ()=> {
  image.setAttribute('src','../assets/img/2346.jpg');
});



